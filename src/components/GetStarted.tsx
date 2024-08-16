import React from 'react';
import ScrollBtn from "../components/UI/ScrollBtn";
import styles from './styles.module.css'
import {Image} from "@nextui-org/react";

const GetStarted = () => {
    return (
        <div
            className="relative mt-[-1px] bg-white dark:bg-dark pt-[40px] pb-[50px] lg:pt-[19px]"
        >
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="hero-content relative">
                            <h1
                                className="mb-5 text-4xl font-bahnschrift font-bold font-stretch-condensed !leading-[1.208] text-dark dark:text-white sm:text-[32px] lg:text-[30px] xl:text-2xl"
                            >
                                <div className={styles.logoWrapper}>
                                    <img src="./1main.jpg" className="image"/>
                                </div>
                            </h1>

                            <p
                                className="mb-12 relative text-base pt-[20px] text-body-color dark:text-dark-6"
                            >
                                Мы — эксперты в моделировании, сканировании и 3D печати. Наша команда использует
                                передовые технологии для создания высококачественных прототипов и деталей,
                                соответствующих строгим стандартам. Мы предлагаем индивидуальные решения для каждого
                                клиента, от малого бизнеса до крупных корпораций. Наша цель — помочь вам реализовать
                                идеи и превратить их в реальность. Исследуйте наш сайт, чтобы узнать больше о наших
                                услугах и проектах. Свяжитесь с нами, и давайте создадим что-то удивительное вместе!
                            </p>


                        </div>
                        <ScrollBtn />
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>
                    <div className="w-full px-4 lg:w-4/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <Image
                                    src="./main.jpg"
                                    alt="hero"
                                    className="max-w-full lg:ml-auto"
                                    isBlurred
                                />
                                <span className="absolute -left-8 -bottom-8 z-[-1]">
                     <svg
                         width="93"
                         height="93"
                         viewBox="0 0 93 93"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                     >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3"/>
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3"/>
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3"/>
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3"/>
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3"/>
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3"/>
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3"/>
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3"/>
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3"/>
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3"/>
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3"/>
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3"/>
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3"/>
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3"/>
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3"/>
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3"/>
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3"/>
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3"/>
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3"/>
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3"/>
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3"/>
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3"/>
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3"/>
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3"/>
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3"/>
                     </svg>
                  </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;