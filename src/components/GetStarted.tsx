import React from 'react';

const GetStarted = () => {
    return (
        <div
            className="relative bg-white dark:bg-dark pt-[120px] pb-[110px] lg:pt-[150px]"
        >
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="hero-content">
                            <h1
                                className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl"
                            >
                                Мы... <br/>
                                Делаем... <br/>
                                3D-печать, нахуй..
                            </h1>
                            <p
                                className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6"
                            >
                                Мы самые пиздатые в этой стране а все остальные печатники нам завидуют. Если вы хейтер -
                                идите нахуй и впизду.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt explicabo odit
                                perferendis provident sequi? Aperiam aut, culpa cupiditate id iste magni maxime nemo
                                nulla officia pariatur placeat porro quae, repellat!
                            </p>
                            <ul className="flex flex-wrap items-center">
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-md bg-primary hover:bg-blue-dark lg:px-7"
                                    >
                                        Погнали нахуй
                                    </a>
                                </li>
                            </ul>
                            <div className="clients pt-16">
                                <h6
                                    className="flex items-center mb-6 text-xs font-normal text-body-color dark:text-dark-6"
                                >
                                    Some Of Our Clients
                                    <span className="inline-block w-8 h-px ml-3 bg-body-color"></span>
                                </h6>
                                <div className="flex items-center gap-4 xl:gap-[50px]">
                                    <a href="javascript:void(0)" className="block py-3">
                                        <img
                                            src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                                            alt="oracle"
                                        />
                                    </a>
                                    <a href="javascript:void(0)" className="block py-3">
                                        <img
                                            src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                                            alt="intel"
                                        />
                                    </a>
                                    <a href="javascript:void(0)" className="block py-3">
                                        <img
                                            src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                                            alt="logitech"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <img
                                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
                                    alt="hero"
                                    className="max-w-full lg:ml-auto"
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