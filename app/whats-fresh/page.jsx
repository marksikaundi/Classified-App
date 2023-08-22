import React from "react";

export default function Whatsfresh() {
  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('/assets/whats_fresh.jpg')] md:h-96 h-60">
        <div className="absolute my-5 md:my-14 left-10 md:left-20 mx-10 bg-gray-500 border-none bg-opacity-50 h-auto md:w-96 w-auto text-white md:text-3xl text-xl">
          <h1 className="my-5 mx-5">
            5 SECONDS TO REFRESH YOUR LISTINGS AND BOOST IN SEARCH RESULTS
          </h1>
        </div>
      </div>
      <div className="flex flex-col py-5">
        <h1 className="flex justify-center text-center text-[#2B3C96] md:text-3xl font-bold text-xl md:py-10 py-5">
          WHAT’S FRESH IN CLASIFIED APP
        </h1>
        <div className="flex justify-center mx-3 flex-col md:flex-row md:space-y-0 space-y-5 md:space-x-10 md:py-5">
          <div className="border-none h-auto w-auto md:w-60 p-3 text-center space-y-3 rounded-lg bg-[#F1F2F2]">
            <h1 className="text-[#6D6E71] text-base font-bold">What is it?</h1>
            <p className="text-[#6D709A]">
              What’s Fresh in Clasified App  showcases listings from across the
              Globe in each users Home page and you have total control of how
              often you feature.
            </p>
          </div>
          <div className="border-none h-auto w-auto md:w-60 p-3 text-center space-y-3 rounded-lg bg-[#F1F2F2]">
            <h1 className="text-[#6D6E71] text-base font-bold">
              How does it work?
            </h1>
            <p className="text-[#6D709A]">
              Once you have created your listing, simply press the ‘Refresh’
              Button next to your listing in your Home page. Wihin 2 minutes you
              will be at the front of What’s Fresh
            </p>
          </div>
          <div className="border-none h-auto w-auto md:w-60 p-3 text-center space-y-3 rounded-lg bg-[#F1F2F2]">
            <h1 className="text-[#6D6E71] text-base font-bold">
              What about search
            </h1>
            <p className="text-[#6D709A]">
              Not only will your listing feature in What’s Fresh, it will also
              be boosted in Search Results. There is no limit to how many times
              you can ‘Refresh’ your listings.
            </p>
          </div>
          <div className="border-none h-auto w-auto md:w-60 p-3 text-center space-y-3 rounded-lg bg-[#F1F2F2]">
            <h1 className="text-[#6D6E71] text-base font-bold">
              What does it cost?
            </h1>
            <p className="text-[#6D709A]">
              It’s FREE. Unlike others who charge to boost your listings,
              Clasified App  is totally free and you have total control of how often
              you boost your listings
            </p>
          </div>
        </div>
        <div className="flex justify-center mx-auto md:mx-20 my-5 md:my-10">
          <div className="border-none rounded-lg w-auto md:w-4/5 h-auto md:h-20 bg-gradient-to-r from-[#0A4C7E] to-[#2E86C7]">
            <p className="text-white text-center md:text-3xl text-base mx-3 my-5">
              NOW THAT’S REFRESHING !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
