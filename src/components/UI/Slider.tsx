'use client'
import React, {useState} from 'react';
import styles from './ui.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {Image, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure} from "@nextui-org/react";

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
            <div className={styles.sliderWrapper}>

                <div className={styles.slider}>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className={styles.mySwiper2}
                    >
                        {props.slides.map(slide => (
                            <SwiperSlide className={styles.swiperSlide} key={slide}>
                                <Image onClick={() => handleOpenModal(slide)} removeWrapper={true} style={{height: '100%'}} className="block w-full h-full object-contain cursor-pointer" src={slide} alt={slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbs}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4.5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className={styles.mySwiper}
                    >
                        {props.slides.map(slide => (
                            <SwiperSlide className={styles.swiperSlide} key={slide}>
                                <Image  removeWrapper={true} className="block w-full h-full object-contain" src={slide} alt={slide} />
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
                                <div className="max-h-[70vh] overflow-hidden flex items-center justify-center">
                                    <Image removeWrapper={true} className="block max-h-full object-contain" src={modalImage} />
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