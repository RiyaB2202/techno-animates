"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useTypewriter } from "react-simple-typewriter";

export default function Banner() {
  const [text] = useTypewriter({
    words: [
      "Animations",
      "Graphic Designing",
      "Websites",
      "Video Editing",
      "SMM",
    ],
    loop: true,
    delaySpeed: 2400,
  });
  return (
    <div className=" pt-12  md:pt-16 h-[540px] md:h-[500px]">
      <div className="absolute  w-[80%] inset-0 hero-gradient" />
      <div className="mx-auto relative max-w-7xl  ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-8 lg:mx-0 lg:max-w-7xl lg:grid-cols-2">
          <div className=" lg:pt-4">
            <div className="    lg:max-w-2xl">
              <h1 className="mt-2  text-center sm:text-left z-10 text-2xl font-bold tracking-tight  sm:text-4xl">
                Technorate Animations
              </h1>
              <h2 className="mt-1 text-center sm:text-left text-2xl font-bold tracking-tight  sm:text-4xl">
                Provide
                <span className="bg-clip-text ml-2 bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent">
                  #{text}
                </span>
              </h2>
              <p className="mt-6 -tracking-tight text-justify text-[16px]   mx-auto md:mx-0 max-w-[18rem] md:max-w-xl text-white/70">
                Technorate Animations, expertise spans professional animations,
                expert video editing, captivating graphic design, and the latest
                in cutting-edge web design services.
              </p>

              <div className="absolute object-cover  h-20 w-20 -top-20 right-0 md:left-64">
                <Image
                  src="/line2.svg"
                  fill
                  className="object-cover absolute "
                  alt="hello"
                />
              </div>
              <div className="mt-10 flex items-center justify-center  lg:justify-start">
                <Link
                  href="/contact"
                  className="rounded-md bg-white  px-3.5 py-2.5  font-semibold text-gray-900 text-lg shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Book your Call Now →
                </Link>
              </div>
              {/* <Image
                className=" object-cover absolute  -left-14 right-0 "
                src="/Group.svg"
              /> */}
            </div>
            <div className=" h-full w-56 absolute top-52 md:top-56 ">
              <Image priority fill alt="hello" src="/currly line.svg" />
            </div>
          </div>

          {/* <Image
            width={200}
            height={200}
            src="/gear.svg"
            alt="Product screenshot"
            className="w-[28rem] hidden md:inline   shadow-xl  sm:w-[16rem] "
          /> */}
        </div>
      </div>
    </div>
  );
}
