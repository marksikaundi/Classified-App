"use client";
import React, { useState, useEffect } from "react";
import Links from "./components/Links";
import Panel from "./components/Panel";
import ImageCarousel from "./components/ImageCarousel";
import { BiSolidBriefcase, BiSolidMessageRounded } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { SiJoplin } from "react-icons/si";
import {
  PiListMagnifyingGlassFill,
  PiClockClockwiseFill,
  PiDevicesFill,
} from "react-icons/pi";
import { FaPeopleLine } from "react-icons/fa6";
import { BsCalendar3EventFill } from "react-icons/bs";
import { FaRecycle, FaCoins } from "react-icons/fa";
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: `“I was looking for a casual job as a cleaner for a few months when a friend told me to create a Worker Profile on WorkApp. I did as he suggested and since it was free, I had nothing to lose. Within days, I received an enquiry through WorkApp Messaging and got the job I was looking for.”`,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: `“I posted a Job Vacancy on WorkApp for a bike technician and had an enquiry through WorkApp Messaging – the same day.
    Found a great worker and very happy with the result. WorkApp worked awesomely for me!
    Next is to use WorkApp to sell my bikes. Thanks WorkApp.”`,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <ImageCarousel />
      <div className="md:py-8 py-3 ">
        <h1 className="flex justify-center text-[#333333] md:text-3xl text-base ">
          KEY FEATURES
        </h1>
        <div className="flex flex-row flex-wrap justify-center md:mt-4 mt-2 md:text-xl text-base">
          <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature1.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center ">
            <p className="flex justify-center md:mt-5 mt-3">
              <BiSolidBriefcase size={60} />
            </p>
            <span className="flex justify-center md:mt-5 mt-3">
            <Links
              url="/businesses"
              text="BUSINESSES"
            />
            </span>
          </div>
          <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature2.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
            <p className="flex justify-center md:mt-5 mt-3 ">
              <GrUserWorker size={60} />
            </p>
            <a href="" className="flex justify-center md:mt-5 mt-3">
              WORKERS
            </a>
          </div>
          <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature3.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
            <p className="flex justify-center md:mt-5 mt-3 ">
              <SiJoplin size={56} />
            </p>
            <a href="" className="flex justify-center md:mt-5 mt-3">
              JOBS
            </a>
          </div>
          <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature4.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
            <p className="flex justify-center md:mt-5 mt-3 ">
              <PiListMagnifyingGlassFill size={60} />
            </p>
            <a href="" className="flex justify-center md:mt-5 mt-3">
              CLASSIFIEDS
            </a>
          </div>
          <div className="flex flex-row flex-wrap justify-center lg:mt-0 md:mt-4 mt-2">
            <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature6.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center ">
              <p className="flex justify-center md:mt-5 mt-3">
                <FaPeopleLine size={60} />
              </p>
              <a href="" className="flex justify-center md:mt-5 mt-3">
                COMMUNITY
              </a>
            </div>
            <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature7.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
              <p className="flex justify-center md:mt-5 mt-3 ">
                <BsCalendar3EventFill size={54} />
              </p>
              <a href="" className="flex justify-center md:mt-5 mt-3">
                EVENTS
              </a>
            </div>
            <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature8.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
              <p className="flex justify-center md:mt-5 mt-3 ">
                <BiSolidMessageRounded size={60} />
              </p>
              <a href="" className="flex justify-center md:mt-5 mt-3">
                MESSAGING
              </a>
            </div>
            <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2017/04/Whats-Fresh.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center">
              <p className="flex justify-center md:mt-5 mt-3 ">
                <PiClockClockwiseFill size={60} />
              </p>
              <a href="" className="flex justify-center md:mt-5 mt-3">
                WHAT&apos;S FRESH
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2017/08/workapp_bg.jpg')] md:py-5 py-3">
        <h1 className="flex justify-center md:text-2xl text-base">
          WHY CLASSIFIED APP
        </h1>
        <p className="flex justify-center text-center md:mt-2">
          WorkApp combines the most commonly used App functions<br></br>
          into one simple and free application for businesses, individuals and
          community.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap justify-center md:py-5 py-3 mx-10 md:mx-3 text-sm md:text-base">
          <div className="flex-row border-none justify-center bg-gray-400 bg-opacity-25 rounded-lg py-3 md:h-60 h-auto md:w-80 w-auto mt-3 ml-6">
            <p className="z-0 md:mt-3 mt-1 md:ml-24 ml-20 bg-[#E3E3E3] text-[#6D6E71] text-center border-8 border-[#079DE2] rounded-full md:h-28 h-24 md:w-28 w-24">
              <PiDevicesFill size={80} className="md:m-2" />
            </p>
            <p className="mx-3 md:mx-2">
              WorkApp eliminates the use of multiple apps and platforms.
              Everything you need is in one place and on all your devices.
            </p>
          </div>
          <div className="flex-row border-none justify-center bg-gray-400 bg-opacity-25 rounded-lg py-3 md:h-60 h-auto md:w-80 w-auto mt-3 ml-6 lg:ml-10">
            <p className="z-0 md:mt-3 mt-1 md:ml-24 ml-20 bg-[#E3E3E3] text-[#6D6E71] text-center border-8 border-[#079DE2] rounded-full md:h-28 h-24 md:w-28 w-24">
              <FaRecycle size={60} className="m-4" />
            </p>
            <p className="mx-3 md:mx-2">
              Whether you are a worker or business, buying or selling,
              organising an event, or sending a message, WorkApp is the answer.
            </p>
          </div>
          <div className="flex-row border-none justify-center bg-gray-400 bg-opacity-25 rounded-lg py-3 md:h-60 h-auto md:w-80 w-auto mt-3 ml-6 lg:ml-10">
            <p className="z-0 md:mt-3 mt-1 ml-24 bg-[#E3E3E3] text-[#6D6E71] text-center border-8 border-[#079DE2] rounded-full md:h-28 h-24 md:w-28 w-24">
              <FaCoins size={60} className="m-4" />
            </p>
            <p className="mx-3 md:mx-2">
              WorkApp has no upfront or hidden fees. You keep 100% of the
              proceeds of any sale you make using our platform.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/testimonials.jpg')] md:py-5 py-3">
        <h1 className="flex justify-center text-[#333333] md:text-3xl text-xl">
          TESTIMONIALS
        </h1>
        <div className="flex flex-col items-center py-10">
          <div className="relative overflow-hidden md:w-1/2 w-auto md:h-80 h-auto rounded-lg bg-[#ffffff] bg-opacity-25 shadow-md">
            <p className="text-gray-600 flex justify-center lg:mt-14 md:mt-10 mt-5 md:text-base lg:text-xl italic mx-3">
              {testimonials[currentSlide].text}
            </p>
            <div className="my-5 md:my-10 flex justify-center">
              <p className="text-blue-800 md:mt-5 font-semibold">
                {testimonials[currentSlide].name}
              </p>
            </div>
            <div className="absolute bottom-0 w-full flex justify-center md:mb-5 lg:mb-10 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 ">
        <h1 className="flex justify-center text-[#333333] md:text-3xl text-base">
          CLASSIFIED APP WORKS FOR YOU
        </h1>
        <div className="flex justify-center mt-5">
          <iframe
            className="w-1/2 md:h-96 aspect-auto"
            src={`https://www.youtube.com/embed/DHtLqWYu4Wo`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/questions_bg.jpg')] md:py-5 py-3">
        <h1 className="flex justify-center text-[#2B3C96] md:text-3xl text-base">
          QUESTIONS?
        </h1>
        <div className="flex justify-center items-center py-5">
          <div className="md:w-3/5 w-auto ">
            <Panel title="What is Classified App?">
              <p>
                WorkApp is an integrated App designed for iOS, Android and Web
                Browsers that combines a<br></br> number of features to make it
                easier and simpler for you to conduct business, communicate with
                <br></br> people and actively engage with your local community.
                WorkApp works for Businesses,<br></br> Communities and
                individuals alike and there are no fees, charges or commissions
                payable. You<br></br> will have to see WorkApp to appreciate the
                many benefits you can derive from this unique platform.
              </p>
            </Panel>
            <Panel title="Why is it different from other apps out there?">
              <p>
                WorkApp is the only App globally that integrates a number of
                functions into a single App.<br></br>Businesses can sell
                product, advertise their business, list job vacancies and find
                workers - all for<br></br> free. Individuals can find vacancies,
                promote themselves as a worker looking for work, buy, swap,
                <br></br> sell new or used goods. Community organisations can
                promote their services and seek<br></br> volunteers or club
                members, promote events and sell tickets. Overlaying all these
                rich features is<br></br> a fully functional messaging platform
                where you can chat with friends and family, send audio,<br></br>{" "}
                video and photos. No other App currently does all that WorkApp
                offers.
              </p>
            </Panel>
            <Panel title="Who can use Classified App?">
              <p>
                WorkApp is available now for download Globally from App Store
                and Google’s Play Store.<br></br> Alternatively you get started
                with the web version. WorkApp is a single App with features for
                <br></br> businesses and individuals alike. Enjoy using your
                WorkApp.
              </p>
            </Panel>
          </div>
        </div>
      </div>
    </main>
  );
}
