import React, {useState} from 'react'
import {InertiaLink} from '@inertiajs/inertia-react'
// @ts-ignore
import OutsideClickHandler from 'react-outside-click-handler';
import {motion} from "framer-motion"
import {Transition} from '@headlessui/react'
import {useAppContext} from "@/Hooks/AppContext";

interface IProps {
    route_name: string
    focusOnSearch: (event: KeyboardEvent) => void
}

const Sidebar = ({route_name}: IProps) => {
    const listOpenWhen = ['item-1', 'item-2']
    const [listOpen, setListOpen] = useState(listOpenWhen.includes(route_name))
    const {mobileNavOpen, handleMobileNavToggle} = useAppContext()
    const variants = {
        open: {opacity: 1, y: 0},
        closed: {opacity: 0, y: "100%"},
    }

    return (
        <>
            {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
            <div className="lg:hidden">
                <div
                    className={`${mobileNavOpen ? 'pointer-events-auto' : 'pointer-events-none'} fixed inset-0 flex z-40`}>
                    {/*
                        Off-canvas menu overlay, show/hide based on off-canvas menu state.

                        Entering: "transition-opacity ease-linear duration-300"
                          From: "opacity-0"
                          To: "opacity-100"
                        Leaving: "transition-opacity ease-linear duration-300"
                          From: "opacity-100"
                          To: "opacity-0"
                      */}
                    <Transition
                        show={mobileNavOpen}
                        // show={true}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        {(ref: any) => (
                            <div ref={ref} className="fixed inset-0">
                                <div className="absolute inset-0 bg-cool-gray-600 opacity-75"></div>
                            </div>
                        )}
                    </Transition>
                    {/*
                        Off-canvas menu, show/hide based on off-canvas menu state.

                        Entering: "transition ease-in-out duration-300 transform"
                          From: "-translate-x-full"
                          To: "translate-x-0"
                        Leaving: "transition ease-in-out duration-300 transform"
                          From: "translate-x-0"
                          To: "-translate-x-full"
                      */}
                    <Transition
                        show={mobileNavOpen}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                        className={`flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-600`}
                    >
                        {(ref: string | ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined) => (
                            <div ref={ref}
                                 className="relative">
                                <OutsideClickHandler
                                    onOutsideClick={handleMobileNavToggle}
                                >
                                    <div className="absolute top-0 right-0 -mr-14 p-1">
                                        <button
                                            onClick={handleMobileNavToggle}
                                            className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-cool-gray-600"
                                            aria-label="Close sidebar">
                                            <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex-shrink-0 flex items-center px-4">
                                        <img className="h-8 w-auto"
                                             src="https://tailwindui.com/img/logos/easywire-logo-on-brand.svg"
                                             alt="Easywire logo"/>
                                    </div>
                                    <div className={`mt-5 overflow-auto`}>
                                        <nav className="px-2 space-y-1">
                                            <a href="#"
                                               className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-700 focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                                {/* Heroicon name: home */}
                                                <svg
                                                    className="mr-4 h-6 w-6 text-gray-200 transition ease-in-out duration-150"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                                </svg>
                                                Home
                                            </a>

                                            <a href="#"
                                               className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                                {/* Heroicon name: clock */}
                                                <svg
                                                    className="mr-4 h-6 w-6 text-gray-200 transition ease-in-out duration-150"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                History
                                            </a>

                                            <a href="#"
                                               className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                                {/* Heroicon name: scale */}
                                                <svg
                                                    className="mr-4 h-6 w-6 text-gray-200 transition ease-in-out duration-150"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                                                </svg>
                                                Balances
                                            </a>

                                            <a href="#"
                                               className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                                {/* Heroicon name: credit-card */}
                                                <svg
                                                    className="mr-4 h-6 w-6 text-gray-200 transition ease-in-out duration-150"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                                                </svg>
                                                Cards
                                            </a>

                                            <a href="#"
                                               className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                                {/* Heroicon name: user-group */}
                                                <svg
                                                    className="mr-4 h-6 w-6 text-gray-200 transition ease-in-out duration-150"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                                </svg>
                                                Recipients
                                            </a>

                                            <a href="#"
                                               className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                                {/* Heroicon name: document-report */}
                                                <svg
                                                    className="mr-4 h-6 w-6 text-gray-200 transition ease-in-out duration-150"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                                </svg>
                                                Reports
                                            </a>
                                        </nav>
                                    </div>
                                    <hr className="h-px mt-6 bg-gray-700 border-none"/>
                                    <div className="mt-6 flex-1 h-0 overflow-y-auto">
                                        <nav className="px-2 space-y-1">
                                            <a href="#"
                                               className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                                {/* Heroicon name: cog */}
                                                <svg
                                                    className="mr-4 h-6 w-6 text-gray-200 group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                </svg>
                                                Settings
                                            </a>

                                            <a href="#"
                                               className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                                {/* Heroicon name: question-mark-circle */}
                                                <svg
                                                    className="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                Help
                                            </a>

                                            <a href="#"
                                               className="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                                {/* Heroicon name: shield-check */}
                                                <svg
                                                    className="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                                </svg>
                                                Privacy
                                            </a>
                                        </nav>
                                    </div>
                                </OutsideClickHandler>
                            </div>
                        )}
                    </Transition>
                    <div className="flex-shrink-0 w-14">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>

                </div>
            </div>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col flex-grow bg-black pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            {/*<img className="h-8 w-auto"*/}
                            {/*     src="https://tailwindui.com/img/logos/easywire-logo-on-brand.svg"*/}
                            {/*     alt="Easywire logo"/>*/}
                            <h1 className={`text-white uppercase font-semibold`}>Logo</h1>
                        </div>
                        <div className="mt-5 flex-1 flex flex-col overflow-y-auto">
                            <div className={`overflow-y-hidden`}>
                                <nav className="px-2 space-y-1">
                                    <InertiaLink
                                        href="/dashboard"
                                        className={`${route_name == 'dashboard' ? 'bg-primary focus:bg-primary-lighter' : 'hover:bg-black-light focus:bg-black-light'} group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white focus:outline-none transition ease-in-out duration-150`}
                                    >
                                        <svg
                                            className="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                        </svg>
                                        Home
                                    </InertiaLink>

                                    {/*<a href="#"*/}
                                    {/*   className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">*/}
                                    {/*    /!* Heroicon name: clock *!/*/}
                                    {/*    <svg*/}
                                    {/*        className="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150"*/}
                                    {/*        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                                    {/*        stroke="currentColor">*/}
                                    {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                                    {/*              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
                                    {/*    </svg>*/}
                                    {/*    History*/}
                                    {/*</a>*/}

                                    {/*<a href="#"*/}
                                    {/*   className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">*/}
                                    {/*    /!* Heroicon name: scale *!/*/}
                                    {/*    <svg*/}
                                    {/*        className="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150"*/}
                                    {/*        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                                    {/*        stroke="currentColor">*/}
                                    {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                                    {/*              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>*/}
                                    {/*    </svg>*/}
                                    {/*    Balances*/}
                                    {/*</a>*/}
                                    <div>
                                        <button
                                            className="w-full group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150"
                                            onClick={() => setListOpen(!listOpen)}
                                        >
                                            <svg
                                                className="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                            </svg>
                                            List
                                        </button>
                                        <motion.nav
                                            animate={listOpen ? "open" : "closed"}
                                            variants={variants}
                                            className={`${!listOpen && 'hidden'}`}
                                        >
                                            <div className={`mt-1 space-y-1`}>
                                                <InertiaLink
                                                    href="#"
                                                    className={`${route_name == 'item-1' ? 'bg-primary focus:bg-primary-lighter' : 'hover:bg-black-light focus:bg-black-light'} group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white focus:outline-none transition ease-in-out duration-150`}
                                                >
                                                    Item 1
                                                </InertiaLink>
                                                <InertiaLink
                                                    href="#"
                                                    className={`${route_name == 'item-2' ? 'bg-primary focus:bg-primary-lighter' : 'hover:bg-black-light focus:bg-black-light'} group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white focus:outline-none transition ease-in-out duration-150`}
                                                >
                                                    Item 2
                                                </InertiaLink>
                                            </div>
                                        </motion.nav>
                                        {/*{affiliateOpen && (*/}
                                        {/*    <div className="mt-1 space-y-1 ml-2">*/}
                                        {/*        <a href="#"*/}
                                        {/*           className="group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">*/}
                                        {/*            Overview*/}
                                        {/*        </a>*/}
                                        {/*        <a href="#"*/}
                                        {/*           className="group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">*/}
                                        {/*            Members*/}
                                        {/*        </a>*/}
                                        {/*        <a href="#"*/}
                                        {/*           className="group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">*/}
                                        {/*            Calendar*/}
                                        {/*        </a>*/}
                                        {/*        <a href="#"*/}
                                        {/*           className="group w-full flex items-center pl-10 pr-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">*/}
                                        {/*            Settings*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*)}*/}
                                    </div>

                                    {/*<a href="#"*/}
                                    {/*   className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">*/}
                                    {/*    /!* Heroicon name: document-report *!/*/}
                                    {/*    <svg*/}
                                    {/*        className="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150"*/}
                                    {/*        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                                    {/*        stroke="currentColor">*/}
                                    {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                                    {/*              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>*/}
                                    {/*    </svg>*/}
                                    {/*    Reports*/}
                                    {/*</a>*/}
                                </nav>
                            </div>
                            <hr className="h-px mt-6 bg-gray-700 border-none"/>
                            <div className="mt-6 flex-1 h-0 overflow-y-auto">
                                <nav className="px-2 space-y-1">
                                    <InertiaLink
                                        href="/settings"
                                        className={`${route_name == 'settings' ? 'bg-primary focus:bg-primary-lighter' : 'hover:bg-black-light focus:bg-black-light'} group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white focus:outline-none transition ease-in-out duration-150`}
                                    >
                                        {/* Heroicon name: cog */}
                                        <svg
                                            className="mr-4 h-6 w-6 text-gray-200 transition ease-in-out duration-150"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        Settings
                                    </InertiaLink>
                                    <a href="#"
                                       className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                        {/* Heroicon name: credit-card */}
                                        <svg
                                            className="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-200 group-focus:text-gray-200 transition ease-in-out duration-150"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                                        </svg>
                                        Billing
                                    </a>

                                    <a href="#"
                                       className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                        {/* Heroicon name: question-mark-circle */}
                                        <svg
                                            className="mr-4 h-6 w-6 text-gray-200 transition ease-in-out duration-150"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        Help
                                    </a>

                                    <a href="#"
                                       className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-100 hover:text-white hover:bg-black-light focus:outline-none focus:bg-black-light transition ease-in-out duration-150">
                                        {/* Heroicon name: shield-check */}
                                        <svg
                                            className="mr-4 h-6 w-6 text-gray-200 transition ease-in-out duration-150"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                        </svg>
                                        Privacy
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
