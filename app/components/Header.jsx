import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

function Header() {
  return (
    <div className="h-fit border-1 max-w-full z-9999 bg-[#ffffff]">
      <div className="w-full px-4 sm:px-6 lg:px-8 m-auto py-4 flex flex-col sm:flex-row items-center bg-[#ffffff]">
        <div className="order-2 sm:order-1 mb-4 sm:mb-0 sm:w-1/3">
          {/* Logo */}
          <Image src="/wa.png" alt="logo" width={320} height={180} />
        </div>
        <div className="order-1 sm:order-2 flex flex-wrap justify-center sm:justify-start sm:w-1/3">
          {/* Download buttons */}
          <div className="p-2">
            <Image src="/ios.png" alt="logo" width={170} height={120} />
          </div>
          <div className="p-2">
            <Image src="/googleplay.png" alt="logo" width={170} height={120} />
          </div>
        </div>
        <div className="order-3 sm:order-3 mt-4 sm:mt-0 sm:w-1/3 flex justify-center sm:justify-end space-x-2">
          {/* Sign In and Sign Up buttons */}
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            Sign In
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
      <div className="bg-[#2b3c96]">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
