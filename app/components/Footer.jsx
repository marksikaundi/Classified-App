import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoTwitter } from "react-icons/bi";
import { TiSocialInstagram } from "react-icons/ti";

function Footer() {
  return (
    <div className="h-auto relative sm:bg-[#2b3c96] bg-[url('https://pcdn.piiojs.com/i/xp3dch/vw,1536,vh,0,r,1,pr,1.3,o,wp/www.workapp.world%2Fv3_assets%2Fimgs%2Ffooter_bg101.jpg')] bg-no-repeat bg-cover">
      <div className="grid grid-flow-row divide-y justify-center space-y-3">
        <div className="flex md:mt-10 mt-5 space-x-3 text-[#FFFFFF]">
          <div className="border-2 rounded-full h-10 w-10">
            <TiSocialFacebook size={25} />
          </div>
          <div className="border-2 rounded-full h-10 w-10">
            <BiLogoTwitter size={25} />
          </div>
          <div className="border-2 rounded-full h-10 w-10">
            <TiSocialInstagram size={25} />
          </div>
        </div>
        <div></div>
      </div>
      <div className="inline-block md:flex flex-wrap justify-center text-xs md:text-sm lg:text-base md:mt-5 mt-3 md:mb-8 mb-3">
        <ul className="flex flex-row flex-wrap justify-center space-x-3">
        <li><a href="">Home</a></li>
        <li><a href="">Business</a></li>
        <li><a href="">Workers</a></li>
        <li><a href="">Real Estate</a></li>
        <li><a href="">Jobs</a></li>
        <li><a href="">Auto</a></li>
        <li><a href="">Community</a></li>
        <li><a href="">Events</a></li>
        <li><a href="">Classifieds</a></li>
        <li><a href="">Wanted</a></li>
        <li><a href="">RV</a></li>
        <li><a href="">Find People</a></li>
        </ul>
      </div>
      <div className="h-auto bg-[url('https://pcdn.piiojs.com/i/xp3dch/vw,1536,vh,0,r,1,pr,1.3,o,wp/www.workapp.world%2Fv3_assets%2Fimgs%2Ffooter_copyright.jpg')]">
        <div className="flex flex-row flex-wrap justify-center space-y-3 text-xs md:text-sm lg:text-base">
          <div className="inline-block md:mb-2 mb-1 md:mt-3 mt-3 md:mb-3 mb-1 md:ml-10 space-x-3">
            © 2023 ClasifiedApp. All rights reserved.
          </div>
          <div className="inline-block md:mb-2 mb-1 md:mt-3 mt-3 md:mb-3 mb-1 md:mr-10 mr-5 ml-5 space-x-3">
            <a href="">Contact Us</a>
            <a href="">About Us</a>
            <a href="">Corporate Website</a>
            <a href="">FAQs</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms and Conditions</a>
            <a href="">Cookies Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
