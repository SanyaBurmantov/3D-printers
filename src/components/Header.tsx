import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div className="container mx-auto pb-2 pt-2 dark:bg-dark lg:pb-[10px] lg:pt-[10px] flex items-center justify-between">
            <Link href={'/'}>
                <div className="h-12 overflow-hidden">
                    <img src="https://sparxlab.by//logo.jpg" alt="logo" className="w-full h-full object-contain"/>
                </div>
            </Link>
            <button
                className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                Мне нужна помощь
            </button>
        </div>
    );
};

export default Header;