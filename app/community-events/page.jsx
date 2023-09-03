import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="min-h-screen mx-auto bg-[#ffffff]">
      <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/events_bg.jpg')] md:h-96 h-60 flex justify-start bg-cover bg-center">
        <div className="absolute flex justify-center items-center md:mt-14 mt-5 md:ml-40 bg-gray-500 border-none bg-opacity-50 md:h-52 h-auto md:w-96 w-auto text-white">
          <h1 className="my-5 mx-5">
            PROMOTE AND JOIN<br></br> COMMUNITY EVENTS
          </h1>
        </div>
      </div>

      <div className="h-auto flex justify-center py-5 bg-white">
        <div className="text-black">
          <h1 className="text-center my-5">COMMUNITY AND EVENTS</h1>
          <p className="md:w-2/4 lg:w-4/5 text-center m-auto mb-8 leading-normal">
            Classified App is a free community creation and events platform like no
            other. Use the App to create an individual or community profile to
            showcase yourself or your organization. List your free or paid event
            on Classified App, complete with ticket information and optional PayPal
            purchasing. Utilise Classified App unique groups function to share your
            event with a select group of contacts. Search for local
            entertainment, community, family and sporting events. Volunteer your
            services or search Classified App to connect with volunteers for your
            community or cause.
          </p>
        </div>
      </div>
      <div className="h-auto flex justify-center py-4 bg-[#F4F5F7]">
        <div className="text-black w-screen m-auto ">
          <div>
            <h1 className="text-center">COMMUNITY AND EVENTS</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-6 content-center justify-items-center font-bold text-xl items-center w-auto">
            <div className=" h-32 w-48 flex flex-wrap text-center items-center justify-center">
              <div className=" content-center">
                <h2>Fund Raising</h2>
              </div>
            </div>
            <div className="h-32 w-48 flex flex-wrap text-center items-center justify-center">
              <h2>Concerts & Tour Dates</h2>
            </div>
            <div className="h-32 w-48 flex flex-wrap text-center items-center justify-center">
              <h2>Conferences & Tradeshows</h2>
            </div>
            <div className="h-32 w-48 flex flex-wrap text-center items-center justify-center">
              <h2>Festivals</h2>
            </div>
            <div className="h-32 w-48 flex flex-wrap text-center items-center justify-center">
              <h2>Food and Wine</h2>
            </div>
            <div className="h-32 w-48 flex flex-wrap text-center items-center justify-center">
              <h2>Kids and Family</h2>
            </div>
            <div className="h-32 w-48 flex flex-wrap text-center items-center justify-center">
              <h2>Nightlife and Singles</h2>
            </div>
            <div className="h-32 w-48 flex flex-wrap text-center items-center justify-center">
              <h2>Performing Arts</h2>
            </div>
            <div className="h-32 w-48 flex flex-wrap text-center items-center justify-center">
              <h2>Sporting Clubs</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 md:mx-28 mx-10">
       <h1 className="flex justify-center text-center text-black">LET THE WORLD KNOW ABOUT YOUR EVENT</h1>
        <div className="flex md:flex-row flex-col justify-center md:space-x-20 space-y-5 md:space-y-0 md:my-10 my-5 text-black">
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/eve2.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a href="" className="hover:text-black text-[#2B3C96] md:text-xl">
            Classified App for Community and Events
            </a>
            <p>
            Classified App Is the platform of choice for Community Groups and Events
            Classified App is an application that has been created for worldwide use,
              and the concept behind the development was to create a unique way
              for [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/charity_fund.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a href="" className="hover:text-black text-[#2B3C96] md:text-xl ">
              Community Organisations and Volunteers
            </a>
            <p>
              Community Organizations and Volunteers Do you run a not for profit
              organisation, sports club or other community organisation and need
              volunteers who can be trusted with the responsibility of fund
              raising or representing your organisation [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
        </div>
        <div className="grid flex-row md:grid-cols-2 justify-center md:space-x-20 space-y-5 md:space-y-0 md:my-10 text-black">
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/classified2.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a href="" className="hover:text-black text-[#2B3C96] md:text-xl">
              From the Fans: 10 reasons why you should use Classified App
            </a>
            <p>
              One of our delighted fans in Romania, Andrada Anitei, recently
              posted an article in LinkedIn and a blog on her website about
              Classified App. We love it when people around the globe get real value
              from our platform. You can check their website out here. You have
              probably seen me promoting AND using this new-edge platform for
              almost [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/shane-2-feature.png"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a href="" className="hover:text-black text-[#2B3C96] md:text-xl">
              Why Smart Event Organisers Use Classified App
            </a>
            <p>
              Life is so busy for most people these days that working out
              exactly how best to spend your precious spare time can be a
              challenge in itself. There is never any shortage of concerts,
              festivals, [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
