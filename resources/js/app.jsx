import {InertiaApp} from '@inertiajs/inertia-react'
import React from 'react'
import {render} from 'react-dom'

import 'vite/dynamic-import-polyfill';

import '../css/app.css';

import './bootstrap';

const app = document.getElementById('app')
// const inertia = InertiaApp({
//     initialPage: JSON.parse(app.dataset.page),
//     resolveComponent: async (name) => {
//         const pages = import.meta.glob('./Pages/**/*.tsx');
//         return (await pages[`./Pages/${name}.tsx`]()).default;
//     }
// });


// const inertia = (
    // <InertiaApp
    //     initialPage={JSON.parse(app.dataset.page)}
    //     // resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
    //     resolveComponent={name => {
    //         const pages = import.meta.glob('./Pages/**/*.tsx');
    //         return (pages[`./Pages/${name}.tsx`]()).default;
    //     }}
    // />
// )
    render(
        // <InertiaApp
        //     initialPage={JSON.parse(app.dataset.page)}
        //     // resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
        //     resolveComponent={name => {
        //         const pages = import.meta.glob('./Pages/**/*.tsx');
        //         return (pages[`./Pages/${name}.tsx`]()).default;
        //     }}
        // />,
        // InertiaApp({
        //     initialPage: JSON.parse(app.dataset.page),
        //     resolveComponent: async (name) => {
        //         const pages = import.meta.glob('./Pages/**/*.tsx');
        //         return (await pages[`./Pages/${name}.tsx`]()).default;
        //     }
        // }),
        // <React.StrictMode>
            <InertiaApp
                initialPage={JSON.parse(app.dataset.page)}
                resolveComponent={ name => {
                    return import('./Pages/Test.tsx').default
                    const pages = import.meta.glob('./Pages/**/*.tsx');
                    console.log(import.meta)
                    console.log(pages)
                     // return await pages[`./Pages/${name}.tsx`]()
                     // (await pages[`./Pages/${name}.vue`]()).default;
                     // (await pages[`./Pages/${name}.vue`]()).default;
                    // return (await pages[`./Pages/${name}.vue`]()).default;
                   // let result = await import(`./Pages/${name}.tsx`)
                    // console.log(await import(`./Pages/${name}.tsx`))
                    return import(`./Pages/${name}.tsx`).default;
                }}
                // resolveComponent={name => {
                    // const pages = import.meta.globEager(`./Pages/${name}.tsx`);
                    // const pages = import.meta.globEager()
                    // console.log(pages)

                //     return pages[`./Pages/${name}.tsx`].default;
                // }}
                // resolveComponent={name => require(`./Pages/${name}`).default}
                // resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
                // resolveComponent={name => {
                //     const pages = import.meta.glob('./Pages/**/*.tsx');
                //     return (pages[`./Pages/${name}.tsx`]()).default;
                // }}
            />,
        // </React.StrictMode>,
        app
    )

