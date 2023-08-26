import React from "react";
import { ImMail4 } from "react-icons/im";

export default function Contact() {
  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('/assets/contact_us_bg.jpg')] bg-cover bg-center bg-no-repeat md:h-96 h-60">
        <div className="absolute mt-14 left-10 md:left-20 bg-gray-500 border-none bg-opacity-50 md:h-40 h-20 md:w-96 w-auto text-white md:text-3xl text-xl">
          <h1 className="my-5 mx-5">
            WE&apos;D LOVE TO<br></br> HEAR FROM YOU
          </h1>
        </div>
      </div>
      <form className="py-14 flex-col lg:flex-row flex lg:space-x-10 px-10 lg:px-20">
        <div className="md:w-full lg:w-4/5 text-[#333333] border-[#D2D2D2] ">
          <h1 className="border-b-2">CONTACT FORM</h1>
          <div className="flex md:flex-row flex-wrap flex-col space-y-5 md:space-y-0 justify-between pt-10">
            <div className="flex flex-col">
              <p className="">Your Name*</p>
              <div className="border-2 shadow-lg rounded-lg w-auto lg:w-60 h-10">
                <input
                  type="text"
                  name="Your name"
                  autoComplete="given-name"
                  className="w-full h-10"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="">Email Address*</p>
              <div className="border-2 shadow-lg rounded-lg w-auto lg:w-60 h-10">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full h-10"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="">Phone Number*</p>
              <div className="border-2 shadow-lg rounded-lg w-auto lg:w-60 h-10">
                <input
                  type="text"
                  name="phone"
                  autoComplete="tel"
                  className="w-full h-10"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <p className="">Comments*</p>
            <div className="border-2 border-[#D2D2D2] shadow-lg rounded-lg">
              <input rows="6" name="message" className="w-full h-40"></input>
            </div>
          </div>
          <div className="flex mt-8">
            <button
              type="submit"
              className="border-none rounded-lg bg-[#2B3B93] font-bold text-white text-center h-10 w-28"
            >
              SUBMIT
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 text-[#333333] border-[#D2D2D2]">
          <h1 className="text-[#333333] border-b-2">INFORMATION</h1>
          <p className="flex pt-10">
            <ImMail4 size={30} className="text-[#2B3C96] mr-3" />
            info@classifiedapp.world
          </p>
        </div>
      </form>
    </div>
  );
}
