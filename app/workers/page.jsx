"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";

export default function Workers() {
    const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('/assets/worker_bg.jpg')] bg-cover bg-center bg-no-repeat md:h-96 h-60">
        <div className="absolute my-5 md:my-16 md:left-20 mx-10 bg-gray-500 border-none bg-opacity-50 h-auto md:w-96 w-auto text-white md:text-3xl text-xl">
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
          ClasifiedApp  is the perfect tool to find a job or casual work at no cost.
          Create a Worker Profile with your name, a description of your awesome
          abilities and your contact details. You can list individual skills,
          add a photo and even upload your resume directly to ClasifiedApp . It only
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
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-3 mx-10 my-10 justify-center">
          <div className="space-y-3 text-center">
            <h2>PERSON</h2>
            <p>
              ClasifiedApp  allows you to create multiple Worker Profiles for
              different skills and vocations.
            </p>
          </div>
          <div className="hidden md:flex">
            <HiArrowTrendingUp size={40} />
          </div>
          <div className="space-y-3 text-center">
            <h2>CARPENTER</h2>
            <p>
              I am a carpenter by trade and available for construction projects
              during normal working hours.
            </p>
          </div>
          <div className="hidden md:flex">
            <HiArrowTrendingUp size={40} />
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
        <div className="flex md:flex-row flex-col justify-center md:space-x-10 space-y-5 md:space-y-0 text-center md:my-10">
          <div className="space-y-3 md:w-full w-auto">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/classified2.jpg"
                alt="..."
                className="h-52 w-auto md:w-full"
                width={200}
                height={40}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-2xl"
            >
              From the Fans: 10 reasons why you should use Classified App
            </a>
            <p className="text-black">
              One of our delighted fans in Romania, Andrada Anitei, recently
              posted an article in LinkedIn and a blog on her website about
              Classified App. We love it when people around the globe get real
              value from our platform. You can check their website out here. You
              have probably seen me promoting and using this new-edge platform
              for almost [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-black rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-5 md:w-full w-auto">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/worker2.jpg"
                alt="..."
                className="h-52 w-auto md:w-full"
                height={40}
                width={200}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-2xl"
            >
              Creating Multiple Worker Profiles Using Classified App
            </a>
            <p className="text-black">
              Create Multiple Worker Profiles to Separate Your Skills and
              Vocations Are you having problems convincing employers that you
              are the right candidate for the job? The world as we know has
              grown more complex with [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-black rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
        </div>
        <div className="flex justify-end space-x-2 py-5">
            <a href="/workers" className={`border border-[#E0DEDE] hover:border-[#479DE2] h-6 w-6 text-black ${currentPage === 1 ? 'bg-[#079DE2] text-white' : ''}`} onClick={() => setCurrentPage(1)} >
                 <p className="mx-2">1</p>
            </a>
            <a href="/workers/2" className={`border border-[#E0DEDE] hover:border-[#479DE2] h-6 w-6 text-black ${currentPage === 2 ? 'bg-[#079DE2] text-white' : ''}`} onClick={() => setCurrentPage(2)} >
            <p className="mx-2">2</p>
            </a>
            <a href="/workers/2" className="text-black hover:text-[#479DE2]">Next &gt;</a>
        </div>
      </div>
    </div>
  );
}
