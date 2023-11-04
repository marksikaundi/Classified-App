"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import Panel from "../components/Panel";
const testimonials = [
  {
    id: 1,
    name: "Ann, Graceville Bike Shop - Brisbane, Australia",
    text: `“I was looking for a casual job as a cleaner for a few months when a friend informed me to create a Worker Profile on Classified App. I did as he suggested and since it was free, I had nothing to lose. Within days, I received an enquiry through Classified AppMessaging and got the job I was looking for.”`,
    Image: "/assets/about.jpg",
  },
  {
    id: 2,
    name: "Mikey, Tattoos at Mates Rates - Gold Coast, Australia",
    text: `“I downloaded Classified App today and created my business profile, complete with portfolio of my work . Within five hours I received an enquiry and my first tattoo client from Classified App. Since Classified App doesn’t charge any fees or commissions, it didn’t cost me a cent to make money today. Thank you WorkApp.”`,
    Image: "/assets/kingoo.png",
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen mx-auto">
      <div className="bg-[url('/assets/about-us.jpg')] md:h-96 h-60 flex justify-start bg-cover bg-center">
        <div className="absolute flex justify-center items-center md:mt-14 mt-5 md:ml-40 bg-gray-500 border-none bg-opacity-50 md:h-52 h-20 md:w-96 w-auto text-white">
          <h1 className="my-5 mx-5">
            BASED IN BRISBANE<br></br> AUSTRALIA
          </h1>
        </div>
      </div>
      <div className="flex justify-center py-5 bg-white md:h-auto">
        <div className="grid grid-rows-1 text-black w-4/5 items-center">
          <h1 className="text-center">ABOUT US</h1>
          <p className="md:w-2/4 lg:w-4/5 text-center m-auto mb-8 leading-normal">
            Classified App is an exciting new way to connect people for a wide
            range of everyday personal <br />
            and professional activities - all in one place. Finally, a single
            application bundles many common functions <br />
            you may already use into one multi-device platform. And most
            importantly, Classified App innovative ‘refresh’ technology puts the
            power to succeed in your hands. <br />
            Thousands of work hours have gone into the creation of Classified
            App so it can go to work for you! <br />
          </p>
        </div>
      </div>
      <div className="flex justify-center md:h-1/2">
        <div className="text-black bg-slate-200 items-center md:grid grid-cols-2 gap-2">
          <div className="text-center py-5 mx-5">
            <h1 className="text-black mb-8">OUR MISSION</h1>
            <p className="md:w-2/4 lg:w-4/5 text-center m-auto leading-normal">
              We want to connect people for work, business and community needs
              on a truly level playing field. Classified App rewards genuine
              effort by individuals and business owners. It takes the power to
              influence search away from those who can afford to pay and gives
              everyone an equal opportunity to rise to the top of search
              results.
            </p>
          </div>
          <div className="text-black text-center py-5 mx-5">
            <h1 className="mb-8">OUR VISION</h1>
            <p className="md:w-2/4 lg:w-4/5 text-center m-auto leading-normal">
              The Classified App vision is to simplify and consolidate your use
              of mobile apps so you can focus on growing your business and
              personal prosperity. We see a future where hardworking people can
              harness all the power of the internet to create communities,
              conduct business and connect with each other – all for free.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 bg-slate-200">
        <div className="relative overflow-hidden md: w-4/5 h-auto rounded-lg bg-[#ffffff] bg-opacity-25 shadow-md">
          <div className="lg:flex">
            <div className="grid grid-cols-1 items-center">
              <div className="justify-center items-center m-auto md:w-1/2">
                <p className="text-gray-700 text-sm flex m-auto text-center lg:mt-2 md:mt-2 mt-2 italic mx-3">
                  {testimonials[currentSlide].text}
                </p>
              </div>
              <div className="my-5 md:my-10 flex w-1/2 m-auto text-center justify-center flex-wrap">
                <p className="text-black md:mt-5 font-semibold">
                  {testimonials[currentSlide].name}
                </p>
              </div>
            </div>
            <div className="bottom-0">
              <div className=" w-auto">
                <Image
                  src={testimonials[currentSlide].Image}
                  alt=""
                  className=" h-60 max-w-lg w-auto mx-auto"
                  height={40}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-0 w-full flex justify-center mt-5 lg:mt-10 space-x-2">
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
      <div className="py-10 bg-slate-300">
        <h1 className="flex justify-center text-black">
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
      <div className="md:py-4 py-3 bg-zinc-200">
        <h1 className="flex justify-center text-[#2B3C96]">QUESTIONS?</h1>
        <div className="flex justify-center items-center py-5">
          <div className="md:w-3/5 w-auto ">
            <Panel title="What is Classified App?">
              <p>
                Classified App is an integrated App designed for iOS, Android
                and Web Browsers that combines a<br></br> number of features to
                make it easier and simpler for you to conduct business,
                communicate with
                <br></br> people and actively engage with your local community.
                Classified App works for Businesses,<br></br> Communities and
                individuals alike and there are no fees, charges or commissions
                payable. You<br></br> will have to see Classified App to
                appreciate the many benefits you can derive from this unique
                platform.
              </p>
            </Panel>
            <Panel title="Why is it different from other apps out there?">
              <p>
                Classified App is the only App globally that integrates a number
                of functions into a single App.<br></br>Businesses can sell
                product, advertise their business, list job vacancies and find
                workers - all for<br></br> free. Individuals can find vacancies,
                promote themselves as a worker looking for work, buy, swap,
                <br></br> sell new or used goods. Community organisations can
                promote their services and seek<br></br> volunteers or club
                members, promote events and sell tickets. Overlaying all these
                rich features is<br></br> a fully functional messaging platform
                where you can chat with friends and family, send audio,<br></br>{" "}
                video and photos. No other App currently does all that
                Classified App offers.
              </p>
            </Panel>
            <Panel title="Who can use Classified App?">
              <p>
                Classified App is available now for download Globally from App
                Store and Google’s Play Store.<br></br> Alternatively you get
                started with the web version. Classified App is a single App
                with features for
                <br></br> businesses and individuals alike. Enjoy using
                Classified App.
              </p>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
