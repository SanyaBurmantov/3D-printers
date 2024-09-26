import Image from "next/image";
import GetStarted from "../components/GetStarted";
import OurFeatures from "../components/OurFeauters";
import ContactUs from "../components/ContactUs";
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import Header from "@/components/header/Header";

export default function Home() {
  return (
      <NextUIProvider>
          <Header />
          <main className="">
            <GetStarted />
            <OurFeatures />
          </main>

      </NextUIProvider>
  );
}
