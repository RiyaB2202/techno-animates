import Image from "next/image";
import React from "react";

const features = [
  {
    id: 1,
    title: "Animations",
    position: " top-20 left-44  md:left-[37rem] md:top-28",
    h1Color: "text-orange-400",
  },
  {
    id: 2,
    title: "Video Editing",
    position: "md:left-[44rem] md:top-60 top-36 left-56 ",
    h1Color: "text-blue-400",
  },
  {
    id: 3,
    title: "Graphic Designing",
    position: "md:left-[38rem] md:bottom-72 left-44 bottom-32",
    h1Color: "text-pink-400",
  },
  {
    id: 4,
    title: "Web development",
    position: " md:left-[50rem]  md:bottom-2 bottom-42 left-44",
    h1Color: "text-purple-400",
  },
  {
    id: 5,
    title: "SMM",
    position: "  md:left-[20rem]  md:bottom-56 bottom-24 left-8",
    h1Color: "text-blue-400",
  },
];

function Whyus() {
  return (
    <div className="max-w-7xl pt-4 relative text-center mx-auto">
      <h2 className="text-[24px]  md:text-[40px] ">
        Our{" "}
        <span className="bg-clip-text ml-2 bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent">
          {" "}
          Services{" "}
        </span>
      </h2>
      <Image
        width={800}
        height={800}
        className="  mt-8  mx-auto"
        src="/1.svg"
        alt=""
      />

      {features.map((feature) => (
        <>
          <div
            key={feature.id}
            className={` ${feature.position} text-left absolute  rounded-xl max-w-sm mx-auto  md:max-w-lg shadow-xl bg-black md:p-4 p-2 border border-gray-800`}
          >
            <h2
              className={`${feature.h1Color}  capitalize  text-[16px] md:text-[20px]`}
            >
              #{feature.title}
            </h2>
          </div>
        </>
      ))}
    </div>
  );
}

export default Whyus;
