import React from "react";
import Image from "next/image";

export default function Classified() {
  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('/assets/classified_bg.jpg')] bg-cover md:h-96 h-60">
        <div className="absolute mt-14 md:right-20 bg-gray-500 border-none bg-opacity-50 md:h-40 h-auto md:w-96 w-auto text-white">
          <h1 className="my-5 mx-5">
            BUY, SELL,<br></br> RENT or SWAP
          </h1>
        </div>
      </div>
      <div className="flex flex-col space-y-3 justify-center py-10 md:mx-40 text-center">
        <h1 className="flex justify-center text-black">
          CLASSIFIEDS
        </h1>
        <p className="text-black">
          Buying, selling or renting? WorkApp is a free and effective
          classifieds service that can put your ad at the top of the search
          results. Our custom built search engine uses refresh technology to
          show you the latest and most relevant items for sale. We instantly
          connect buyers and sellers in a one-stop online shop that charges no
          commissions or asks you to pay for the privilege of being seen. Start
          sharing WorkApp with your family, friends and customers today and open
          the door to fast, free and fresh classifieds!
        </p>
      </div>
      <div className="bg-[#F4F5F7] py-20 text-black text-center">
        <div className="flex flex-col md:flex-row justify-center space-x-8 space-y-5 md:space-y-0 md:mx-40 mx-10">
          <div >
            WorkApp creates a level playing field for buyers. Search by
            distance, price or the freshest posts. When you find something you
            need, message the seller and start chatting!
          </div>
          <div>
            Sell, swap or give away anything on WorkApp for free and never pay
            commission. List your items, upload plenty of photos and stand by!
          </div>
          <div>
            Rent your home, apartment or anything that is in demand. Charge by
            the hour, day, week, month or year. Spend just 10 seconds a day to
            refresh your posts.
          </div>
        </div>
      </div>
      <div className="py-5 md:mx-40 mx-10">
        <div className="flex md:flex-row flex-col justify-center md:space-x-10 space-y-5 md:space-y-0 md:my-10 text-black">
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
              From the Fans: 10 reasons why you should use WorkApp
            </a>
            <p>
              One of our delighted fans in Romania, Andrada Anitei, recently
              posted an article in LinkedIn and a blog on her website about
              WorkApp. We love it when people around the globe get real value
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
            <p>
              Media mogul Rupert Murdoch once described the newspaper
              classifieds as “rivers of gold” because of how much revenue that
              flowed into big media company’s coffers. Well how times have
              changed! Newspaper classifieds have been easily overtaken by
              Online Classified Advertising and the gold is now flowing in a few
              more directions. But despite the disruption, [...]
            </p>
            <button className="border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] rounded-lg h-10 w-40">
              <p className="mx-8 my-2">Read More</p>
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center md:space-x-20 space-y-5 md:space-y-0 md:my-10 my-5 text-black">
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
              trend of digital advertisement. With each passing day, businesses,
              organizations and brands are relying less on traditional print
              adverts and are increasingly shifting towards digital adverts to
              attract their audience from [...]
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
              className="hover:text-black text-[#2B3C96] md:text-xl "
            >
              Free Classifieds simplified on WorkApp
            </a>
            <p>
              Free Classifieds simplified on WorkApp Globally Not so long ago,
              if you had wanted to buy used (or new) goods such as a car, TV,
              lounge suite etc, you would look at the Classifieds section of
              your local newspaper or the community noticeboard at your local
              shopping centre. The same process applied if you wanted [...]
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
