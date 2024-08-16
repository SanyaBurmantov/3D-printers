'use client'
import React from 'react';
import { HiMiniArrowUturnDown } from "react-icons/hi2";

const ScrollBtn = () => {
    const scrollDown = () => {
        window.scrollBy({
            top: 1000, // Количество пикселей, на которое нужно прокрутить вниз
            behavior: 'smooth' // Плавная прокрутка
        });
    };

    return (
        <ul className="hidden lg:flex flex-wrap items-center justify-end translate-x-10 translate-y-20">
            <li>
                <button onClick={scrollDown}
                        className="inline-flex items-center justify-center px-3 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-orange-600 lg:px-3"
                >
                    <HiMiniArrowUturnDown className="w-10 h-10"/>
                </button>
            </li>
        </ul>
    );
};

export default ScrollBtn;