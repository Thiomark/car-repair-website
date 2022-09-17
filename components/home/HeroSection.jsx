import React, { useState } from 'react';
import Link from 'next/link';
import { hero_images, menu_items, store_name } from '@/config/constants'
import CreateQuotation from './CreateQuotation';

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="bg-white shadow dark:bg-gray-900">
                <div className="container px-6 py-4 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-semibold text-gray-700">
                                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="/">{store_name}</a>
                            </div>
                            <div className="flex lg:hidden">
                            <button onClick={() => setIsOpen(prev => !prev)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {!isOpen ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>}
                            </button>
                            </div>
                        </div>
                        <div className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} translate-x-0 opacity-100 absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0`}>
                            <div className="-mx-4 lg:flex lg:items-center">
                                {menu_items.map(link => <Link key={link.links} href={link.links}><a className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">{link.name}</a></Link>)}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full relative bg-center bg-cover h-[32rem]" style={{backgroundImage: `url(${hero_images})`}}>
                <div className='h-full px-10 relative mx-auto container'>
                    <CreateQuotation />
                </div>
                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div className="text-cente hidden">
                        <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">Lorem ipsum dolor<span className="text-blue-400 underline">Saas</span></h1>
                        <h2 className="text-ms bold text-white uppercase lg:text-md -mt-1">Lorem ipsum dolor sit amet</h2>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeroSection