'use client'
import React, {useEffect, useState} from 'react';
import { IoArrowUpCircleOutline } from "react-icons/io5";
import styles from "./ui.module.scss"
import { motion } from 'framer-motion';

const GoTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 800) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <motion.div
            initial={{opacity: 0 }} // Начальная позиция выше и прозрачность 0
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            exit={{opacity: 1}}
        >
            {isVisible && (
                <button onClick={scrollToTop} className={styles.goTopBtn}>
                    <IoArrowUpCircleOutline className={styles.goTopBtn_img} />
                </button> )}
        </motion.div>
    );
};

export default GoTopBtn;