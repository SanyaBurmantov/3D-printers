import React from 'react';

const Page = () => {
    return (
        <div>
            <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12 max-w-[570px] lg:mb-0">
                                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                   SLA
                                </h2>
                                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                    Зацени это бля! Хули ты сучка
                                </p>
                                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aut
                                    cumque deleniti doloremque incidunt laboriosam, laudantium, magni modi nesciunt
                                    nihil, nulla quo ratione sit ullam? Animi aperiam assumenda commodi consequatur,
                                    debitis dolor dolore dolorem eos et excepturi laborum molestias non numquam odit
                                    omnis quasi quia repudiandae saepe, sit voluptatem!
                                </p>
                            </div>
                            <a
                                href="javascript:void(0)"
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
                            >
                                Дайте два блять
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;