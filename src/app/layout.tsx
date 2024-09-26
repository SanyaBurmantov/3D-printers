import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import {bgWhite} from "next/dist/lib/picocolors";
import HelpBtn from "@/components/UI/HelpBtn";
import { useRouter } from 'next/navigation';
import GoTopBtn from "@/components/UI/GoTopBtn";
import ContactUs from "@/components/ContactUs";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SPARXLAB - 3D ПЕЧАТЬ",
    description: "Добро пожаловать в SparxLab, ваш надежный партнер в мире 3D печати. Мы предлагаем инновационные решения для создания уникальных объектов и прототипов.",
    keywords: "3D печать, аддитивные технологии, прототипирование, FDM, SLM, SLA, SLS",
    openGraph: {
        title: "SparxLab - 3D Печать",
        description: "Откройте для себя мир 3D печати с SparxLab. Инновационные технологии для ваших уникальных проектов.",
        url: "https://sparxlab.by", // Укажите ваш URL
        // images: "https://sparxlab.com/image.jpg", // Укажите изображение для превью
        type: "website",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className={inter.className}>
          {children}
        <HelpBtn />
        <GoTopBtn />
        <ContactUs />
      </body>
    </html>
  );
}
