'use client'
import React from 'react';
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/breadcrumbs";
import Link from "next/link";

export interface RouteName {
    name: string;
}

const BreadCrumb = ({name}: RouteName) => {
    return (
        <Breadcrumbs className="mt-12">
            <BreadcrumbItem><Link href={'/'}>Главная </Link></BreadcrumbItem>
            <BreadcrumbItem>{name}</BreadcrumbItem>
        </Breadcrumbs>
    );
};

export default BreadCrumb;