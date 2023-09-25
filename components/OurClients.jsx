import Image from "next/image";
import React from "react";

function OurClients() {
  return (
    <div className="overflow-hidden bg-black py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Image
            width={500}
            height={500}
            src="/Group2.svg"
            alt="Product screenshot"
            className=""
          />
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-[24px] text-center  md:text-[32px] ">
                <span className="bg-clip-text mr-2 bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent">
                  Our
                </span>
                Clients{" "}
              </h2>

              <p className="mt-6 text-[15px] capitalize -tracking-tight text-justify  text-white/80">
                we would like to introduce Technorate Animations as a
                comprehensive solution provider of your digital needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
