"use client";
import React, { useState } from "react";
import { PiArrowBendDoubleUpRight } from "react-icons/pi";

export default function Workers() {
    const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/worker_bg.jpg')] bg-cover bg-center bg-no-repeat md:h-96 h-60">
        <div className="absolute my-5 md:my-16 left-10 md:left-20 mx-10 bg-gray-500 border-none bg-opacity-50 h-auto md:w-96 w-auto text-white md:text-3xl text-xl">
          <h1 className="my-5 mx-5">
            LABOUR FOR HIRE AND PROFESSIONAL WORKERS
          </h1>
        </div>
      </div>
      <div className="flex flex-col space-y-5 mx-auto md:mx-10 lg:mx-40 py-5 md:py-10">
        <h1 className="flex justify-center text-3xl md:mt-5 text-[#6D6E71]">
          WORKERS
        </h1>
        <p className="flex justify-center text-center text-[#6D6E71]">
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
      <div className="flex flex-col py-5 md:py-10 bg-[#F4F5F7] text-[#6D6E71]">
        <h1 className="text-3xl flex justify-center text-center">
          CREATE UNLIMITED WORKER PROFILES
        </h1>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-3 mx-10 my-10 justify-center">
          <div className="space-y-3 text-center">
            <h1 className="text-2xl">PERSON</h1>
            <p>
              ClasifiedApp  allows you to create multiple Worker Profiles for
              different skills and vocations.
            </p>
          </div>
          <div className="hidden md:flex">
            <PiArrowBendDoubleUpRight size={70} />
          </div>
          <div className="space-y-3 text-center">
            <h1 className="text-2xl">CARPENTER</h1>
            <p>
              I am a carpenter by trade and available for construction projects
              during normal working hours.
            </p>
          </div>
          <div className="hidden md:flex">
            <PiArrowBendDoubleUpRight size={70} />
          </div>
          <div className="space-y-3 text-center">
            <h1 className="text-2xl">SECURITY GUARD</h1>
            <p>
              I am a trained security guard and available for contract work on
              short notice.
            </p>
          </div>
        </div>
      </div>
      <div className="md:py-10 py-5 md:mx-40 mx-10">
        <div className="flex md:flex-row flex-col justify-center md:space-x-10 space-y-5 md:space-y-0 md:my-10">
          <div className="space-y-3 md:w-full w-auto">
            <p className="md:mb-8 mb-2">
              <img
                src="https://corporate.workapp.world/wp-content/uploads/2019/03/andrad-2.jpg"
                alt="..."
                className="h-40 w-auto md:w-full"
              />
            </p>
            <a
              href=""
              className="text-[#333333] hover:text-[#479DE2] md:text-lg"
            >
              From the Fans: 10 reasons why you should use Classified App
            </a>
            <p className="text-[#747489]">
              One of our delighted fans in Romania, Andrada Anitei, recently
              posted an article in LinkedIn and a blog on her website about
              Classified App. We love it when people around the globe get real
              value from our platform. You can check their website out here. You
              have probably seen me promoting and using this new-edge platform
              for almost [...]
            </p>
            <button className="ml-20 border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-[#333333] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-5 md:w-full w-auto">
            <p className="md:mb-8 mb-2">
              <img
                src="https://corporate.workapp.world/wp-content/uploads/2016/04/worker2.jpg"
                alt="..."
                className="h-40 w-auto md:w-full"
              />
            </p>
            <a
              href=""
              className="text-[#333333] hover:text-[#479DE2] md:text-xl"
            >
              Creating Multiple Worker Profiles Using Classified App
            </a>
            <p className="text-[#747489]">
              Create Multiple Worker Profiles to Separate Your Skills and
              Vocations Are you having problems convincing employers that you
              are the right candidate for the job? The world as we know has
              grown more complex with [...]
            </p>
            <button className="md:ml-40 ml-20 border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-[#333333] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
        </div>
        <div className="flex justify-end space-x-2 py-5">
            <a href="/workers" className={`border border-[#E0DEDE] hover:border-[#479DE2] h-6 w-6 text-[#747489] ${currentPage === 1 ? 'bg-[#079DE2] text-white' : ''}`} onClick={() => setCurrentPage(1)} >
                 <p className="mx-2">1</p>
            </a>
            <a href="/workers/2" className={`border border-[#E0DEDE] hover:border-[#479DE2] h-6 w-6 text-[#747489] ${currentPage === 2 ? 'bg-[#079DE2] text-white' : ''}`} onClick={() => setCurrentPage(2)} >
            <p className="mx-2">2</p>
            </a>
            <a href="/workers/2" className="text-[#747489] hover:text-[#479DE2]">Next &gt;</a>
        </div>
      </div>
    </div>
  );
}
