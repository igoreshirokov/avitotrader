import React from 'react'
import Head from 'next/head'

export default function MainLayout({ children, title = 'Каталог' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}