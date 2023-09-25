import React from "react";

const features = [
  {
    id: 1,
    title: "Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, qui enim aperiam vitae rem iusto soluta officiis commodi, vero deserunt",
    h1Color: "text-orange-400",
  },
  {
    id: 2,
    title: "Web apps",
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
    title: "Websites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, qui enim aperiam vitae rem iusto soluta officiis commodi, vero deserunt",
    h1Color: "text-purple-400",
  },
];

function Whyus() {
  return (
    <div className="max-w-7xl relative text-center mx-auto">
      <h2 className="text-[24px] md:text-[32px]">
        Why{" "}
        <span className="bg-clip-text ml-2 bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent">
          {" "}
          Technorate Animations{" "}
        </span>
      </h2>

      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 max-w-5xl  gap-y-4 gap-x-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="text-left mt-8 rounded-xl max-w-sm mx-auto  md:max-w-lg shadow-xl bg-black p-8 border border-gray-800"
          >
            <h2 className={`${feature.h1Color} text-[20px]`}>
              {feature.title}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
              qui enim aperiam vitae rem iusto soluta officiis commodi, vero
              deserunt
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whyus;
