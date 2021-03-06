import React from 'react'
import {Transition} from '@headlessui/react'
import ScrollLock, {TouchScrollable} from 'react-scrolllock';

interface IProps {
    active: boolean;
    children: React.ReactNode;
    title?: string;
    submitText?: string;
    handleHideModal: () => void;
    onSubmit: (e: React.ChangeEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
}

const Modal = ({active, title,submitText = 'Submit', handleHideModal, onSubmit, children}: IProps) => {
    return (
        <>
            <ScrollLock isActive={active}/>
            <TouchScrollable>
                <div
                    className={`${active ? 'pointer-events-auto' : 'pointer-events-none'} fixed inset-0 overflow-y-auto`}>
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition show={active}>
                            <Transition.Child
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                // className={`w-full flex justify-end`}
                            >
                                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                    <div className="absolute inset-0 bg-gray-500 opacity-75"/>
                                </div>
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                  aria-hidden="true">​</span>
                            <Transition.Child
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            >
                                <div
                                    role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            {/*<div*/}
                                            {/*    className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">*/}
                                            {/*    /!* Heroicon name: outline/exclamation *!/*/}
                                            {/*    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg"*/}
                                            {/*         fill="none"*/}
                                            {/*         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">*/}
                                            {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
                                            {/*              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>*/}
                                            {/*    </svg>*/}
                                            {/*</div>*/}
                                            <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <h3 className="text-lg leading-6 font-medium text-gray-900"
                                                    id="modal-headline">
                                                    {title}
                                                </h3>
                                                <div className="mt-2">
                                                    <div className="text-sm text-gray-500">
                                                        {children}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button type="button"
                                                onClick={onSubmit}
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-lighter focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm">
                                            {submitText}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleHideModal}
                                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </Transition>
                    </div>
                </div>
            </TouchScrollable>
        </>
    )
}

export default Modal