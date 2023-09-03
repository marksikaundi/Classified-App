import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoTwitter } from "react-icons/bi";
import { TiSocialInstagram } from "react-icons/ti";

function Footer() {
  return (
    <div className="h-auto relative mx-auto sm:bg-[#2b3c96] bg-[url('https://pcdn.piiojs.com/i/xp3dch/vw,1536,vh,0,r,1,pr,1.3,o,wp/www.workapp.world%2Fv3_assets%2Fimgs%2Ffooter_bg101.jpg')] bg-no-repeat bg-cover">
      <div className="grid grid-flow-row divide-y justify-center space-y-3 text-white">
        <div className="flex md:mt-10 mt-5 space-x-3">
          <div className="border-2 rounded-full h-10 w-10">
            <TiSocialFacebook size={25} className="m-1.5"/>
          </div>
          <div className="border-2 rounded-full h-10 w-10">
            <BiLogoTwitter size={25} className="m-1.5"/>
          </div>
          <div className="border-2 rounded-full h-10 w-10">
            <TiSocialInstagram size={25} className="m-1.5"/>
          </div>
        </div>
      </div>
      <div className="inline-block md:flex flex-wrap justify-center text-xs md:text-sm lg:text-base md:mt-5 mt-3 md:mb-8 mb-3 space-y-3 text-white">
        <ul className="flex flex-row flex-wrap justify-center space-y-3 space-x-3">
          <li className="mt-3">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/business">Business</a>
          </li>
          <li>
            <a href="/workers">Workers</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/community-events">Community</a>
          </li>
          <li>
            <a href="/classifieds">Classifieds</a>
          </li>
          <li>
            <a href="/site-map">Site Map</a>
          </li>
        </ul>
      </div>
      <div className="h-auto bg-[url('https://pcdn.piiojs.com/i/xp3dch/vw,1536,vh,0,r,1,pr,1.3,o,wp/www.workapp.world%2Fv3_assets%2Fimgs%2Ffooter_copyright.jpg')]">
        <div className="flex flex-row flex-wrap justify-center text-white space-y-3 text-xs md:text-sm lg:text-base">
          <div className="inline-block md:mt-3 mt-3 md:mb-3 mb-1 md:ml-10 space-x-3">
            <p>&copy; {new Date().getFullYear()} Classified App. All rights reserved.</p>
          </div>
          <div className="inline-block md:mt-3 mt-3 md:mb-3 mb-2 md:mr-10 mr-5 ml-5 space-y-3 space-x-3">
            <a href="/contact-us">Contact Us</a>
            <a href="/about">About Us</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookies-policy">Cookies Policy</a>
            <a href="/faqs">FAQs</a>
            <a href="/terms-conditions">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
