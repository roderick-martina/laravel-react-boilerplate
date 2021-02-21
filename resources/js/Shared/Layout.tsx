import React, {ReactNode} from 'react'
import {AppContextProvider} from '@/Hooks/AppContext'
import {INotification, NotificationType} from "@/Components/Notification";

interface Iprops {
    children: ReactNode
}

const Layout = ({children}: Iprops) => {
    const [mobileNavOpen, setMobileNavOpen] = React.useState(false)
    const handleMobileNavToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMobileNavOpen(!mobileNavOpen)
    }
    const [notificationState, notify] = React.useState<INotification | null>(null)
    const value = React.useMemo(() => {
        return {
            mobileNavOpen,
            handleMobileNavToggle,
            notificationState,
            notify
        }
    }, [mobileNavOpen, notificationState])
    return (
        <div className="min-h-screen flex bg-gray-50 font-sans">
            <AppContextProvider value={value}>
                {children}
            </AppContextProvider>
        </div>
    )
}

export default Layout
