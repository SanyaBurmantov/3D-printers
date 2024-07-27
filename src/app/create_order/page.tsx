import React from 'react';
import Order from "@/components/Order";
export async function generateStaticParams() {
    return [
        {
            title: 'SPARXLAB - ОСТАВИТЬ ЗАЯВКУ',
        },
    ];
}
const Page = () => {
    return (
        <><Order /></>

    );
};

export default Page;