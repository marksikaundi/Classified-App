import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('/assets/blog.jpg')] bg-cover bg-center bg-no-repeat md:h-96 h-60">
        <div className="absolute mt-14 hidden md:flex md:right-20 bg-gray-500 border-none bg-opacity-50 md:h-40 h-20 md:w-96 w-auto text-white">
          <h1 className="my-5 mx-5">
            BROWSE OUR BLOGS<br></br> FOR INSPIRATION
          </h1>
        </div>
      </div>
      <div className="pt-5 pb-10 md:mx-10 lg:mx-40 mx-5 space-y-5 md:space-y-10">
        <h1 className="text-black flex justify-center mt-5">
          BLOGS
        </h1>
        <div className="text-black flex justify-center text-center md:flex-row flex-col md:divide-x-2 divide-[#333333] space-x-5">
          <a href="/business" className="md:mt-0 mt-3 pl-5">Businesses</a>
          <a href="/workers" className="md:pl-5">
            Workers
          </a>
          <a href="/jobs" className="md:pl-5">
            Jobs
          </a>
          <a href="Classified" className="md:pl-5">
            Classified
          </a>
          <a href="" className="md:pl-5">
            Community and Events
          </a>
          <a href="/messaging" className="md:pl-5">
            Messaging
          </a>
        </div>
        <div className="grid flex-row md:grid-cols-2 justify-center space-y-20 md:space-y-0 md:my-10 text-black">
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/shane-article.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-[#333333] text-[#2B3C96] md:text-xl"
            >
              Free Advertising! No Strings Attached
            </a>
            <p className="text-center">
              - By Shane Wallace, CEO There are many great things about my role
              as the CEO of Classified App. I get to work with an amazing [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/12.png"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Lessons Learned from 6 Years in Entrepreneur Land
            </a>
            <p>
              Next month marks the 6th anniversary of the Classified App story - an
              amazing journey from a simple idea to a fully functioning,
              revolutionary platform growing stronger by [...]
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
                src="/assets/mortgAGE.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Big Future for Mortgage Brokers on Classified App
            </a>
            <p className="text-center">
              The banking Royal Commission has triggered a lot of doom and gloom
              predictions for Australia’s $2 billion mortgage broking industry
              with its recommendation that borrowers [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-3 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/classified2.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              From the Fans: 10 reasons why you should use Classified App
            </a>
            <p>
              One of our delighted fans in Romania, Andrada Anitei, recently
              posted an article in LinkedIn and a blog on her website about
              Classified App. We love [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
        </div>
        <div className="grid flex-row md:grid-cols-2 justify-center md:space-x-20 space-y-5 md:space-y-0 md:my-10 text-black">
          <div className="space-y-3 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/andrada-1.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              From the Fans: NEW BUSINESS PLATFORM GOING VIRAL!
            </a>
            <p className="text-center">
              One of our delighted fans in Romania recently posted an article in
              LinkedIn and a blog on her website about Classified App. We love
              it when [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-3 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/shane-2-feature.png"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Why Smart Event Organisers Use Classified App
            </a>
            <p>
              Life is so busy for most people these days that working out
              exactly how best to spend your precious spare time can be a
              challenge [...]
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
                src="/assets/shane-1-feature.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Keep All The Profits From Your Hard Work
            </a>
            <p className="text-center">
              Media mogul Rupert Murdoch once described the newspaper
              classifieds as “rivers of gold” because of how much revenue that
              flowed into big media company’s coffers. [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/classified1.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Looking for Candidates just got exciting
            </a>
            <p>
              Looking for candidates just got exciting When it comes to finding
              the right staff, Recruitment Agencies play a prominent role in
              identifying, interviewing and shortlisting [...]
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
                src="/assets/business3.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Promote Your Business
            </a>
            <p className="text-center">
              Promote your Business either locally, or globally, or both on
              Classified App Whether you are a startup or a small business, you
              must be looking for [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/business2.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Classified App - Your Integrated Business Solution
            </a>
            <p>
              Classified App - Your Integrated Business Solution Scrolling
              through our phones we often realize how many apps we own and how
              many we must update and [...]
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
                src="/assets/charity_fund.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Community Organisations and Volunteers
            </a>
            <p>
              Community Organizations and Volunteers Do you run a not for profit
              organisation, sports club or other community organisation and need
              volunteers who can be trusted [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
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
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Classified App for Community and Events
            </a>
            <p>
              Classified App Is the platform of choice for Community Groups and
              Events Classified App is an application that has been created for
              worldwide use, and the concept [...]
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
                src="/assets/message1.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
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
            <p>
              Classified App Is an Interactive, Integrated Global Messaging App
              too Classified App is an application that has been created for use
              world-wide. The app was designed in [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
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
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Free Classifieds simplified on Classified App
            </a>
            <p>
              Free Classifieds simplified on Classified App Globally Not so long
              ago, if you had wanted to buy used (or new) goods such as a car,
              TV, [...]
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
                src="/assets/job_bg.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Filling Job Vacancies with Classified App
            </a>
            <p>
              Filling Job Vacancies with Classified App Getting a job in the
              market today is much more difficult than it used to be. The
              growing competition, the [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/messaging.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
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
              Online instant messaging has become the most efficient and highly
              preferred method of communication. Since the launch of [...]
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
                src="/assets/worker2.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Creating Multiple Worker Profiles Using Classified App
            </a>
            <p>
              Create Multiple Worker Profiles to Separate Your Skills and
              Vocations Are you having problems convincing employers that you
              are the right candidate for the job? [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/classified1.jpg"
                alt="..."
                className="h-52 md:w-full w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl"
            >
              Classified App Revolutionises Classified advertising online
            </a>
            <p>
              The Evolution of Classifieds from Print to Digital If there’s one
              trend that has really caught up in the recent times, it is the
              trend [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-start space-y-5 md:space-y-0 md:my-10 text-black">
          <div className="space-y-5 text-center">
            <p className="md:mb-8 mb-2">
              <Image
                src="/assets/worker1.jpg"
                alt="..."
                className="h-52 md:w-1/2 w-auto"
                height={40}
                width={300}
              />
            </p>
            <a
              href=""
              className="hover:text-black text-[#2B3C96] md:text-xl flex justify-start"
            >
              Go on Holidays - Turn off your Worker Profile
            </a>
            <p className="flex justify-start md:w-1/2">
              Going on Holidays - Putting your Worker Profile on Hold Are you
              planning a vacation in the Bahamas? Is it the end of a school
              [...]
            </p>
            <button className="flex justify-center md:ml-20 border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
