"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
    { id: 5, text: "Classfields", href: "/classified" },
    { id: 6, text: "Community & Events", href: "/events" },
    { id: 7, text: "Messaging", href: "/messaging" },
    { id: 8, text: "About Us", href: "/about" },
    { id: 9, text: "Our Services", href: "/services" },
    // Add more navigation links as needed
  ];

  return (
    <div className="w-full flex h-16">
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

      {/* mobile button */}
      <div
        onClick={handleNav}
        className="absolute text-white right-0 top-0 mr-5 mt-5 sm:hidden z-10"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "md:hidden absolute z-10 left-0 right-0 top-24 h-80 bottom-0 w-full bg-gray-200 items-center duration-300"
            : "md:hidden absolute z-10 top-[-100%] right-0 h-80 bottom-0 w-full bg-gray-200 flex justify-center items-center duration-300"
        }
      >
        <ul className="bg-[#2b3c96] text-white p-10 absolute top-0 right-0 w-full">
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