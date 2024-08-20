import React from 'react';
import Link from "next/link";
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/react";
import BreadCrumb from "../../components/UI/BreadCrumb";
import SimpleHeader from "@/components/header/SimpleHeader";
import Slider from "@/components/UI/Slider";
export async function generateStaticParams() {
    return [
        {
            title: 'SPARXLAB - SLA',
        },
    ];
}
const Page = () => {
    const slides = [
        "./images/pageSwiperSlides/SLA/1.jpg",
        "./images/pageSwiperSlides/SLA/2.jpg",
        "./images/pageSwiperSlides/SLA/3.jpg",
        "./images/pageSwiperSlides/SLA/4.jpg",
        "./images/pageSwiperSlides/SLA/5.jpg",
        "./images/pageSwiperSlides/SLA/6.jpg",
        "./images/pageSwiperSlides/SLA/7.jpg",
        "./images/pageSwiperSlides/SLA/8.jpg",
        "./images/pageSwiperSlides/SLA/9.jpg",
        "./images/pageSwiperSlides/SLA/10.jpg",
        "./images/pageSwiperSlides/SLA/11.jpg",
        "./images/pageSwiperSlides/SLA/12.jpg",
        "./images/pageSwiperSlides/SLA/13.jpg",
        "./images/pageSwiperSlides/SLA/14.jpg",
        "./images/pageSwiperSlides/SLA/15.jpg",
        "./images/pageSwiperSlides/SLA/16.jpg",
        "./images/pageSwiperSlides/SLA/17.jpg",
        "./images/pageSwiperSlides/SLA/18.jpg",
        "./images/pageSwiperSlides/SLA/19.jpg",
        "./images/pageSwiperSlides/SLA/20.jpg",
        "./images/pageSwiperSlides/SLA/21.jpg",
        "./images/pageSwiperSlides/SLA/22.jpg",
        "./images/pageSwiperSlides/SLA/23.jpg",
        "./images/pageSwiperSlides/SLA/24.jpg",
        "./images/pageSwiperSlides/SLA/25.jpg",
        "./images/pageSwiperSlides/SLA/26.jpg",
        "./images/pageSwiperSlides/SLA/27.jpg"
    ]
    return (
        <div>
            <SimpleHeader/>
            <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[80px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12 max-w-[570px] lg:mb-0">
                                <BreadCrumb name={'SLA'}/>
                                <div className="max-w-2xl mx-auto p-6">
                                    <h1 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                        Технология печати SLA
                                    </h1>
                                    <h2 className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        SLA (Stereolithography) — это одна из первых технологий 3D-печати, основанная на
                                        использовании ультрафиолетового света для полимеризации жидкой смолы. Эта
                                        технология позволяет создавать объекты с высокой точностью и детализацией.
                                    </h2>

                                    <h2 className="mb-4 text-lg font-semibold text-dark dark:text-white">Принцип
                                        работы</h2>
                                    <ol className="list-decimal list-inside mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        <li className="mb-2">Подготовка модели: 3D-модель создается с помощью
                                            CAD-программ и затем экспортируется в формат, совместимый с принтером
                                            (обычно STL).
                                        </li>
                                        <li className="mb-2">Заполнение резервуара: Резервуар заполняется жидкой
                                            фотополимерной смолой.
                                        </li>
                                        <li className="mb-2">Полимеризация: Ультрафиолетовый лазер сканирует поверхность
                                            смолы, затвердая ее по заданной траектории и формируя первый слой.
                                        </li>
                                        <li>Нанесение слоев: После завершения первого слоя платформа опускается, и
                                            процесс повторяется для последующих слоев до завершения печати.
                                        </li>
                                    </ol>

                                    <h2 className="mb-4 text-lg font-semibold text-dark dark:text-white">Преимущества и
                                        недостатки</h2>

                                    <h3 className="mb-2 text-base font-semibold text-dark dark:text-white">Преимущества:</h3>
                                    <ul className="list-disc list-inside mb-4 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        <li className="mb-2">Высокая точность: SLA обеспечивает отличное качество печати
                                            с высокой детализацией.
                                        </li>
                                        <li className="mb-2">Гладкая поверхность: Объекты имеют гладкую поверхность, что
                                            снижает необходимость в последующей обработке.
                                        </li>
                                        <li>Разнообразие материалов: Доступно множество смол с различными свойствами для
                                            различных приложений.
                                        </li>
                                    </ul>

                                    <h3 className="mb-2 text-base font-semibold text-dark dark:text-white">Недостатки:</h3>
                                    <ul className="list-disc list-inside mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        <li className="mb-2">Стоимость: Принтеры и материалы для SLA часто дороже, чем
                                            для FDM/FFF.
                                        </li>
                                        <li className="mb-2">Время печати: Процесс может занимать больше времени из-за
                                            необходимости полимеризации каждого слоя.
                                        </li>
                                        <li>Безопасность: Жидкие смолы могут быть токсичными и требуют осторожного
                                            обращения.
                                        </li>
                                    </ul>

                                    <h2 className="mb-4 text-lg font-semibold text-dark dark:text-white">Заключение</h2>
                                    <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                        Технология SLA является идеальным выбором для приложений, требующих высокой
                                        точности и детализации. Она широко используется в ювелирной промышленности,
                                        стоматологии и других областях, где качество имеет решающее значение.
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