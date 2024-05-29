import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const AppLayout = ({ children }) => {
    return (
        <div className='bg-white'>
            <Navbar />
            <div className=' w-screen flex container mx-auto' style={{ height: 'calc(100vh - 56px)' }}>
                <div className="w-[220px]">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className="flex">
                        {children}
                    </div>
                </div>
            </div>
            <footer className=' w-[90vw]  m-auto text-center p-6'>
                <p className='text-base text-lg'>Made with &#x2764;&#xfe0f; by <a className='text-[#6366F1]' href='https://iamkaranverma.netlify.app/'>KARAN VERMA</a></p>
            </footer>
        </div>
    )
}

export default AppLayout