"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsTypeH2 } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
const testimonials = [
  {
    id: 1,
    name: "Angelah",
    text: `“I was looking for a casual job as a cleaner for a few months when a friend told me to create a Worker Profile on WorkApp. I did as he suggested and since it was free, I had nothing to lose. Within days, I received an enquiry through WorkApp Messaging and got the job I was looking for.”`,
  },
  {
    id: 2,
    name: "Chile",
    text: `“I posted a Job Vacancy on ClassfiedApp for a bike technician and had an enquiry through ClassfiedApp Messaging - the same day.
      Found a great worker and very happy with the result. ClassfiedApp worked awesomely for me!
      Next is to use ClassfiedApp to sell my bikes. Thanks ClassfiedApp.”`,
  },
];

export default function Businesses() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('/assets/business_bg.jpg')] md:h-96 h-60">
        <div className="absolute md:mt-14 mt-5 md:ml-40 bg-gray-500 border-none bg-opacity-50 md:h-52 h-auto md:w-96 w-auto text-white">
          <h1 className="my-5 mx-5">
            LIST, PROMOTE AND<br></br> GROW YOUR BUSINESSES
          </h1>
        </div>
      </div>
      <div className="md:py-8 py-5">
        <h1 className="flex justify-center text-black md:mb-10 mb-5">
          BUSINESS
        </h1>
        <div className="flex md:flex-row flex-col lg:space-x-60 justify-center">
          <div className="flex flex-col text-[#333333]">
            <h2 className="justify-center md:ml-10 ml-10 md:mb-3 mb-2">
              ARE YOU A BUSINESS OWNER?
            </h2>
            <p className="justify-center flex ml-8">
              <TiTick size={30} className="text-[#2B3C96]" />
              Create Unlimited Business Profiles
            </p>
            <p className="justify-center flex">
              <TiTick size={30} className="text-[#2B3C96]" />
              Get found locally and globally
            </p>
            <p className="justify-center flex ml-3">
              <TiTick size={30} className="text-[#2B3C96]" />
              Promote your business for free
            </p>
            <button className="mt-5 md:ml-10 border-none bg-[#2B3C96] text-[#ffffff] rounded-lg h-10 w-auto md:w-80">
              <a href="" className="mx-8 my-2">
                Create Business Profile for FREE
              </a>
            </button>
          </div>
          <div className="flex flex-col items-center mt-5 md:mt-0">
            <div className="relative overflow-hidden md:w-96 w-60 h-auto border rounded-tl-lg rounded-br-lg border-[#D8D8D8] bg-[#F4F5F7] shadow-md">
              <p className="text-black flex justify-center lg:mt-14 md:mt-5 mt-5 italic mx-3">
                {testimonials[currentSlide].text}
              </p>
              <div className="my-5 md:my-5 flex justify-center">
                <p className="text-[#2B3C96] md:mt-2 font-semibold">
                  {testimonials[currentSlide].name}
                </p>
              </div>
            </div>
            <div className="flex bottom-0 w-full justify-center md:my-5 lg:my-10 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentSlide ? "bg-[#747474]" : "bg-[#2B3C96]"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F5F7] md:py-10 py-5 text-center text-black">
        <h1 className="flex justify-center md:mb-10 mb-5">
          ADD YOUR BUSINESS IN 3 EASY STEPS
        </h1>
        <div className="flex md:flex-row flex-col md:space-x-5 space-y-5 md:space-y-0 justify-center mx-10 md:mx-20 md:mb-5">
          <span>
            <h2 className="md:mb-3 mb-1">
              Download Classified App
            </h2>
            <p>
              Simply download ClassfiedApp from the App Store, Google play or on
              desktop via our ClassfiedApp for the Web platform, and you’re ready to
              go.
            </p>
          </span>
          <span>
            <h2 className="md:mb-3 mb-1">
              Create your first business Profile
            </h2>
            <p>
              Add your business name, description, contact details, logo and
              additional images of your portfolio. You can also activate PayPal
              and open your first ClassfiedApp digital shop or simply link to your
              own website.
            </p>
          </span>
          <span>
            <h2 className="md:mb-3 mb-1">
              Add Extra Value
            </h2>
            <p>
              Choose Edit Profile to add new products, promotions and job
              vacancies to your business profile. Remember to refresh your
              ClassfiedApp business listing every 30 days.
            </p>
          </span>
        </div>
      </div>
      <div className="py-10 md:mx-40 mx-10">
        <div className="flex md:flex-row flex-col justify-center md:space-x-10 space-y-5 md:space-y-0 md:my-10 text-black">
          <div className="space-y-5 text-center">
            <p className="md:mb-5 mb-2">
              <Image
                src="/assets/shane-article.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Free Advertising!No Strings Attached
            </a>
            <p>
              - By Mark Sikaundi, CEO There are many great things about my role
              as the CEO of DevCircle Africa. I get to work with an amazing team of
              professionals who give 110% every day and are [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-5 text-center">
            <p className="md:mb-5 mb-2">
              <Image
                src="/assets/12.png"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Lessons learned from 6 Years in Enterprenuer Land
            </a>
            <p>
              Next month marks the 6th anniversary of the DevCircle Africa story - an
              amazing journey from a simple idea to a fully functioning,
              revolutionary platform growing stronger by the day. So, I’ve been
              reflecting on the lessons learned [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#EFF0F2] flex md:flex-row flex-col">
        <div className="bg-[url('/assets/business_iphns.png')] bg-no-repeat md:h-96 h-80 w-auto md:w-1/2"></div>
        <div className="flex flex-col mx-10 my-10">
          <h1 className="text-black">
            On-the-go and need<br></br> local Workers?
          </h1>
          <p className="flex mt-5 text-black">
            Find and connect with local Workers.<br></br> Read rating and
            reviews, view their skills,<br></br> and availability. Make contact
            instantly.<br></br> ClassifiedApp, results for the here and now.
          </p>
        </div>
      </div>
    </div>
  );
}
