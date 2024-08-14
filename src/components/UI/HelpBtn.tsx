import React from 'react';
import styles from './ui.module.scss'
import { FiHelpCircle } from "react-icons/fi";

const HelpBtn = () => {
    return (
        <button
                className={`${styles.helpBtn} z-50 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-l-2xl bg-primary hover:bg-blue-dark lg:px-7`}
        >
            <FiHelpCircle /> <p className={`pl-2 ${styles.textPc}`}> Мне нужна помощь </p>
        </button>
    );
};

export default HelpBtn;