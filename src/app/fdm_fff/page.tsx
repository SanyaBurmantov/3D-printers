import React from 'react';
import Link from "next/link";
import BreadCrumb from "../../components/UI/BreadCrumb";
import SimpleHeader from "@/components/header/SimpleHeader";
export async function generateStaticParams() {
    return [
        {
            title: 'SPARXLAB - FDM/FFF',
        },
    ];
}

const Page = () => {
    return (
        <>
            <SimpleHeader/>
            <div>
                <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[80px]">
                    <div className="container">

                        <div className="-mx-4 flex flex-wrap lg:justify-between">
                            <div className="w-full px-4 lg:w-2/3 xl:w-2/3">
                                <div className="mb-12 max-w-[570px] lg:mb-0">
                                    <BreadCrumb name={'FDM'}/>
                                    <div className="max-w-2xl mx-auto p-6">
                                        <h1 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                            Технология печати FDM/FFF
                                        </h1>
                                        <h2 className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                            FDM (Fused Deposition Modeling) и FFF (Fused Filament Fabrication) — это
                                            популярные технологии 3D-печати, которые основаны на послойном нанесении
                                            расплавленного термопластика. Эти методы широко используются как в
                                            промышленности, так и в любительских проектах благодаря своей доступности и
                                            простоте.
                                        </h2>

                                        <h2 className="mb-4 text-lg font-semibold text-dark dark:text-white">Принцип
                                            работы</h2>
                                        <ol className="list-decimal list-inside mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                            <li className="mb-2">Подготовка модели: 3D-модель создается с помощью
                                                CAD-программ и затем экспортируется в формат, совместимый с 3D-принтером
                                                (обычно STL).
                                            </li>
                                            <li className="mb-2">Расплавление материала: Нагревательный элемент принтера
                                                расплавляет термопластический филамент, который подается через
                                                экструдер.
                                            </li>
                                            <li className="mb-2">Нанесение слоев: Расплавленный материал наносится на
                                                платформу в виде тонких слоев, постепенно формируя объект. Каждый слой
                                                охлаждается и затвердевает, что позволяет создавать сложные
                                                геометрические формы.
                                            </li>
                                            <li>Завершение печати: После завершения процесса печати объект извлекается
                                                из принтера и может потребовать дополнительной обработки, такой как
                                                удаление поддержек или шлифовка.
                                            </li>
                                        </ol>

                                        <h2 className="mb-4 text-lg font-semibold text-dark dark:text-white">Преимущества
                                            и недостатки</h2>

                                        <h3 className="mb-2 text-base font-semibold text-dark dark:text-white">Преимущества:</h3>
                                        <ul className="list-disc list-inside mb-4 text-base leading-relaxed text-body-color dark:text-dark-6">
                                            <li className="mb-2">Доступность: Принтеры FDM/FFF относительно недороги и
                                                доступны для широкой аудитории.
                                            </li>
                                            <li className="mb-2">Разнообразие материалов: Поддержка различных
                                                термопластиков, таких как PLA, ABS, PETG и других.
                                            </li>
                                            <li>Простота использования: Легкость в настройке и эксплуатации.</li>
                                        </ul>

                                        <h3 className="mb-2 text-base font-semibold text-dark dark:text-white">Недостатки:</h3>
                                        <ul className="list-disc list-inside mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                            <li className="mb-2">Качество печати: Ограничения в точности и детализации
                                                по сравнению с другими технологиями, такими как SLA.
                                            </li>
                                            <li className="mb-2">Скорость: Процесс может занимать значительное время,
                                                особенно для крупных объектов.
                                            </li>
                                            <li>Свойства материала: Некоторые термопласты могут быть менее прочными или
                                                устойчивыми к температуре.
                                            </li>
                                        </ul>

                                        <h2 className="mb-4 text-lg font-semibold text-dark dark:text-white">Заключение</h2>
                                        <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                            Технология FDM/FFF является одним из самых распространенных методов
                                            3D-печати благодаря своей доступности и простоте. Она подходит как для
                                            начинающих, так и для опытных пользователей, предоставляя возможность
                                            создавать разнообразные объекты для различных целей.
                                        </p>
                                    </div>

                                </div>
                                <Link href={'/create_order'}
                                      className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
                                >
                                    Оставить заявку
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Page;