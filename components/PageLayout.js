import React from 'react'
import Nav from './Nav'
export default function PageLayout({ children }) {

    return (
        <div className="page">

            <div className="bg-indigo-900 relative h-screen overflow-auto">
                <header className="absolute top-0 left-0 right-0 z-20">
                    <Nav />
                </header>
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    {children}
                </div>
            </div>

        </div>
    )
} 