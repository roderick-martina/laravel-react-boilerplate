import React from 'react'

const FormInput = (props: any) => {
    const {label, id} = props
    let attribute = {...props}
    return (
        <>
            {label.length > 0 && (
                <label
                    htmlFor={id}
                    className="block text-sm font-medium leading-5 text-gray-700"
                >
                    {label}
                </label>
            )}
            <input
                {...attribute}
                // className={`border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 mt-1 form-input block w-full py-2 px-4 border rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5`}
                className={`form-input mt-1`}
            />
        </>
    )
}

export default FormInput
