import React from 'react'
interface IErrors {
    [key: string]: string
}
interface IProps {
    title: string;
    errors: IErrors
    withoutErrorBag?: boolean
}

const ErrorBanner = ({title, errors, withoutErrorBag = false}: IProps) => {
    const hasErrors =  Object.keys(errors).length > 0
    const resolvedErrors: string[] = []
    if(hasErrors) {
        if(withoutErrorBag) {
            Object.values(errors).forEach(error => resolvedErrors.push(error))
        } else {
            const errorKeys =  Object.keys(errors)
            errorKeys.forEach((errorKey) => {
                Object.values(errors[errorKey]).forEach(error => resolvedErrors.push(error))
            })
        }

    }
    if (hasErrors) {
        const tmpErrors = Object.values(errors)
        return (
            <div className="rounded-md bg-red-50 p-4 my-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                            {title}
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                            <ul className="list-disc pl-5 space-y-1">
                                {resolvedErrors.map((error, index) => (
                                    <li key={`${error}-${index}`}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return null
}

export default ErrorBanner