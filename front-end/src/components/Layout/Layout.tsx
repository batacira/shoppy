import React, { PropsWithChildren } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar/Sidebar'

const Layout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <div className='bg-light-gray'>
            <Sidebar />
            <div className=' ml-96 min-h-screen py-3'>
                <Header />
                <main className='bg-white md:m-10 md:p-10 rounded-3xl'>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
