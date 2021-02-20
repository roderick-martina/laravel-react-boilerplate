import React, {ReactNode} from 'react'
import {AppContextProvider} from '@/Hooks/AppContext'
interface Iprops {
    children: ReactNode
}

const Layout = ({children}: Iprops) => {
    const [mobileNavOpen, setMobileNavOpen] = React.useState(false)
    const handleMobileNavToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMobileNavOpen(!mobileNavOpen)
    }
    const value = React.useMemo(() => {
        return {
            mobileNavOpen,
            handleMobileNavToggle
        }
    }, [mobileNavOpen])
    return (
        <div className="h-screen flex bg-gray-50 font-sans">
            <AppContextProvider value={value}>
                {children}
            </AppContextProvider>
        </div>
    )
}

export default Layout
