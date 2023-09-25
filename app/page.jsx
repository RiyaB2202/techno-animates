import AboutComp from "@/components/About";
import Banner from "@/components/Banner";
import OurClients from "@/components/OurClients";

import Whyus from "@/components/Whyus";

export default function Home() {
  return (
    <div className="h-full">
      <Banner />
      <img src="/Banner.svg" alt="" />
      <Whyus />

      <AboutComp />
      <OurClients />
    </div>
  );
}
