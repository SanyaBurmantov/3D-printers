import React from 'react';
import Link from "next/link";
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/react";
import BreadCrumb from "../../components/UI/BreadCrumb";
import SimpleHeader from "@/components/header/SimpleHeader";
import Slider from "@/components/UI/Slider";
export async function generateStaticParams() {
    return [
        {
            title: 'SPARXLAB - SLS',
        },
    ];
}
const Page = () => {
    const slides = [

            "./images/pageSwiperSlides/SLS/1.jpg",
            "./images/pageSwiperSlides/SLS/2.jpg",
            "./images/pageSwiperSlides/SLS/3.jpg",
            "./images/pageSwiperSlides/SLS/4.jpg",
            "./images/pageSwiperSlides/SLS/5.jpg",
            "./images/pageSwiperSlides/SLS/6.jpg",
            "./images/pageSwiperSlides/SLS/7.jpg",
            "./images/pageSwiperSlides/SLS/8.jpg",
            "./images/pageSwiperSlides/SLS/9.jpg",
            "./images/pageSwiperSlides/SLS/10.jpg",
            "./images/pageSwiperSlides/SLS/11.jpg",
            "./images/pageSwiperSlides/SLS/12.jpg",
            "./images/pageSwiperSlides/SLS/13.jpg",
            "./images/pageSwiperSlides/SLS/14.jpg",
            "./images/pageSwiperSlides/SLS/15.jpg",
            "./images/pageSwiperSlides/SLS/16.jpg",
            "./images/pageSwiperSlides/SLS/17.jpg",
            "./images/pageSwiperSlides/SLS/18.jpg",
            "./images/pageSwiperSlides/SLS/19.jpg",
            "./images/pageSwiperSlides/SLS/20.jpg",
            "./images/pageSwiperSlides/SLS/21.jpg",
            "./images/pageSwiperSlides/SLS/22.jpg",
            "./images/pageSwiperSlides/SLS/23.jpg",
            "./images/pageSwiperSlides/SLS/24.jpg",
            "./images/pageSwiperSlides/SLS/25.jpg",
            "./images/pageSwiperSlides/SLS/26.jpg",
            "./images/pageSwiperSlides/SLS/27.jpg",
            "./images/pageSwiperSlides/SLS/28.jpg",
            "./images/pageSwiperSlides/SLS/29.jpg",
            "./images/pageSwiperSlides/SLS/30.jpg"
    ]
    return (

        <div>
            <SimpleHeader/>
            <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[80px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12 max-w-[570px] lg:mb-0">
                                <BreadCrumb name={'SLS'}/>
                                <div className="p-6">
                                    <h1 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                        Технология печати SLS
                                    </h1>
                                    <h2 className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        SLS (Selective Laser Sintering) — это аддитивная технология, использующая лазер
                                        для спекания порошковых материалов, таких как пластик, металл или керамика, для
                                        создания объектов послойно. Эта технология позволяет производить детали с
                                        высокой прочностью и сложной геометрией.
                                    </h2>

                                    <h2 className="mb-4 text-lg font-semibold text-dark dark:text-white">Принцип
                                        работы</h2>
                                    <ol className="list-decimal list-inside mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        <li className="mb-2">Подготовка модели: 3D-модель создается с помощью
                                            CAD-программ и экспортируется в формат, совместимый с принтером (обычно
                                            STL).
                                        </li>
                                        <li className="mb-2">Подготовка порошка: Порошковый материал загружается в
                                            резервуар принтера.
                                        </li>
                                        <li className="mb-2">Лазерное спекание: Лазер сканирует поверхность порошка,
                                            спекание частиц и формирование первого слоя.
                                        </li>
                                        <li>Нанесение слоев: После завершения первого слоя платформа опускается, и
                                            процесс повторяется для последующих слоев до завершения печати.
                                        </li>
                                    </ol>

                                    <h2 className="mb-4 text-lg font-semibold text-dark dark:text-white">Преимущества и
                                        недостатки</h2>

                                    <h3 className="mb-2 text-base font-semibold text-dark dark:text-white">Преимущества:</h3>
                                    <ul className="list-disc list-inside mb-4 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        <li className="mb-2">Высокая прочность: Объекты, напечатанные с помощью SLS,
                                            обладают отличными механическими свойствами.
                                        </li>
                                        <li className="mb-2">Сложные геометрии: Возможность создания деталей с высокой
                                            сложностью и точностью.
                                        </li>
                                        <li>Минимальные отходы: Процесс аддитивного производства позволяет значительно
                                            сократить количество отходов по сравнению с традиционными методами.
                                        </li>
                                    </ul>

                                    <h3 className="mb-2 text-base font-semibold text-dark dark:text-white">Недостатки:</h3>
                                    <ul className="list-disc list-inside mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        <li className="mb-2">Стоимость: Оборудование и материалы для SLS могут быть
                                            дорогими.
                                        </li>
                                        <li className="mb-2">Сложность процесса: Требует высокой квалификации для
                                            настройки и управления процессом печати.
                                        </li>
                                        <li>Ограничения по материалам: Не все порошковые материалы подходят для этой
                                            технологии.
                                        </li>
                                    </ul>

                                    <h2 className="mb-4 text-lg font-semibold text-dark dark:text-white">Заключение</h2>
                                    <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        Технология SLS является эффективным решением для производства прочных
                                        пластиковых и металлических деталей с уникальными геометрическими формами. Она
                                        находит применение в различных отраслях, включая автомобилестроение,
                                        аэрокосмическую промышленность и прототипирование.
                                    </p>
                                </div>
                            </div>
                            <Link href={'/create_order'}
                                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
                            >
                                Оставить заявку
                            </Link>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <Slider slides={slides}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;