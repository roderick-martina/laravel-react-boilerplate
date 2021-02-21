import * as React from 'react'
import Layout from "@/Shared/Layout";
import {Inertia} from '@inertiajs/inertia'
import axios from "axios";

const TwoFactorChallenge = () => {
    const [code, setCode] = React.useState({code: ''})
    const [recoveryCode, setRecoveryCode] = React.useState({recovery_code: ''})
    const [useRecoverCode, setUseRecoverCode] = React.useState(false)
    const toggleUseRecoveryCode = () => {
        setUseRecoverCode(!useRecoverCode)
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (useRecoverCode) {
            Inertia.post('/two-factor-challenge', recoveryCode)
        } else {
            Inertia.post('/two-factor-challenge', code)
        }
    }

    const handleCodeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode({
            code: e.target.value
        })
    }

    const handleRecoveryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRecoveryCode({
            recovery_code: e.target.value
        })
    }

    return (
        <Layout>
            <div className="w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Two Factor Authentication
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8">
                        <div className="rounded-md shadow-sm">
                            <div>
                                <div className="mt-3">
                                    {useRecoverCode ? (
                                        <input
                                            onChange={handleRecoveryCodeChange}
                                            type="text"
                                            name="recovery"
                                            id="recovery"
                                            className="form-input"
                                            placeholder="recovery code"/>
                                    ) : (
                                        <input
                                            onChange={handleCodeOnChange}
                                            type="text"
                                            name="code"
                                            id="code"
                                            className="form-input"
                                            placeholder="code"/>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                            <div className="text-sm leading-5">
                                <button
                                    type="button"
                                    onClick={toggleUseRecoveryCode}
                                    className="font-medium text-primary hover:text-primary-lighter focus:outline-none focus:underline transition ease-in-out duration-150">
                                    {useRecoverCode ? 'Gebruik code' : 'Gebruik herstel code'}
                                </button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit"
                                    className="btn w-full ">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default TwoFactorChallenge