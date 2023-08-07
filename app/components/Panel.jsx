// components/Panel.js
import React, { useState } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

const Panel = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div
        className="flex justify-start space-x-3 items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#110000] hover:text-[#079DE2]">
          {isOpen ? (
            <AiFillMinusSquare size={30} />
          ) : (
            <AiFillPlusSquare size={30} />
          )}
        </span>
        <h2 className="text-lg text-[#110000] border-b border-[#110000]">
          {title}
        </h2>
      </div>
      {isOpen && (
        <div className="mt-2 text-[#414565] md:ml-10 ml-5">{children}</div>
      )}
      {isOpen && <div className="mt-2"></div>}
    </div>
  );
};

export default Panel;
