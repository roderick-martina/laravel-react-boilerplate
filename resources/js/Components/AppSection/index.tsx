import React from 'react'

const AppSection = ({heading = '', subText = '', children}: any) => {
    return (
        <>
            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                {heading}
                            </h3>
                            <p className="mt-1 text-sm leading-5 text-gray-600">
                                {subText}
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block">
                <div className="py-5">
                    <div className="border-t border-gray-200"></div>
                </div>
            </div>
        </>
    )
}

export default AppSection
