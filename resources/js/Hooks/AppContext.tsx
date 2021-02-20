import * as React from 'react'

interface IDefaultValue {
    mobileNavOpen: boolean;
    handleMobileNavToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const defaultValue = null
export const AppContext = React.createContext<IDefaultValue | null>(defaultValue)

export const AppContextProvider = ({children, value}: any) => {
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = React.useContext(AppContext)

    if (!context) {
        throw new Error('useAppContext must be used within AppContextProvider')
    }
    return context
}

export default AppContext
