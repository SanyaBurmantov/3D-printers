'use client'
import React, {Suspense, useEffect, useState} from 'react';
import styles from './ui.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Grid, Navigation, Pagination} from 'swiper/modules';
import {Image, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";
import './stylesswiper.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {is} from "immutable";

export interface ISliderProps {
    slides: string[]
}

const Slider = (props: ISliderProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modalImage, setModalImage] = useState('')

    const handleOpenModal = (image: string) => {
        onOpen()
        setModalImage(image)
    }
    return (
        <>
            <div className="w-full relative ">
                <div
                    className={`lg:fixed top-40 lg:w-[47%] h-[600px] transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-1' : 'opacity-0'}`}>
                    <h1 className="mb-6 text-[32px] font-bold text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                        Примеры работ
                    </h1>
                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 3,
                        }}
                        spaceBetween={15}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Grid, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {props.slides.map(slide => (
                            <SwiperSlide key={slide} onClick={() => handleOpenModal(slide)}>
                                <img className="object-cover w-full h-full" src={slide} alt={slide}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Modal className="max-h-[90vh]" size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}
                   closeButton={<div>Закрыть</div>}>
            <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1 h-full"></ModalHeader>
                            <ModalBody className="flex items-center justify-center h-full">
                                <div className="h-[70vh] overflow-hidden flex items-center justify-center">
                                    <img alt={modalImage} className="block w-full h-full object-contain" src={modalImage} />
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default Slider;