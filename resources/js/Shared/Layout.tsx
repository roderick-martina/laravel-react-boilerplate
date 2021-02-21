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
    const [notificationState, setNotificationState] = React.useState<INotification | null>(null)
    const [modalActive, setModalActive] = React.useState(false)
    const notify = (data: INotification) => {
        setNotificationState(data)
        setModalActive(true)
        setTimeout(() => {
            setModalActive(false)
        },3000)
    }
    const value = React.useMemo(() => {
        return {
            mobileNavOpen,
            handleMobileNavToggle,
            notificationState,
            notify,
            modalActive,
            setModalActive
        }
    }, [mobileNavOpen, notificationState, modalActive])
    return (
        <div className="min-h-screen flex bg-gray-50 font-sans">
            <AppContextProvider value={value}>
                {children}
            </AppContextProvider>
        </div>
    )
}

export default Layout
