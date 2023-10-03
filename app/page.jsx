import AboutComp from "@/components/About";
import Banner from "@/components/Banner";
import OurClients from "@/components/OurClients";
import Testimonials from "@/components/Testimonials";

import Whyus from "@/components/Whyus";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div className="h-full">
      <Banner />
      {/* <img src="/Banner.svg" alt="" /> */}
      <Whyus />

      <AboutComp />
      <OurClients />
      <Testimonials />
      <Footer />
      
    </div>
  );
}
