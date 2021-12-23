import * as React from 'react'
import Layout from "@/Shared/Layout";
import NestedLayout from "@/Shared/NestedLayout";
import {IDefaultProps} from '@/Interfaces'

const Dashboard = ({route_name, auth}: IDefaultProps) => {
    return (
        <NestedLayout name={auth.user.name} route_name={route_name}>
            <h1 className="text-lg leading-6 font-medium text-cool-gray-900">Dashboard</h1>
            <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    {/*<button className="h-auto w-48 text-center font-medium text-white  bg-blue-300 ml-20 mt-20 p-4 rounded-md">dit is een test</button>*/}
                </div>
            </div>
        </NestedLayout>
    )
}

Dashboard.layout = (page: React.ReactNode) => <Layout children={page}/>

export default Dashboard
