"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiArrowTrendingUp  } from "react-icons/hi2";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('/assets/worker_bg.jpg')] bg-cover bg-center bg-no-repeat md:h-96 h-60">
        <div className="absolute my-5 md:my-16 left-10 md:left-20 mx-10 bg-gray-500 border-none bg-opacity-50 h-auto md:w-96 w-auto text-white">
          <h1 className="my-5 mx-5">
            LABOUR FOR HIRE AND PROFESSIONAL WORKERS
          </h1>
        </div>
      </div>
      <div className="flex flex-col space-y-5 mx-auto md:mx-10 lg:mx-40 py-5 md:py-10">
        <h1 className="flex justify-center md:mt-5 text-black">
          WORKERS
        </h1>
        <p className="flex justify-center text-center text-black">
          Clasified App is the perfect tool to find a job or casual work at no cost.
          Create a Worker Profile with your name, a description of your awesome
          abilities and your contact details. You can list individual skills,
          add a photo and even upload your resume directly to WorkApp. It only
          takes 10 seconds to refresh your profile every day so potential
          employers can find you, both locally and globally. Once you’re
          working, simply put your profile on hold until you’re next available
          for hire.
        </p>
      </div>
      <div className="flex flex-col py-5 md:py-10 bg-[#F4F5F7] text-black">
        <h1 className="flex justify-center text-center">
          CREATE UNLIMITED WORKER PROFILES
        </h1>
        <div className="flex md:flex-row flex-col space-x-3 space-y-5 md:space-y-0 mx-10 my-10 justify-center">
          <div className="space-y-3 text-center">
            <h2>PERSON</h2>
            <p>
            Clasified App  allows you to create multiple Worker Profiles for
              different skills and vocations.
            </p>
          </div>
          <div className="hidden md:flex">
            <HiArrowTrendingUp  size={40} />
          </div>
          <div className="space-y-3 text-center">
            <h2>CARPENTER</h2>
            <p>
              I am a carpenter by trade and available for construction projects
              during normal working hours.
            </p>
          </div>
          <div className="hidden md:flex">
            <HiArrowTrendingUp  size={40} />
          </div>
          <div className="space-y-3 text-center">
            <h2>SECURITY GUARD</h2>
            <p>
              I am a trained security guard and available for contract work on
              short notice.
            </p>
          </div>
        </div>
      </div>
      <div className="md:py-10 py-5 md:mx-40 mx-10">
        <div className="flex md:flex-row flex-col justify-start space-y-5 md:space-y-0 md:my-10">
          <div className="space-y-3 md:w-1/2 w-auto text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/worker1.jpg"
                alt="..."
                className="h-52 w-auto md:w-full"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-2xl"
            >
              Go on Holidays - Turn off your Worker Profile
            </a>
            <p className="text-black">
              Going on Holidays - Putting your Worker Profile on Hold Are you
              planning a vacation in the Bahamas? Is it the end of a school
              season and your kids are pushing you to take them [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-black rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
        </div>
        <div className="flex justify-end space-x-2 py-5">
          <a href="/workers" className="text-black hover:text-[#479DE2]">
            &lt; Previous{" "}
          </a>
          <a
            href="/workers"
            className={`border border-[#E0DEDE] hover:border-[#479DE2] h-6 w-6 text-black ${
              currentPage === 1 ? "bg-[#2B3C96] text-white" : ""
            }`}
            onClick={() => setCurrentPage(1)}
          >
            <p className="mx-2">1</p>
          </a>
          <a
            href="/workers/2"
            className={`border border-[#E0DEDE] hover:border-[#479DE2] h-6 w-6 text-black ${
              currentPage === 2 ? "bg-[#2B3C96] text-white" : ""
            }`}
            onClick={() => setCurrentPage(2)}
          >
            <p className="mx-2">2</p>
          </a>
        </div>
      </div>
    </div>
  );
}
