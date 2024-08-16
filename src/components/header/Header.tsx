"use client"
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles.module.css'
import {Navbar} from "@nextui-org/react";
import NavbarHeader from "@/components/UI/Navbar";
import { useRouter } from 'next/router';
import {MdShoppingCartCheckout} from "react-icons/md";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSimpleHeader, setShowSimpleHeader] = React.useState(false);

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
                        style={{padding: '20px', zIndex: 100000}}
            >
                <div className={styles.navbar}><NavbarHeader/></div>
                <div className={styles.navigation}>
                    <Link className={styles.navigationItem} href="/create_order">
                        <button
                            className="z-50 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center bg-primary text-white rounded hover:bg-orange-600 lg:px-7">Сделать
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

                <div className={`${styles.showMobile} flex flex-row gap-2`}>
                    <div className="flex flex-col items-end justify-center">
                        <div className="">+3753334223</div>
                        <div className="">info@sparxlab.by</div>
                    </div>
                    <button
                        className="z-50 inline-flex items-center justify-center w-[60px] h-[60px] text-base font-medium text-white bg-primary text-center rounded hover:bg-orange-600 lg:hidden ">
                        <MdShoppingCartCheckout className="w-[40px] h-[40px]"/>
                    </button>
                </div>



            </motion.div>

            {(
                <motion.div
                    initial={{y: 10, opacity: 0}} // Начальная позиция выше и прозрачность 0
                    animate={isVisible ? {y: 0, opacity: 1} : {y: -100, opacity: 0}} // Появление и исчезновение
                    style={{zIndex: 100000, padding: '10px', position: "fixed", width: "100%", background: '#dadbd5'}}
                    className=" mx-auto pb-2 pt-2 dark:bg-dark bg-white lg:pb-[10px] lg:pt-[10px] flex items-center justify-between shadow-md rounded-b-lg align-middle"
                >
                    <div className={styles.navbar}><NavbarHeader /></div>
                    <Link href={'/'}>
                        <div className="h-12 overflow-hidden">
                            <img src="https://sparxlab.by//logo.jpg" alt="logo"
                                 className="w-full h-full object-contain"/>
                        </div>
                    </Link>
                    <div className={styles.navigation}>
                        <Link className={styles.navigationItem} href="/fdm_fff">FDM/FFF</Link>
                        <Link className={styles.navigationItem} href="/sla">SLA</Link>
                        <Link className={styles.navigationItem} href="/slm">SLM</Link>
                        <Link className={styles.navigationItem} href="/sls">SLS</Link>
                    </div>
                    <div className="flex flex-row">
                        <div className={styles.contacts}>
                            <div className="">+37533 342234234234</div>
                            <div className="">info@sparxlab.by</div>
                        </div>
                        <Link className={styles.navigationItem} href="/create_order">
                            <button
                                className="z-50  items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary text-center rounded hover:bg-orange-600 lg:px-7 hidden lg:inline-flex ">
                                <span className="">Сделать заказ</span>

                            </button>
                            <button
                                className="z-50 inline-flex items-center justify-center w-[60px] h-[60px] text-base font-medium text-white bg-primary text-center rounded hover:bg-orange-600 lg:hidden ">
                                <MdShoppingCartCheckout className="w-[40px] h-[40px]"/>
                            </button>

                        </Link>
                    </div>


                    {/*<div className={styles.shomMobile}>*/}
                    {/*<Link className={styles.navigationItem} href="/create_order">*/}
                    {/*    <button*/}
                    {/*        className="z-50 inline-flex items-center bg-primary text-white justify-center px-6 py-3 text-base font-medium text-center rounded hover:bg-blue-dark lg:px-7">Сделать*/}
                        {/*        заказ*/}
                        {/*    </button>*/}
                        {/*</Link>*/}
                    {/*</div>*/}

                </motion.div>
            )}
        </div>
    );
};

export default Header;
