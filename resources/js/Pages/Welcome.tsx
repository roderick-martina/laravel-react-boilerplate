import * as React from 'react'
import Layout from '@/Shared/Layout';

const Welcome = () => {
    return (
        <div className={"flex flex-col"}>
            <h1>hello</h1>
            <p>dit is een test</p>
        </div>
    )
}

Welcome.layout = (page: any) => <Layout children={page} />
export default Welcome
