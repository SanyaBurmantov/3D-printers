'use client'
import React from 'react';

const ScrollBtn = () => {
    const scrollDown = () => {
        window.scrollBy({
            top: 1000, // Количество пикселей, на которое нужно прокрутить вниз
            behavior: 'smooth' // Плавная прокрутка
        });
    };
    return (
        <ul className="flex flex-wrap items-center">
            <li>
                <button onClick={scrollDown}
                   className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
                >
                    Подробнее
                </button>
            </li>
        </ul>
    );
};

export default ScrollBtn;