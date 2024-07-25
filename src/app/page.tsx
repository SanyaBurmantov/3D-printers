import Image from "next/image";
import GetStarted from "../components/GetStarted";
import OurFeatures from "../components/OurFeauters";
import ContactUs from "../components/ContactUs";
import React from "react";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
      <NextUIProvider>
          <main className="">
test
            <GetStarted />
            <OurFeatures />
            <ContactUs />
          </main>
      </NextUIProvider>
  );
}
