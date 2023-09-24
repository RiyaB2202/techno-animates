"use client";
// import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// import { navVariants } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles";
import {
  CubeTransparentIcon,
  HomeIcon,
  NewspaperIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const NavLinks = [
  { id: 1, src: "/home1.svg", name: "Home", href: `/` },
  { id: 4, src: "/services.svg", name: "Services", href: `/services` },
  { id: 2, src: "/about.svg", name: "About", href: `/about` },
  { id: 3, src: "/c.svg", name: "Contact", href: `/contact` },
];

export default function Header() {
  const pathname = usePathname();
  NavLinks.forEach((link) => {
    link.className =
      link.href === pathname
        ? "  text-center text-white  dark:text-white    sm:px-3 sm:py-2 text-[14px] sm:text-[16px] font-semibold "
        : " sm:px-3 text-center sm:py-2 text-[14px] sm:text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-white/60 duration-300 dark:hover:text-white hover:text-white";
  });

  return (
    <>
      <nav
        // variants={navVariants}
        // initial="hidden"
        // whileInView="show"
        className={`${styles.xPaddings} py-8 bg-transparent      relative`}
      >
        {/* <div className="absolute   inset-0 hero-gradient" /> */}
        <div
          className={`${styles.innerWidth} max-w-7xl bg-transparent mx-auto flex items-center justify-between gap-8`}
        >
          <div className="  mx-auto flex justify-center  flex-1 md:flex-none  ">
            <Link href="/">
              {/* <img className="object-cover " src="/9.png" alt="" /> */}
              <h2 className="font-extrabold bg-clip-text ml-2 bg-gradient-to-r from-[#2B86C5]  to-pink-400 text-transparent relative  text-center   z-10 cursor-pointer text-[22px] leading-[30.24px] md:mt-1  ">
                Technorate Animates
              </h2>
            </Link>
          </div>

          <div className=" md:z-10  ml-auto">{/* <Example /> */}</div>

          {/* laptop header */}

          <div className=" hidden flex-1 items-center justify-end capitalize sm:items-stretch md:mr-8 md:inline-flex lg:px-8  md:px-2">
            <div className="hidden sm:block">
              <div className="flex flex-row items-center space-x-2">
                {NavLinks.map((link) => (
                  <Link
                    className="flex flex-row z-10  flex-shrink-0 items-center lg:space-x-2"
                    key={link.id}
                    href={`${link.href}`}
                  >
                    <div>
                      <Image
                        height={32}
                        width={32}
                        src={link.src}
                        alt={link.name}
                      />
                    </div>

                    <div className={link.className}>{link.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile navigation menu */}
      <div className="fixed left-0  z-10   bottom-0  w-full bg-[#0D0500] md:hidden">
        <div className="flex h-20 cursor-pointer  flex-col  items-center justify-around   rounded-t-md bg-[#0D0500]  px-2 text-white ">
          <div className=" z-10 flex list-none justify-between  space-x-8  text-sm sm:space-x-16 sm:px-4 ">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={`${link.href}`}
                className="flex flex-col w-1/4  items-center  text-center align-middle"
              >
                <Image
                  width={32}
                  height={32}
                  // className="h-8 w-8"
                  src={link.src}
                  alt={link.name}
                />

                <p
                  className={`mt-1 text-center font-medium cursor-pointer ${link.className} text-[14px]`}
                >
                  {link.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
