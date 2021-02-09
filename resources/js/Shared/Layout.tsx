import React, {ReactNode} from 'react'

interface Iprops {
    children: ReactNode
}

const Layout = ({children}: Iprops)  => {
    return (
        <div className="h-screen flex-col overflow-hidden bg-cool-gray-100 font-sans">
            {children}
        </div>
    )
}

export default Layout
