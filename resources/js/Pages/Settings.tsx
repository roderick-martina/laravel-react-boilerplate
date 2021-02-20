import * as React from 'react'
import Layout from "@/Shared/Layout";
import NestedLayout from "@/Shared/NestedLayout";
import {IDefaultProps} from '@/Interfaces'
import FormSection from "@/Components/FormSection";
import FormInput from "@/Components/Form/FormInput";
import {SetStateAction} from "react";
import {Inertia} from '@inertiajs/inertia'
import ErrorBanner from "@/Components/ErrorBanner";

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

    return (
        <NestedLayout name={auth.user.name} route_name={route_name}>
            <ErrorBanner title={`There were errors while changing your profile settings`} errors={errors}/>
            <div className="py-4">
                <FormSection heading={'Profile Information'} onSubmit={profileSubmit}>
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
                {/*<div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>*/}
            </div>
        </NestedLayout>
    )
}

Settings.layout = (page: React.ReactNode) => <Layout children={page}/>

export default Settings
