import * as React from 'react'
import {Transition} from '@headlessui/react'

interface IProps {
    active: boolean
    handleSearchEscape: () => void
}

const Search = ({active, handleSearchEscape}: IProps) => {
    const searchRef = React.useRef<HTMLInputElement | null>(null)

    React.useEffect(() => {
        // Delay is needed because modal has transition
        setTimeout(() => {
            searchRef.current?.focus()
        },1)
    }, [active])


    return (
        <div className={`${active ? 'pointer-events-auto' : 'pointer-events-none'} fixed z-10 inset-0 overflow-y-auto`}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition
                    show={active}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div onClick={handleSearchEscape} className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-900 opacity-25"/>
                    </div>
                </Transition>
                 {/*This element is to trick the browser into centering the modal contents.*/}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen md:hidden"
                      aria-hidden="true">​</span>

                <Transition
                    show={active}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6 md:mt-40"
                >
                    <div

                        role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div>
                            <div className="flex-1 flex border-b pb-4">
                                <form className="w-full flex items-center lg:ml-0" action="#" method="GET">
                                    <label htmlFor="search_field" className="sr-only">Search</label>
                                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                            <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20"
                                                 fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd"
                                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                        <input
                                            ref={searchRef}
                                            // autoFocus={autoFocusActive}
                                            id="search_field"
                                               className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-md"
                                               placeholder="Search" type="search" name="search"/>
                                    </div>
                                    <div>
                                        <button onClick={handleSearchEscape} className={`escape-button`}></button>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-3 sm:mt-5">
                                <h3 className="text-lg leading-6 font-semibold text-gray-900">
                                    Search results
                                </h3>
                                <div className="mt-4">
                                    <ul>
                                        <li>
                                            <div className={`bg-gray-50 hover:bg-primary-lighter group flex py-4 rounded-lg cursor-pointer`}>
                                                <div className={`w-14 flex justify-center items-center`}>
                                                    <svg className={`text-gray-600 group-hover:text-white`} width="20" height="20"
                                                         viewBox="0 0 20 20">
                                                        <path
                                                            d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z"
                                                            stroke="currentColor" fill="none" fillRule="evenodd"
                                                            strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </div>
                                                <div className={`flex flex-col text-sm text-gray-500 group-hover:text-white`}>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                    </p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Consequatur amet
                                                        labore.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-6 border-t pb-1"></div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}

export default Search