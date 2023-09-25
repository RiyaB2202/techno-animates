import Banner from "@/components/Banner";
import Features from "@/components/Features";

import Whyus from "@/components/Whyus";

export default function Home() {
  return (
    <div className="h-full">
      <Banner />
      <img src="/Banner.svg" alt="" />
      <Whyus />
      <Features />
    </div>
  );
}
