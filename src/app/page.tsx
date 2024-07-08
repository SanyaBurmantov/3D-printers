import Image from "next/image";
import GetStarted from "@/components/GetStarted";
import OurFeatures from "@/components/OurFeauters";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
      <main className="">
        <GetStarted />
        <OurFeatures />
        <ContactUs />
      </main>
  );
}
