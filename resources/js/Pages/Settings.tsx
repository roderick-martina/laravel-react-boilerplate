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
    '_method': string;
}
const Settings = ({route_name, auth, errors}: IDefaultProps) => {
    const profileHeading = 'Personal Information'

    const [profileValues, setProfileValues] = React.useState<IProfile>({
        first_name: auth.user.first_name,
        last_name: auth.user.last_name,
        email: auth.user.email,
        '_method': 'PUT',
    })

    const [passwordValues, setPasswordValues] = React.useState({
        current_password: '',
        password: '',
        password_confirmation: '',
        '_method': 'PUT',
    })

    const handleChange = (e :React.ChangeEvent<HTMLInputElement>, setValues: React.Dispatch<SetStateAction<any>>) => {
        const key = e.target.id;
        const value = e.target.value
        setValues((values: object) => ({
            ...values,
            [key]: value,
        }))
    }

    const handleProfileChange = (e :React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e, setProfileValues)
    }

    const profileSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        return Inertia.post(`user/profile-information`, profileValues)
    }
    const profileErrorBag = errors !== null && errors.hasOwnProperty('updateProfileInformation') ? errors.updateProfileInformation : {}
    const passwordErrorBag = errors !== null && errors.hasOwnProperty('updatePassword') ? errors.updatePassword : {}

    return (
        <NestedLayout name={auth.user.name} route_name={route_name}>
            <h1 className="text-lg leading-6 font-medium text-cool-gray-900">Settings</h1>
            <ErrorBanner title={`There were errors while changing your profile settings`} errors={errors.updateProfileInformation} />
            <div className="py-4">
                <FormSection heading={'Personal Information'} onSubmit={profileSubmit}>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <FormInput
                                id={"first_name"}
                                label={'First name'}
                                value={profileValues.first_name}
                                onChange={handleProfileChange}
                                errors={profileErrorBag}
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <FormInput
                                id={"last_name"}
                                label={'Last name'}
                                value={profileValues.last_name}
                                onChange={handleProfileChange}
                                errors={profileErrorBag}
                            />
                        </div>

                        <div className="col-span-6">
                            <FormInput
                                id={"email"}
                                label={'Email'}
                                type={'email'}
                                value={profileValues.email}
                                onChange={handleProfileChange}
                                errors={profileErrorBag}
                            />
                        </div>

                        {/*<div className="col-span-6 sm:col-span-3">*/}
                        {/*    <label htmlFor="language"*/}
                        {/*           className="block text-sm font-medium leading-5 text-gray-700">Language</label>*/}
                        {/*    <select*/}
                        {/*        id="language"*/}
                        {/*        className="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"*/}
                        {/*        disabled={true}*/}
                        {/*    >*/}
                        {/*        <option>English</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}
                    </div>
                </FormSection>
                {/*<div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>*/}
            </div>
        </NestedLayout>
    )
}

Settings.layout = (page: React.ReactNode) => <Layout children={page}/>

export default Settings
