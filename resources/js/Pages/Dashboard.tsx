import * as React from 'react'
import Layout from "@/Shared/Layout";
import NestedLayout from "@/Shared/NestedLayout";
import {IDefaultProps} from '@/Interfaces'

const Dashboard = ({route_name, auth}: IDefaultProps) => {
    return (
        <NestedLayout name={auth.user.name} route_name={route_name}>
            <h1 className="text-lg leading-6 font-medium text-cool-gray-900">Dashboard</h1>
            <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
        </NestedLayout>
    )
}

Dashboard.layout = (page: React.ReactNode) => <Layout children={page}/>

export default Dashboard
