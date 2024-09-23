import React, {useState} from "react";
import {router} from "next/client";
import {Router} from "next/router";
import Link from "next/link";
import styles from "./styles.module.css"
import ServiceCard from "@/components/ServiceCard";
import {Image} from "@nextui-org/react";
export interface IServiceCard {
    icon: any,
    title: string,
    subtitle: string,
    details: any,
    route
        : string,
}

const OurFeatures = () => {
    return (
        <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                Что мы умеем?
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                В нашей компании мы используем самые современные технологии 3D печати, чтобы
                                гарантировать высокое качество и точность изделий. Вот некоторые из них:
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <ServiceCard
                        route={'/fdm_fff'}
                        title="FDM/FFF"
                        subtitle="(Fused Deposition Modeling)"
                        details="FDM — это метод послойного нанесения расплавленного пластика, который идеально подходит для прототипирования и создания функциональных деталей. Эта технология обеспечивает доступность и простоту в использовании, позволяя быстро получать изделия с хорошими механическими свойствами."
                        icon={
                            <Image src="https://sparxlab.by/images/fdm/fdm_main.jpg" className="rounded-[20px]" alt="fdm" />
                        }
                    />
                    <ServiceCard
                        route={'/sla'}
                        title="SLA"
                        subtitle="(Stereolithography)"
                        details="SLA использует лазер для полимеризации смолы, создавая детали с высокой детализацией и гладкой поверхностью. Эта технология подходит для ювелирных изделий и медицинских моделей, обеспечивая отличное качество и точность, что делает её популярной среди дизайнеров и инженеров."
                        icon={
                            <Image src="https://sparxlab.by/images/sla/sla_main.jpg" className="rounded-[20px]" alt="sla"/>
                        }
                    />
                    <ServiceCard
                        route={'/sls'}
                        title="SLS"
                        subtitle="(Selective Laser Sintering)"
                        details="SLS работает на основе спекания порошковых материалов с помощью лазера, что позволяет создавать прочные и сложные детали. Эта технология идеально подходит для функциональных прототипов и малосерийного производства, обеспечивая высокую прочность и надежность изделий."
                        icon={
                            <Image src="https://sparxlab.by/images/sls/sls_main.jpg" className="rounded-[20px]" alt="sls"/>
                        }
                    />
                    <ServiceCard
                        route={'/slm'}
                        title="SLM"
                        subtitle="(Selective Laser Melting)"
                        details="SLM использует лазер для плавления металлического порошка, создавая детали с высокой прочностью и сложной геометрией. Эта технология применяется в аэрокосмической и медицинской отраслях, обеспечивая отличное качество и минимальные отходы в процессе производства."
                        icon={
                            <Image src="https://sparxlab.by/images/slm/slm_main.jpg" className="rounded-[20px]" alt="slm"/>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default OurFeatures;