import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

function Header() {
  return (
    <div className="h-fit border-1 max-w-full z-9999 bg-[#ffffff]">
      <div className="sm:block md:flex justify-between w-4/5 px-20 m-auto py-4 items-center bg-[#ffffff]">
        <div className="left-0 top-0">
          <Image src="/wa.png" alt="logo" width="320" height="180" />
        </div>
        <div className="flex flex-wrap">
          <div className="p-4">
            <Image src="/ios.png" alt="logo" width="170" height="120" />
          </div>
          <div className="p-4">
            <Image src="/googleplay.png" alt="logo" width="170" height="120" />
          </div>
        </div>
        <div className="block p-5 lg:flex flex-wrap flex-shrink space-x-2">
          <div>
            <button className="bg-gray-500 text-white px-4 py-2 rounded">
              Sign In
            </button>
          </div>
          <div>
            <button className="bg-black text-white px-4 py-2">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="bottom-0 sm:flex flex-wrap bg-[#2b3c96] items-center">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
