import React from "react";

function page() {
  return (
    <div className="min-h-screen mx-auto bg-[#F1F2F2]">
      <div className="flex mx-20 md:mx-40 justify-start py-10">
        <ul className="list-disc text-black">
          <li>
            <a href="/about" className=" text-black hover:text-[#079DE2]">
              About us
            </a>
          </li>
          <li>
            <a href="/blog" className=" text-black hover:text-[#079DE2]">
              Blogs
            </a>
          </li>
          <li>
            <a
              href="/business"
              className=" text-black hover:text-[#079DE2]"
            >
              Businesses
            </a>
          </li>
          <li>
            <a
              href="/classifieds"
              className=" text-black hover:text-[#079DE2]"
            >
              Classifieds
            </a>
          </li>
          <li>
            <a
              href="/community-events"
              className=" text-black hover:text-[#079DE2]"
            >
              Community & Events
            </a>
          </li>
          <li>
            <a
              href="/contact-us"
              className=" text-black hover:text-[#079DE2]"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a href="/faqs" className=" text-black hover:text-[#079DE2]">
              FAQs
            </a>
          </li>
          <li>
            <a href="/" className=" text-black hover:text-[#079DE2]">
              Home
            </a>
          </li>
          <li>
            <a href="" className=" text-black hover:text-[#079DE2]">
              How Classified App works
            </a>
          </li>
          <li>
            <a href="/jobs" className=" text-black hover:text-[#079DE2]">
              Jobs
            </a>
          </li>
          <li>
            <a
              href="/messaging"
              className=" text-black hover:text-[#079DE2]"
            >
              Messaging
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              className=" text-black hover:text-[#079DE2]"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms-conditions"
              className=" text-black hover:text-[#079DE2]"
            >
              Terms & Conditions
            </a>
          </li>
          <li>
            <a
              href="/whats-fresh"
              className=" text-black hover:text-[#079DE2]"
            >
              What's Fresh
            </a>
          </li>
          <li>
            <a href="/workers" className=" text-black hover:text-[#079DE2]">
              Workers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
