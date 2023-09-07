import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";

export default function Messaging() {
  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff] text-black">
      <div className="bg-[url('/assets/messaging_slider.jpg')] bg-cover md:h-96 h-60">
        <div className="absolute mt-10 md:mt-40 right-10 md:right-20 mx-10">
          <h1 className="my-3 mx-5 font-bold ">Simple Personal</h1>
          <h1 className="mx-5">Real Time Messaging</h1>
        </div>
      </div>
      <div className="py-5">
        <div className="flex flex-col md:space-y-10 space-y-5 mx-auto md:mx-10 lg:mx-40 md:mb-10">
          <h1 className="flex justify-center md:mt-5">
            MESSAGING
          </h1>
          <p className="flex justify-center text-center">
            ClassifiedApp is a brilliant way to instantly connect with people
            or groups. Whether it’s personal, professional, your teammates or
            your workmates, free messaging is all part of the Classified App
            service! As a single application that bundles so many previously
            separate functions in one place, it makes sense to also stay put
            when you want to connect. Classified App messaging is also fully integrated
            with all our other features. Create your first group today and share
            Classified App with family, friends and all your other contacts to get the
            conversation started!
          </p>
          <div className="border-none rounded-lg bg-[#E5E5E5] md:h-auto h-auto w-auto md:w-full">
            <div className="flex flex-col md:flex-row space-x-20 py-3 px-5">
              <div className="flex flex-col ">
                <h1 className="text-[#2B3C96]">Why Classified App</h1>
                <p className="mt-3 ">
                  Free text, audio, video and image sharing with anyone,
                  anywhere!!
                </p>
                <ul className=" my-5 space-y-2">
                  <li className="flex">
                    <TiTick size={35} className="text-[#2B3C96]" />
                    Real time chat with audio, video and image sharing
                  </li>
                  <li className="flex">
                    <TiTick size={35} className="text-[#2B3C96]" />
                    Invite contacts from your contact list easily
                  </li>
                  <li className="flex">
                    <TiTick size={35} className="text-[#2B3C96]" />
                    Personalise your contacts by giving them nicknames
                  </li>
                  <li className="flex">
                    <TiTick size={35} className="text-[#2B3C96]" />
                    Create Groups of contacts, Block Contacts
                  </li>
                  <li className="flex">
                    <TiTick size={35} className="text-[#2B3C96]" />
                    Fully integrated with Classified App rich features
                  </li>
                </ul>
              </div>
              <div className="md:mt-24 mt-10 md:pl-14">
                <h2>Connect with</h2>
                <h1>Classified App</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex md:flex-row flex-col justify-center md:space-x-10 space-y-8 md:space-y-0 ">
              <div className="space-y-3 text-center">
                <p className="md:mb-6 mb-2">
                  <Image
                    src="/assets/message1.jpg"
                    alt="..."
                    className="h-52 w-auto md:w-full"
                    height={40}
                    width={300}
                  />
                </p>
                <a
                  href=""
                  className="hover:text-black text-[#2B3C96] md:text-xl"
                >
                  Classified App is an Integrated, Interactive Messaging App too
                </a>
                <p className="text-center">
                  Classified App Is an Interactive, Integrated Global Messaging App too
                  Classified App is an application that has been created for use
                  world-wide. The app was designed in Australia and launched in
                  April it has a growing fan [...]
                </p>
                <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
                  <p className="mx-8 my-2">Read More</p>
                </button>
              </div>
              <div className="space-y-3 lg:space-y-5 text-center">
                <p className="md:mb-6 mb-2">
                  <Image
                    src="/assets/messaging.jpg"
                    alt="..."
                    className="h-52 w-auto md:w-full"
                    height={40}
                    width={300}
                  />
                </p>
                <a
                  href=""
                  className="hover:text-black text-[#2B3C96] md:text-xl"
                >
                  Classified App Messaging integrates with Business and Classifieds
                </a>
                <p>
                  Classified App Messaging Integrates with Business and Classifieds
                  Online instant messaging has become the most efficient and
                  highly preferred method of communication. Since the launch of
                  online messengers and social media apps, no one wants to [...]
                </p>
                <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
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
