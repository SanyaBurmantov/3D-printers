import React from 'react';
import Order from "@/components/Order";
import SimpleHeader from "@/components/header/SimpleHeader";
export async function generateStaticParams() {
    return [
        {
            title: 'SPARXLAB - ОСТАВИТЬ ЗАЯВКУ',
        },
    ];
}
const Page = () => {
    return (
        <>
            <SimpleHeader/>
            <Order />
        </>

    );
};

export default Page;