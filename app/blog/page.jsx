import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('/assets/blog.jpg')] bg-cover bg-center bg-no-repeat md:h-96 h-60">
        <div className="absolute mt-14 hidden md:flex right-10 md:right-20 bg-gray-500 border-none bg-opacity-50 md:h-40 h-20 md:w-96 w-auto text-white md:text-3xl text-xl">
          <h1 className="my-5 mx-5">
            BROWSE OUR BLOGS<br></br> FOR INSPIRATION
          </h1>
        </div>
      </div>
      <div className="pt-5 pb-10 md:mx-20 lg:mx-40 mx-10 space-y-5 md:space-y-10">
        <h1 className="text-[#333333] flex justify-center text-3xl mt-5">
          BLOGS
        </h1>
        <div className="text-[#333333] flex justify-center text-center md:flex-row flex-col md:divide-x-2 divide-[#333333] space-x-5">
          <a href="/business" className="md:mt-0 mt-3 pl-5">Businesses</a>
          <a href="workers" className="md:pl-5">
            Workers
          </a>
          <a href="/jobs" className="md:pl-5">
            Jobs
          </a>
          <a href="/classifieds" className="md:pl-5">
            Classified
          </a>
          <a href="/community-events" className="md:pl-5">
            Community and Events
          </a>
          <a href="/messaging" className="md:pl-5">
            Messaging
          </a>
        </div>
        <div className='bg-white md:grid grid-cols-2 gap-2 py-10 md:mx-20 text-black'>
          <div className='flex justify-center items-center mx-5'>
            <div className='md:grid grid-row-1 gap-2 '>
              <div className='flex justify-center h-40 w-4/5 md:w-full relative'>
                <Image src="/assets/shane-article.jpg" alt="logo" layout="fill" className="" />
              </div>
              <div className='text-center py-5'>
              <a
                  href=""
                  className="hover:text-black text-[#2B3C96] md:text-xl"
                >
                  Free Advertising! No Strings Attached
                </a>
                <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal mt-4'>
                - By Shane Wallace, CEO There are many great things about my role
                  as the CEO of Classified App. I get to work with an amazing [...]
                </p>
              </div>
              <div className='h-9 sm:w-32 border m-auto border-[#333333] hover:border-[#479DE2] transition-colors duration-300 rounded-md'>
                <button className="h-full w-full transition-colors duration-300 hover:text-[#479DE2] m-auto">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mt-2 mx-5'>
            <div className='grid grid-row-1 gap-3'>
              <div className='flex justify-center h-40 w-4/5 md:w-full relative'>
                <Image src="/assets/12.png" alt="logo" object-fit="cover" fill={true} layout="fill" className=""/>
              </div>
              <div className='text-center py-5'>
              <a
                  href=""
                  className="hover:text-black text-[#2B3C96] md:text-xl"
                >
                  Lessons Learned from 6 Years in Entrepreneur Land
                </a>
                <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal mt-4'>
                Next month marks the 6th anniversary of the Classified App story - an
                amazing journey from a simple idea to a fully functioning,
                revolutionary platform growing stronger by [...]
                </p>
              </div>
              <div className='h-9 sm:w-32 border m-auto border-[#333333] hover:border-[#479DE2] transition-colors duration-300 rounded-md'>
                <button className="h-full w-full transition-colors duration-300 hover:text-[#479DE2] m-auto">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mt-2 mx-5'>
            <div className='grid grid-row-1 gap-3'>
              <div className='flex justify-center h-40 w-4/5 md:w-full relative'>
              <Image src="/assets/mortgAGE.jpg" alt="logo" object-fit="cover" fill={true} layout="fill" className=""/>
              </div>
              <div className='text-center py-5'>
              <a
                  href=""
                  className="hover:text-black text-[#2B3C96] md:text-xl"
                >
                  Big Future for Mortgage Brokers on Classified App
                </a>
                <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal mt-4'>
                The banking Royal Commission has triggered a lot of doom and gloom
                predictions for Australia’s $2 billion mortgage broking industry
                with its recommendation that borrowers [...]
                </p>
              </div>
              <div className='h-9 sm:w-32 border m-auto border-[#333333] hover:border-[#479DE2] transition-colors duration-300 rounded-md'>
                <button className="h-full w-full transition-colors duration-300 hover:text-[#479DE2] m-auto">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mt-2 mx-5'>
            <div className='grid grid-row-1 gap-3'>
              <div className='flex justify-center h-40 w-4/5 md:w-full relative'>
              <Image src="/assets/classified2.jpg" alt="logo" object-fit="cover" fill={true} layout="fill" className=""/>
              </div>
              <div className='text-center py-5'>
              <a
                  href=""
                  className="hover:text-black text-[#2B3C96] md:text-xl"
                >
                From the Fans: 10 reasons why you should use Classified App
                </a>
                <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal mt-4'>
                One of our delighted fans in Romania, Andrada Anitei, recently
                posted an article in LinkedIn and a blog on her website about
                Classified App. We love [...]
                </p>
              </div>
              <div className='h-9 sm:w-32 border m-auto border-[#333333] hover:border-[#479DE2] transition-colors duration-300 rounded-md'>
                <button className="h-full w-full transition-colors duration-300 hover:text-[#479DE2] m-auto">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mt-2 mx-5'>
            <div className='grid grid-row-1 gap-3'>
              <div className='flex justify-center h-40 w-4/5 md:w-full relative'>
              <Image src="/assets/andrada-1.jpg" alt="logo" object-fit="cover" fill={true} layout="fill" className=""/>
              </div>
              <div className='text-center py-5'>
              <a
                  href=""
                  className="hover:text-black text-[#2B3C96] md:text-xl"
                >
                From the Fans: NEW BUSINESS PLATFORM GOING VIRAL!
                </a>
                <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal mt-4'>
                One of our delighted fans in Romania recently posted an article in
                LinkedIn and a blog on her website about Classified App. We love
                it when [...]
                </p>
              </div>
              <div className='h-9 sm:w-32 border m-auto border-[#333333] hover:border-[#479DE2] transition-colors duration-300 rounded-md'>
                <button className="h-full w-full transition-colors duration-300 hover:text-[#479DE2] m-auto">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
