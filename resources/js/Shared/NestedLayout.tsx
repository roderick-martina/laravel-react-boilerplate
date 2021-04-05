import React, {useState, useRef, useEffect} from 'react';
import {Transition} from '@headlessui/react'
// @ts-ignore
import OutsideClickHandler from 'react-outside-click-handler';
import {InertiaLink} from '@inertiajs/inertia-react'
import axios from 'axios'
import Sidebar from '@/Components/Sidebar'
import {useAppContext} from "@/Hooks/AppContext";
import Notification from "@/Components/Notification";
import Search from "@/Components/Search";

interface IProps {
    name: string
    route_name: string
    children: React.ReactNode,
}

const NestedLayout = ({name, route_name, children}: IProps) => {
    const [profileIsOpen, setProfileIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [searchActive, setSearchActive] = useState(false);
    const {handleMobileNavToggle} = useAppContext()

    const focusOnSearch = (event: KeyboardEvent) => {
        const windowsCombination = event.ctrlKey && event.keyCode === 75
        const macCombination = event.metaKey && event.keyCode === 75
        if (windowsCombination || macCombination) {
            setSearchActive(true)
        } else if (event.key === 'Escape') {
            setSearchActive(false)
        }
    }

    const handleSearchEscape = () => {
        setSearchActive(false)
    }

    const handleSearchButton = () => {
        setSearchActive(true)
    }

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value !== '/') {
            setSearchQuery(event.target.value)
        }
    }

    const logout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        axios.post('/logout')
            .then(() => {
                window.location.href = '/'
            })
    }

    useEffect(() => {
        window.addEventListener("keydown", focusOnSearch)
        return () => {
            window.removeEventListener("keydown", focusOnSearch)
        }
    }, [])

    return (
        <>
            <Sidebar
                focusOnSearch={focusOnSearch}
                route_name={route_name}/>
            <div className="flex-1 flex flex-col overflow-auto focus:outline-none" tabIndex={0}>
                <Notification/>
                <Search active={searchActive} handleSearchEscape={handleSearchEscape}/>
                <div
                    // className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow border-b border-gray-200 lg:border-none">
                    className="flex-shrink-0 flex h-16 bg-white shadow border-b border-gray-200 lg:border-none">
                    <button
                        onClick={handleMobileNavToggle}
                        className="px-4 border-r border-cool-gray-200 text-cool-gray-400 focus:outline-none focus:bg-cool-gray-100 focus:text-cool-gray-600 lg:hidden"
                        aria-label="Open sidebar">
                        {/* Heroicon name: menu-alt-1 */}
                        <svg className="h-6 w-6 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </button>
                    {/* Search bar */}
                    <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-5xl lg:mx-auto lg:px-8">
                        <div className="flex-1 flex items-center">
                            <button onClick={handleSearchButton} className={`py-2 w-full flex items-center md:ml-0`}>
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20"
                                     fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clipRule="evenodd"/>
                                </svg>
                                <label htmlFor="search_field" className="sr-only">Search</label>
                                <p className={'text-gray-500 mr-4 ml-4'}>Quick search for anything</p>
                                <span
                                    className="hidden sm:block text-gray-400 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md">
                                           <span className="sr-only">Press </span>
                                           <kbd
                                               className="font-sans">
                                               <abbr title="Command" className="no-underline">⌘</abbr>
                                           </kbd>
                                           <span
                                               className="sr-only"> and </span><kbd className="font-sans">K</kbd><span
                                    className="sr-only"> and </span><span
                                    className="sr-only"> to search</span></span>
                            </button>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                className="p-1 text-cool-gray-400 rounded-full hover:bg-cool-gray-100 hover:text-cool-gray-500 focus:outline-none focus:shadow-outline focus:text-cool-gray-500"
                                aria-label="Notifications">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                </svg>
                            </button>

                            {/* Profile dropdown */}
                            <div className={`${profileIsOpen ? 'relative z-10' : ''} ml-3`}>
                                <div>
                                    <button
                                        onClick={() => setProfileIsOpen(!profileIsOpen)}
                                        className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:bg-cool-gray-100 lg:p-2 lg:rounded-md lg:hover:bg-cool-gray-100"
                                        id="user-menu" aria-label="User menu" aria-haspopup="true">
                                        <p className="hidden ml-2 text-cool-gray-700 text-sm leading-5 font-medium lg:block">{name}</p>
                                        {/* Heroicon name: chevron-down */}
                                        <svg className="hidden flex-shrink-0 ml-1 h-5 w-5 text-cool-gray-400 lg:block"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </button>
                                </div>

                                <Transition
                                    show={profileIsOpen}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                    className={``}
                                >

                                    <div
                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg border">
                                        <OutsideClickHandler
                                            onOutsideClick={() => setProfileIsOpen(false)}
                                        >
                                            <div className="py-1 rounded-md bg-white shadow-xs" role="menu"
                                                 aria-orientation="vertical" aria-labelledby="user-menu">

                                                <InertiaLink
                                                    href="/settings"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                                                    role="menuitem"
                                                >
                                                    Settings
                                                </InertiaLink>

                                                <button
                                                    className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                                                    role="menuitem"
                                                    onClick={logout}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </OutsideClickHandler>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="flex flex-col flex-1 overflow-y-auto">
                    <div
                        className="w-full max-w-5xl mx-auto flex flex-col flex-1 px-4 sm:px-6 lg:px-8 mt-8"
                    >
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

export default NestedLayout
