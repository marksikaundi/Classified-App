import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";
import { BiSolidBriefcase, BiSolidMessageRounded } from "react-icons/bi";
import { GrUserWorker } from "react-icons/gr";
import { SiJoplin } from "react-icons/si";
import {
  PiListMagnifyingGlassFill,
  PiClockClockwiseFill,
} from "react-icons/pi";
import { FaPeopleLine } from "react-icons/fa6";
import { BsCalendar3EventFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto px-4 md:px-8 py-5 bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <ImageCarousel />
      <div className="md:py-8 py-3">
        <h1 className="flex justify-center text-[#333333] md:text-3xl text-base ">
          KEY FEATURES
        </h1>
        <div className="flex flex-row flex-wrap justify-center md:mt-4 mt-2 md:text-xl text-base">
          <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/feature1.png')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center ">
            <p className="flex justify-center md:mt-5 mt-3">
              <BiSolidBriefcase size={60} />
            </p>
            <a href="" className="flex justify-center md:mt-5 mt-3">
              BUSINESSES
            </a>
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
          <div className="flex flex-row flex-wrap justify-center md:mt-4 mt-2">
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
    </main>
  );
}
