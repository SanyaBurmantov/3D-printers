import React from 'react';
import Link from "next/link";

const OrderButton = () => {
    return (
        <Link href={'/create_order'}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center border-2 rounded-md transition-transform duration-400 ease-in-out hover:scale-95 lg:px-7"
        >
            <div className="my-[-24px] mr-1"><img className="h-[40px]" src='./sparxlab_logo.jpg'/></div>

            Оставить заявку
        </Link>
    );
};

export default OrderButton;