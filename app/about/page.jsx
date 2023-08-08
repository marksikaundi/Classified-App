import React from "react";
import Links from "../components/Links";
import Panel from "./components/Panel";

export default function Businesses() {
  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="md:py-8 py-3 ">
        <h1 className="flex justify-center text-[#333333] md:text-3xl text-base ">
          ABOUT US
        </h1>
        <div className="flex flex-row flex-wrap justify-center md:mt-4 mt-2 md:text-xl text-base">
          <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/about-us.jpg')] border rounded-lg h-40 w-60 md:mr-5 mr-3 md:mb-3 mb-2 text-center ">
            <p className="flex justify-center md:mt-5 mt-3">
              WorkApp is an exciting new way to connect people for a wide range
              of everyday personal and professional activities all in one place.
              Finally, a single application bundles many common functions you
              may already use into one multi-device platform. And most
              importantly, WorkApp innovative refresh technology puts the power
              to succeed in your hands. Thousands of work hours have gone into
              the creation of WorkApp so it can go to work for you!
            </p>
            <span className="flex justify-center md:mt-5 mt-3">
              <Links url="/businesses" text="BUSINESSES" />
            </span>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>

        <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/questions_bg.jpg')] md:py-5 py-3">
          <h1 className="flex justify-center text-[#2B3C96] md:text-3xl text-base">
            QUESTIONS?
          </h1>
          <div className="flex justify-center items-center py-5">
            <div className="md:w-3/5 w-auto ">
              <Panel title="What is Classified App?">
                <p>
                  WorkApp is an integrated App designed for iOS, Android and Web
                  Browsers that combines a<br></br> number of features to make
                  it easier and simpler for you to conduct business, communicate
                  with
                  <br></br> people and actively engage with your local
                  community. WorkApp works for Businesses,<br></br> Communities
                  and individuals alike and there are no fees, charges or
                  commissions payable. You<br></br> will have to see WorkApp to
                  appreciate the many benefits you can derive from this unique
                  platform.
                </p>
              </Panel>
              <Panel title="Why is it different from other apps out there?">
                <p>
                  WorkApp is the only App globally that integrates a number of
                  functions into a single App.<br></br>Businesses can sell
                  product, advertise their business, list job vacancies and find
                  workers - all for<br></br> free. Individuals can find
                  vacancies, promote themselves as a worker looking for work,
                  buy, swap,
                  <br></br> sell new or used goods. Community organisations can
                  promote their services and seek<br></br> volunteers or club
                  members, promote events and sell tickets. Overlaying all these
                  rich features is<br></br> a fully functional messaging
                  platform where you can chat with friends and family, send
                  audio,<br></br> video and photos. No other App currently does
                  all that WorkApp offers.
                </p>
              </Panel>
              <Panel title="When will Classified App be launched?">
                <p>
                  WorkApp is available now for download from App Store and
                  Google Play Store. Or better yet, get started now with the
                  web version. You can move seamlessly between devices and all
                  your information and messages will follow you. Please see the
                  top of the screen for links to the Stores and Web App. Enjoy
                  using your WorkApp.
                </p>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
