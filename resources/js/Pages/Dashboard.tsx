import * as React from 'react'
import axios from 'axios'
import Layout from "@/Shared/Layout";

const Dashboard = () => {
    const logout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        axios.post('/logout')
            .then(() => {
                window.location.href = '/'
            })
    }
    return (
        <div className={``}>
            <div>dit is de dashboard</div>
            <button
                className={`border bg-blue-500 text-white py-3 px-4 rounded-lg`}
                onClick={logout}
            >
                logout
            </button>
        </div>
    )
}

Dashboard.layout = (page: React.ReactNode)=> <Layout children={page} />

export default Dashboard
