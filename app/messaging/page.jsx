import React from "react";
import { TiTick } from "react-icons/ti";

export default function Messaging() {
  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/messaging_slider.jpg')] md:h-96 h-60">
        <div className="absolute mt-10 md:mt-40 right-10 md:right-20 mx-10 text-[#000000] md:text-5xl text-xl">
          <h1 className="my-3 mx-5 font-bold ">Simple Personal</h1>
          <p className="mx-5 text-4xl">Real Time Messaging</p>
        </div>
      </div>
      <div className="py-5">
        <div className="flex flex-col md:space-y-10 space-y-5 mx-auto md:mx-10 lg:mx-40 md:mb-10">
          <h1 className="flex justify-center text-3xl md:mt-5 text-[#6D6E71]">
            MESSAGING
          </h1>
          <p className="flex justify-center text-center text-[#6D6E71]">
            Classified App is a brilliant way to instantly connect with people
            or groups. Whether it’s personal, professional, your teammates or
            your workmates, free messaging is all part of the Classified App
            service! As a single application that bundles so many previously
            separate functions in one place, it makes sense to also stay put
            when you want to connect. WorkApp messaging is also fully integrated
            with all our other features. Create your first group today and share
            WorkApp with family, friends and all your other contacts to get the
            conversation started!
          </p>
          <div className="border-none rounded-lg bg-[#E5E5E5] md:h-auto h-auto w-auto md:w-full">
            <div className="flex flex-col md:flex-row space-x-20 py-3 px-5">
              <div className="flex flex-col ">
                <h1 className="text-[#2B3C96] text-3xl">Why Classified App</h1>
                <p className="mt-3 text-[#6D6E71]">
                  Free text, audio, video and image sharing with anyone,
                  anywhere!!
                </p>
                <ul className="text-[#6D6E71] my-5 space-y-2">
                  <li className="flex">
                    <TiTick size={35} className="text-[#2667CC]" />
                    Real time chat with audio, video and image sharing
                  </li>
                  <li className="flex">
                    <TiTick size={35} className="text-[#2667CC]" />
                    Invite contacts from your contact list easily
                  </li>
                  <li className="flex">
                    <TiTick size={35} className="text-[#2667CC]" />
                    Personalise your contacts by giving them nicknames
                  </li>
                  <li className="flex">
                    <TiTick size={35} className="text-[#2667CC]" />
                    Create Groups of contacts, Block Contacts
                  </li>
                  <li className="flex">
                    <TiTick size={35} className="text-[#2667CC]" />
                    Fully integrated with WorkApps rich features
                  </li>
                </ul>
              </div>
              <div className="md:mt-24 mt-10 md:pl-14">
                <p className="text-[#000000] text-xl">Connect with</p>
                <p className="text-[#000000] text-3xl">Classified App</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex md:flex-row flex-col justify-center md:space-x-10 space-y-8 md:space-y-0 ">
              <div className="space-y-3 text-center">
                <p className="md:mb-6 mb-2">
                  <img
                    src="https://corporate.workapp.world/wp-content/uploads/2016/04/message1.jpg"
                    alt="..."
                    className="h-40 w-96"
                  />
                </p>
                <a
                  href=""
                  className="text-[#333333] hover:text-[#479DE2] md:text-xl"
                >
                  WorkApp is an Integrated, Interactive Messaging App too
                </a>
                <p className="text-[#747489] text-center">
                  Workapp Is an Interactive, Integrated Global Messaging App too
                  WorkApp is an application that has been created for use
                  world-wide. The app was designed in Australia and launched in
                  April it has a growing fan [...]
                </p>
                <button className="md:ml-20 border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-[#333333] rounded-lg h-10 w-40">
                  <p className="mx-8 my-2">Read More</p>
                </button>
              </div>
              <div className="space-y-3 lg:space-y-5 text-center">
                <p className="md:mb-6 mb-2">
                  <img
                    src="https://corporate.workapp.world/wp-content/uploads/2016/04/messaging.jpg"
                    alt="..."
                    className="h-40 w-96"
                  />
                </p>
                <a
                  href=""
                  className="text-[#333333] hover:text-[#479DE2] md:text-xl"
                >
                  WorkApp Messaging integrates with Business and Classifieds
                </a>
                <p className="text-[#747489]">
                  WorkApp Messaging Integrates with Business and Classifieds
                  Online instant messaging has become the most efficient and
                  highly preferred method of communication. Since the launch of
                  online messengers and social media apps, no one wants to [...]
                </p>
                <button className="md:ml-40 border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-[#333333] rounded-lg h-10 w-40">
                  <p className="mx-8 my-2">Read More</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
