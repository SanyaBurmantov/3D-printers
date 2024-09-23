'use client'
import React, {Suspense, useState} from 'react';
import Link from "next/link";
import styles from "@/components/styles.module.css";
import {IServiceCard} from "@/components/OurFeauters";

const ServiceCard = ({icon, title, subtitle, details, route}: IServiceCard) => {
    const [isHovered, setIsHovered] = useState(false);
    const Skeleton = React.lazy(() => import('@/components/UI/Skeleton'));
    return (
        <>
            <Suspense fallback={<Skeleton />}>
                <Link className="w-full px-2 rounded-[20px] bg-white shadow-2 hover:shadow-lg dark:bg-dark-2 flex flex-col" href={route}>
                    <div
                        className={`${styles.imageSlide} p-2 mb-4 ${isHovered ? styles.hovered : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {icon}
                    </div>
                    <div className="p-4 w-full">
                        <h4 className="mb-[8px] text-2xl font-semibold text-dark dark:text-white">
                            {title}
                        </h4>
                        <h4 className="mb-[14px] text-1xl font-semibold text-dark dark:text-white">
                            {subtitle}
                        </h4>
                        <p className="text-body-color dark:text-dark-6">{details}</p>
                    </div>
                </Link>
            </Suspense>
        </>
    );
};

export default ServiceCard;