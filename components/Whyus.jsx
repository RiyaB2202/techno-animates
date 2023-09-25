import React from "react";

const features = [
  {
    id: 1,
    title: "Animations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, qui enim aperiam vitae rem iusto soluta officiis commodi, vero deserunt",
    h1Color: "text-orange-400",
  },
  {
    id: 2,
    title: "Video Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, qui enim aperiam vitae rem iusto soluta officiis commodi, vero deserunt",
    h1Color: "text-blue-400",
  },
  {
    id: 3,
    title: "Graphic Designing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, qui enim aperiam vitae rem iusto soluta officiis commodi, vero deserunt",
    h1Color: "text-pink-400",
  },
  {
    id: 4,
    title: "Web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, qui enim aperiam vitae rem iusto soluta officiis commodi, vero deserunt",
    h1Color: "text-purple-400",
  },
  // {
  //   id: 5,
  //   title: "Social Media Management",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, qui enim aperiam vitae rem iusto soluta officiis commodi, vero deserunt",
  //   h1Color: "text-purple-400",
  // },
];

function Whyus() {
  return (
    <div className="max-w-7xl pt-16 relative text-center mx-auto">
      <h2 className="text-[24px] md:text-[40px] ">
        Our{" "}
        <span className="bg-clip-text ml-2 bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent">
          {" "}
          Services{" "}
        </span>
      </h2>
      <img className="h-[700px] mt-8   mx-auto" src="/1.svg" alt="" />

      <div className="text-left absolute  right-[540px] top-40   rounded-xl max-w-sm mx-auto  md:max-w-lg shadow-xl bg-black p-4 border border-gray-800">
        <h2 className="text-[20px] capitalize text-[#2B86C5]">#Animations</h2>
      </div>

      {/* <div className="grid grid-cols-1 mx-auto md:grid-cols-2 max-w-5xl  gap-y-4 gap-x-4">
        {features.map((feature) => (
          <>
            <div
              key={feature.id}
              className="text-left mt-8 rounded-xl max-w-sm mx-auto  md:max-w-lg shadow-xl bg-black p-8 border border-gray-800"
            >
              <h2 className={`${feature.h1Color} capitalize text-[20px]`}>
                #{feature.title}
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                qui enim aperiam vitae rem iusto soluta officiis commodi, vero
                deserunt
              </p>
            </div>
            <div className="col-span-2  text-left  mt-8 rounded-xl max-w-sm mx-auto  md:max-w-lg shadow-xl bg-black p-8 border border-gray-800">
              <h2 className={`${feature.h1Color} capitalize text-[20px]`}>
                #{feature.title}
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                qui enim aperiam vitae rem iusto soluta officiis commodi, vero
                deserunt
              </p>
            </div>
          </>
        ))}
      </div> */}
    </div>
  );
}

export default Whyus;
