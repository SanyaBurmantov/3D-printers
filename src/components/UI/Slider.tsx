'use client'
import React, {useState} from 'react';
import styles from './ui.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import {Image, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";
import './stylesswiper.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


export interface ISliderProps {
    slides: string[]
}

const Slider = (props: ISliderProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const setThumbs = (args: any) => {
        setThumbsSwiper(args)
    }
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modalImage, setModalImage] = useState('')

    const handleOpenModal = (image: string) => {
        onOpen()
        setModalImage(image)
    }
    return (
        <>
            <div className="w-full relative">
                <div className="lg:fixed top-40 lg:w-[47%] h-[600px]">
                    <Swiper
                        slidesPerView={3}
                        grid={{
                            rows: 3,
                        }}
                        spaceBetween={15}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        className="mySwiper"
                    >
                        {props.slides.map(slide => (
                            <SwiperSlide key={slide} onClick={() => handleOpenModal(slide)}>
                                <img className="object-cover w-full h-full" src={slide} alt={slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Modal className="max-h-[90vh]" size="5xl" isOpen={isOpen} onOpenChange={onOpenChange} closeButton={<div>Закрыть</div>}>
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