"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { FaLongArrowAltRight } from "react-icons/fa";
import { ImHome3 } from "react-icons/im";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navigationLinks = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Business", href: "/business" },
    { id: 3, text: "Workers", href: "/workers" },
    { id: 4, text: "jobs", href: "/jobs" },
    { id: 5, text: "Classifieds", href: "/classifieds" },
    { id: 6, text: "Community & Events", href: "/community-events" },
    { id: 7, text: "Messaging", href: "/messaging" },
    { id: 8, text: "What's Fresh", href: "/whats-fresh" },
    { id: 9, text: "About Us", href: "/about" },
    { id: 10, text: "Blog", href: "/blog" },
  ];

  return (
    <div className="w-full flex h-20">
      <ul className="hidden w-full sm:flex justify-center items-center">
        {/* <Link href="/">
        <li className='hover:text-amber-600 ml-4 hover:border-b text-sm lg:text-xl'>home</li>
    </Link> */}
        <nav className="hidden text-sm sm:flex flex-wrap items-center">
          {navigationLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <div className="group relative hover:bg-sky-500 transition-shadow">
                <li className="block text-white hover:text-gray-600 p-2">
                  {link.text}
                </li>
              </div>
            </Link>
          ))}
        </nav>
      </ul>

<div className="left-0 mt-5 ml-5 text-white md:hidden"> 
  <ImHome3 size={30} />
</div>
      {/* mobile button */}
      <div
        onClick={handleNav}
        className="absolute right-0 pt-4 mr-4 text-white sm:hidden z-10"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "md:hidden absolute z-10 top-64 right-0 h-80 bottom-0 w-full bg-gray-200 items-center duration-300"
            : "md:hidden absolute z-10 top-[-100%] right-0 h-80 bottom-0 w-full bg-gray-200 flex justify-center items-center duration-300"
        }
      >
        <ul className="bg-[#2b3c96] text-center text-white p-10 absolute top-0 right-0 w-full">
          <nav className="block text-sm items-center">
            {navigationLinks.map((link) => (
              <Link key={link.id} href={link.href}>
                <div className="group relative items-center hover:bg-sky-500 transition-shadow">
                  <li className="block text-white hover:text-gray-600 p-2">
                    {link.text}
                  </li>
                </div>
              </Link>
            ))}
          </nav>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
