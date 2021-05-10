
import React, { useState } from 'react'
import Link from 'next/link'
import NavButton from '../styles/NavButton.module.css'

export default function Nav() {
    const [isOpen, setOpen] = useState(false)


    return (
        <>
            <nav className="container mx-auto px-6 md:px-12 py-4">
                <div className="md:flex justify-center items-center">
                    <div className="flex justify-between items-center">
                        <div className="md:hidden">
                            <button onClick={() => setOpen(!isOpen)} className={`${NavButton.navbutton} text-white focus:outline-none`}>
                                <label hfor="check">
                                    <input type="checkbox" id="check" />
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </button>
                        </div>
                    </div>
                    <div className={`${isOpen ? "animate-fromleft flex flex-col justify-start w-screen left-0 h-screen fixed bg-indigo-800" : "hidden"} md:flex items-center`}>
                        <Link href="/catalog">
                            <a className="transition duration-300 w-full text-center text-lg p-6 uppercase mx-3 text-white cursor-pointer hover:bg-purple-700 hover:text-gray-300">
                                Каталог
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="transition duration-300 w-full text-center text-lg p-6 uppercase mx-3 text-white cursor-pointer hover:bg-purple-700 hover:text-gray-300">
                                Информация
                    </a>
                        </Link>
                        <Link href="/contacts">
                            <a className="transition duration-300 w-full text-center text-lg p-6 uppercase mx-3 text-white cursor-pointer hover:bg-purple-700 hover:text-gray-300">
                                Контакты
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}