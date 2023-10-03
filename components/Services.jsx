import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Animations",
    href: "#",
    imageSrc: "/an2.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "text-orange-400",
  },
  {
    id: 2,
    name: "Video Editing",
    href: "#",
    imageSrc: "/video.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "text-[#2B86C5]",
  },
  {
    id: 3,
    name: "Web development",
    href: "#",
    imageSrc: "/web.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "text-purple-400",
  },
  {
    id: 4,
    name: "SMM",
    href: "#",
    imageSrc: "/social.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "text-blue-400",
  },
  // More products...
];

export default function Services() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-6xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-white/90">
          Our{" "}
          <span className="bg-clip-text  bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent">
            Services
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-24 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group  card  relative cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl h-72   w-full  group-hover:opacity-75 lg:h-80">
                <Image
                  width={500}
                  height={500}
                  priority
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="mt-6 items-center flex justify-between">
                <div>
                  <h2
                    className={`text-lg md:text-2xl line-clamp-1 ${product.color}  `}
                  >
                    #{product.name}
                  </h2>
                </div>
                <div className="bg-white flex items-center  py-1.5 px-4  space-x-2  rounded-lg">
                  <p className="text-[14px] md:text-[16px] font-semibold  line-clamp-1 bg-clip-text  bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent ">
                    Explore more
                  </p>
                  <ArrowUpRightIcon className="h-4 w-4 flex-shrink-0 text-black" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
