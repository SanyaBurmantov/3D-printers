"use client"
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles.module.css'
import {Navbar} from "@nextui-org/react";
import NavbarHeader from "@/components/UI/Navbar";
import {useRouter} from "next/router";
import { MdShoppingCartCheckout } from "react-icons/md";

const SimpleHeader = () => {
    return (
        <>
            <div
                style={{padding: '10px', position: 'fixed', width: "100%", background: '#dadbd5'}}
                className="z-50 mx-auto pb-2 pt-2 dark:bg-dark lg:pb-[10px] lg:pt-[10px] flex items-center justify-between shadow-md rounded-b-lg"
            >
                <div className={styles.navbar}><NavbarHeader/></div>
                <Link href={'/'}>
                    <div className="h-12 overflow-hidden">
                        <img src="https://sparxlab.by/logo.jpg" alt="logo"
                             className="w-full h-full object-contain"/>
                    </div>
                </Link>
                <div className="hidden md:flex md:gap-5 md:items-center ">
                    <Link className={styles.navigationItem} href="/fdm_fff">FDM/FFF</Link>
                    <Link className={styles.navigationItem} href="/sla">SLA</Link>
                    <Link className={styles.navigationItem} href="/slm">SLM</Link>
                    <Link className={styles.navigationItem} href="/sls">SLS</Link>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <div className={styles.contacts}>
                        <div className="">+375333422423</div>
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

            </div>
        </>
    );
};

export default SimpleHeader;
