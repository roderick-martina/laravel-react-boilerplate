import * as React from 'react'
import Layout from "@/Shared/Layout";

const ConfirmPassword = () => {
    const handleSubmit = () => {
        // '/user/confirm-password'
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <Layout>
            <div className="w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div>
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Password Confirmation
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8">
                        <div className="rounded-md shadow-sm">
                            <div>
                                <label htmlFor="recoverCode" className="block text-sm font-medium text-gray-700">
                                        For your security, please confirm your password to continue.
                                </label>
                                <div className="mt-3">
                                    <input
                                        onChange={handleOnChange}
                                        type="text"
                                        name="password"
                                        id="password"
                                        className="form-input"
                                        placeholder="password"/>
                                </div>
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

export default ConfirmPassword