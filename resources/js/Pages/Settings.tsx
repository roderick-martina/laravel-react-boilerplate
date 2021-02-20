import * as React from 'react'
import Layout from "@/Shared/Layout";
import NestedLayout from "@/Shared/NestedLayout";
import {IDefaultProps} from '@/Interfaces'
import FormSection from "@/Components/FormSection";
import FormInput from "@/Components/Form/FormInput";
import {SetStateAction} from "react";
import {Inertia} from '@inertiajs/inertia'
import ErrorBanner from "@/Components/ErrorBanner";
import axios from 'axios'
import AppSection from "@/Components/AppSection";
import Modal from "@/Components/Modal"

interface IProfile {
    first_name: string;
    last_name: string;
    email: string;
}

interface IPassword {
    current_password: string;
    password: string;
    password_confirmation: string;
}

const Settings = ({route_name, auth, errors}: IDefaultProps) => {
    const profileHeading = 'Personal Information'
    const passwordHeading = 'Update Password'
    const passwordSubText = 'Ensure your account is using a long, random password to stay secure'
    const twoFaHeading = 'Two Factor Authentication'
    const twoFaSubText = 'Add additional security to your account using two factor authentication.'

    const [profileValues, setProfileValues] = React.useState<IProfile>({
        first_name: auth.user.first_name,
        last_name: auth.user.last_name,
        email: auth.user.email,
    })

    const [passwordValues, setPasswordValues] = React.useState<IPassword>({
        current_password: '',
        password: '',
        password_confirmation: '',
    })

    const [qrCode, setQrCode] = React.useState('')
    const [showRecoveryCodes, setShowRecoveryCodes] = React.useState(false)
    const [recoveryCodes, setRecoveryCodes] = React.useState([])
    const [modalActive, setModalActive] = React.useState(false)

    const hideModal = () => {
        setModalActive(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setValues: React.Dispatch<SetStateAction<any>>) => {
        const key = e.target.id;
        const value = e.target.value
        setValues((values: object) => ({
            ...values,
            [key]: value,
        }))
    }

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e, setProfileValues)
    }

    const clearPasswordValues = () => {
        setPasswordValues({
            current_password: '',
            password: '',
            password_confirmation: ''
        })
    }

    const profileSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        return Inertia.put(`user/profile-information`, profileValues,)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e, setPasswordValues)
    }
    const handlePasswordSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        return Inertia.put(`user/password`, passwordValues, {
            onSuccess: () => clearPasswordValues(),
            onError: () => clearPasswordValues()
        })
    }

    const getQrCode = () => {
        axios.get('user/two-factor-qr-code')
            .then(res => setQrCode(res.data.svg))
    }

    const getRecoveryCode = () => {
        axios.get('/user/two-factor-recovery-codes')
            .then(res => setRecoveryCodes(res.data))
    }

    const enableTwoFa = (e: any) => {
        setModalActive(true)
        // handleSubmit(e, `/user/two-factor-authentication`)
        //     .then(() => {
        //         getQrCode()
        //         getRecoveryCode()
        //     })
    }

    const deleteTwoFa = () => {
        Inertia.delete('user/two-factor-authentication', {
            onStart: () => {
                // const message = {
                //     title: 'Removed two factor authentication',
                //     description: ''
                // }
                // setNotificationMessage(message)
            },
            onSuccess: () => {
                // setShowSuccessNotification(true)
            },
        })
    }

    const regenerateRecoveryCode = (e: any) => {
        const message = {
            title: 'Regenerated recovery codes',
            description: ''
        }
        // const setNotification = () => setShowSuccessNotification(true)
        // const setMessage = () => setNotificationMessage(message)
        // handleSubmit(e, 'user/two-factor-recovery-codes', null, setNotification, setMessage)
        //     .then(() => getRecoveryCode())
    }

    return (
        <NestedLayout name={auth.user.name} route_name={route_name}>
            <ErrorBanner title={`There were errors while changing your profile settings`} errors={errors}/>
            <div className="py-4">
                <FormSection heading={profileHeading} onSubmit={profileSubmit}>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <FormInput
                                id={"first_name"}
                                label={'First name'}
                                value={profileValues.first_name}
                                onChange={handleProfileChange}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <FormInput
                                id={"last_name"}
                                label={'Last name'}
                                value={profileValues.last_name}
                                onChange={handleProfileChange}
                            />
                        </div>

                        <div className="col-span-6">
                            <FormInput
                                id={"email"}
                                label={'Email'}
                                type={'email'}
                                value={profileValues.email}
                                onChange={handleProfileChange}
                            />
                        </div>
                    </div>
                </FormSection>

                {/* Password section*/}
                <FormSection heading={passwordHeading} description={passwordSubText} onSubmit={handlePasswordSubmit}>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-5">
                            <FormInput
                                id={"current_password"}
                                label={'Current Password'}
                                type={'password'}
                                value={passwordValues.current_password}
                                onChange={handlePasswordChange}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-5">
                            <FormInput
                                id={"password"}
                                label={'New Password'}
                                type={'password'}
                                value={passwordValues.password}
                                onChange={handlePasswordChange}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-5">
                            <FormInput
                                id={"password_confirmation"}
                                label={'Confirm Password'}
                                type={'password'}
                                value={passwordValues.password_confirmation}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </div>
                </FormSection>

                {/* 2fa section*/}
                <AppSection heading={twoFaHeading} subText={twoFaSubText}>
                    <div className="grid grid-cols-6 gap-2">
                        <div className="col-span-6 sm:col-span-5">
                            {auth.user.two_factor_enabled ? (
                                <h3 className={'text-lg font-medium text-gray-900'}>
                                    You have enabled two factor authentication.
                                </h3>
                            ) : (
                                <h3 className={'text-lg font-medium text-gray-900'}>
                                    You have not enabled two factor authentication.
                                </h3>
                            )}
                        </div>

                        <div className="col-span-6 sm:col-span-5 text-gray-600">
                            <p className={'text-sm'}>
                                When two factor authentication is enabled, you will be prompted for
                                a secure, random token during authentication. You may retrieve this token from your
                                phone's Google Authenticator application.</p>
                        </div>

                        {auth.user.two_factor_enabled && (
                            <>
                                {qrCode !== null && (
                                    <div className="col-span-6 sm:col-span-5 text-gray-600">
                                        <p className={'text-sm font-semibold'}>
                                            Two factor authentication is now enabled.
                                            Scan the
                                            following
                                            QR code using your
                                            phone's
                                            authenticator application.</p>
                                    </div>
                                )}
                                <div className="col-span-6 sm:col-span-5 text-gray-600">
                                    <div dangerouslySetInnerHTML={{__html: qrCode}}/>
                                </div>
                                {showRecoveryCodes && (
                                    <>
                                        <div className="col-span-6 sm:col-span-5 text-gray-600">
                                            <p className={'text-sm'}>Store these recovery codes in a secure password
                                                manager. They can be used to recover access to your account if your two
                                                factor authentication device is lost.</p>
                                        </div>
                                        <ul
                                            className="col-span-6 sm:col-span-5 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"
                                        >
                                            {recoveryCodes.map(code => (
                                                <li>{code}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </>
                        )}

                        <div className="col-span-6 sm:col-span-5">
                            {auth.user.two_factor_enabled ? (
                                <>
                                    {showRecoveryCodes ? (
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mr-3"
                                            onClick={e => regenerateRecoveryCode(e)}
                                        >
                                            Regenerate Recovery Codes
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mr-3"
                                            onClick={() => setShowRecoveryCodes(true)}
                                        >
                                            Show Recovery Codes
                                        </button>
                                    )}

                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-600 transition ease-in-out duration-150"
                                        onClick={() => deleteTwoFa()}
                                    >
                                        Disable
                                    </button>
                                </>
                            ) : (
                                <button onClick={enableTwoFa} className={`btn`}>Enable</button>
                            )}
                        </div>
                    </div>
                </AppSection>
            </div>
            <Modal active={modalActive} title={'Password confirmation'} handleHideModal={hideModal}>
                <p>
                    For your security, please confirm your password to continue.
                </p>
                <form className={`mt-3`}>
                    <FormInput
                        id={"check_password_confirmation"}
                        label={''}
                        type={'password'}
                        value={passwordValues.password}
                        onChange={handlePasswordChange}
                    />
                </form>
            </Modal>
        </NestedLayout>
    )
}

Settings.layout = (page: React.ReactNode) => <Layout children={page}/>

export default Settings
