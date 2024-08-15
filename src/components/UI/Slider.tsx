'use client'
import React, {useState} from 'react';
import styles from './ui.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
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
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4.5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className={styles.swiperSlideImg} src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default Slider;