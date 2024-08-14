"use client"
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css'
import {Navbar} from "@nextui-org/react";
import NavbarHeader from "@/components/UI/Navbar";
const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative flex flex-col items-center bg-white">
            <motion.div className={`container ${styles.baseHeader}`}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.5}}
                        style={{padding: '20px'}}
            >
                <div className={styles.navbar}><NavbarHeader/></div>
                <div className={styles.navigation}>
                    <Link className={styles.navigationItem} href="/create_order">
                        <button
                            className="z-50 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center rounded hover:bg-blue-dark lg:px-7">Сделать
                            заказ
                        </button>
                    </Link>
                    <Link className={styles.navigationItem} href="/fdm_fff">FDM/FFF</Link>
                    <Link className={styles.navigationItem} href="/sla">SLA</Link>
                    <Link className={styles.navigationItem} href="/slm">SLM</Link>
                    <Link className={styles.navigationItem} href="/sls">SLS</Link>
                </div>
                <div className={styles.contacts}>
                    <div className="">+37533 342234234234</div>
                    <div className="">info@sparxlab.by</div>
                </div>
                <div className={styles.showMobile}>
                    <div className="">+37533 342234234234</div>
                    <div className="">info@sparxlab.by</div>
                </div>

            </motion.div>

            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }} // Начальная позиция выше и прозрачность 0
                    animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }} // Появление и исчезновение
                    style={{padding: '20px', position: "fixed", width: "100%", background: '#dadbd5'}}
                    className="z-50 mx-auto pb-2 pt-2 dark:bg-dark lg:pb-[10px] lg:pt-[10px] flex items-center justify-between shadow-md rounded-b-lg"
                >
                    <div className={styles.navbar}><NavbarHeader /></div>
                    <Link href={'/'}>
                        <div className="h-12 overflow-hidden">
                            <img src="https://sparxlab.by//logo.jpg" alt="logo"
                                 className="w-full h-full object-contain"/>
                        </div>
                    </Link>
                    <div className={styles.navigation}>
                        <Link className={styles.navigationItem} href="/create_order">
                            <button
                                className="z-50 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center rounded hover:bg-blue-dark lg:px-7">Сделать
                                заказ
                            </button>
                        </Link>
                        <Link className={styles.navigationItem} href="/fdm_fff">FDM/FFF</Link>
                        <Link className={styles.navigationItem} href="/sla">SLA</Link>
                        <Link className={styles.navigationItem} href="/slm">SLM</Link>
                        <Link className={styles.navigationItem} href="/sls">SLS</Link>
                    </div>
                    <div className={styles.contacts}>
                        <div className="">+37533 342234234234</div>
                        <div className="">info@sparxlab.by</div>
                    </div>
                    <div className={styles.shomMobile}>
                        {/*<Link className={styles.navigationItem} href="/create_order">*/}
                        {/*    <button*/}
                        {/*        className="z-50 inline-flex items-center bg-primary text-white justify-center px-6 py-3 text-base font-medium text-center rounded hover:bg-blue-dark lg:px-7">Сделать*/}
                        {/*        заказ*/}
                        {/*    </button>*/}
                        {/*</Link>*/}
                    </div>

                </motion.div>
            )}
        </div>
    );
};


// const Header = () => {
//     return (
//         <div className="container mx-auto pb-2 pt-2 dark:bg-dark lg:pb-[10px] lg:pt-[10px] flex items-center justify-between">
//             <Link href={'/'}>
//                 <div className="h-12 overflow-hidden">
//                     <img src="https://sparxlab.by//logo.jpg" alt="logo" className="w-full h-full object-contain"/>
//                 </div>
//             </Link>
//             <button
//                 className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark dark:text-white hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
//                 Мне нужна помощь
//             </button>
//         </div>
//     );
// };

export default Header;
