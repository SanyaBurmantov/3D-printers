import Image from "next/image";
import GetStarted from "@/components/GetStarted";
import OurFeatures from "@/components/OurFeauters";
import ContactUs from "@/components/ContactUs";
import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import ModalTest from "@/components/UI/ModalTest";

export default function Home() {
  return (
      <NextUIProvider>
          <main className="">

            <GetStarted />
            <OurFeatures />
            <ContactUs />
          </main>
      </NextUIProvider>
  );
}
