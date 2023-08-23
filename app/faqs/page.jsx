import React from "react";
import Image from "next/image";
import Panel from "../components/Panel";

export default function Faqs() {
  return (
    <div className="min-h-screen mx-auto bg-cover bg-center bg-no-repeat bg-[#ffffff]">
      <div className="bg-[url('/assets/faq.jpg')] bg-cover bg-center bg-no-repeat md:h-96 h-60"></div>
      <div className="flex flex-row md:mx-20 mx-auto">
        <div className="md:w-4/5 lg:w-1/2 py-14">
          <h1 className="text-[#2B3C96] font-bold border-b-2 flex justify-center md:justify-end">
            QUESTIONS?
          </h1>
          <div className="flex flex-col py-5">
            <Panel title="What is Classified App?">
              <p>
                WorkApp is an integrated App designed for iOS, Android and Web
                Browsers that combines a<br></br> number of features to make it
                easier and simpler for you to conduct business, communicate with
                <br></br> people and actively engage with your local community.
                WorkApp works for Businesses,<br></br> Communities and
                individuals alike and there are no fees, charges or commissions
                payable. You<br></br> will have to see WorkApp to appreciate the
                many benefits you can derive from this unique platform.
                <div className="flex flex-row space-x-3 mt-5 text-[#4D7AB7] underline underline-offset-6">
                  <a href="">Download for Apple</a>
                  <a href="">Download for Android</a>
                  <a href="">Use Classified App on the web</a>
                </div>
              </p>
            </Panel>
            <Panel title="Why is it different from other apps out there?">
              <p>
                WorkApp is the only App globally that integrates a number of
                functions into a single App.<br></br>Businesses can sell
                product, advertise their business, list job vacancies and find
                workers - all for<br></br> free. Individuals can find vacancies,
                promote themselves as a worker looking for work, buy, swap,
                <br></br> sell new or used goods. Community organisations can
                promote their services and seek<br></br> volunteers or club
                members, promote events and sell tickets. Overlaying all these
                rich features is<br></br> a fully functional messaging platform
                where you can chat with friends and family, send audio,<br></br>{" "}
                video and photos. No other App currently does all that WorkApp
                offers.
                <div className="flex flex-row space-x-3 mt-5 text-[#4D7AB7] underline underline-offset-6">
                  <a href="">Download for Apple</a>
                  <a href="">Download for Android</a>
                  <a href="">Use Classified App on the web</a>
                </div>
              </p>
            </Panel>
            <Panel title="Who can use Classified App?">
              <p>
                WorkApp is available now for download Globally from App Store
                and Google’s Play Store.<br></br> Alternatively you get started
                with the web version. WorkApp is a single App with features for
                <br></br> businesses and individuals alike. Enjoy using your
                WorkApp.
                <div className="flex flex-row space-x-3 mt-5 text-[#4D7AB7] underline underline-offset-6">
                  <a href="">Download for Apple</a>
                  <a href="">Download for Android</a>
                  <a href="">Use Classified App on the web</a>
                </div>
              </p>
            </Panel>
            <Panel title="Why do I have to register for WorkApp?">
              <p>
                Registration helps us to manage your data securely. You can
                register with WorkApp using your Facebook login or by providing
                an email and password. Registration is free and only takes a
                minute. Once you are registered, all your data will be available
                on any device you use. There is no cost for registering or using
                WorkApp.
                <div className="flex flex-row space-x-3 mt-5 text-[#4D7AB7] underline underline-offset-6">
                  <a href="">Download for Apple</a>
                  <a href="">Download for Android</a>
                  <a href="">Use Classified App on the web</a>
                </div>
              </p>
            </Panel>
            <Panel title="What is the purpose of the Refresh button?">
              <p>
                The Refresh button is unique to WorkApp and ensures that the
                Workapp User Community are only receiving the most current and
                relevant data for their search. We have all been frustrated with
                search results where we call the person to find that the item is
                no longer available. WorkApp eliminates that problem. Take a
                second to refresh your post and get prioritised on the search
                results. No need to pay to boost your post - simply press the
                Refresh button.
                <div className="flex flex-row space-x-3 mt-5 text-[#4D7AB7] underline underline-offset-6">
                  <a href="">Download for Apple</a>
                  <a href="">Download for Android</a>
                  <a href="">Use Classified App on the web</a>
                </div>
              </p>
            </Panel>
            <Panel title="What is the difference between a Profile and a Post?">
              <p>
                A registered user in WorkApp can have unlimited Profiles and
                Posts. A Profile is a persona or entity that the person wishes
                to promote. This can be one or more businesses or one or more
                Worker Profiles - tailored for each type of work they seek.
                Profiles are used ongoing whilst Posts are classifieds, which
                are temporary and used for listing items for sale, rent or job
                vacancies and events that have an end date.
                <div className="flex flex-row space-x-3 mt-5 text-[#4D7AB7] underline underline-offset-6">
                  <a href="">Download for Apple</a>
                  <a href="">Download for Android</a>
                  <a href="">Use Classified App on the web</a>
                </div>
              </p>
            </Panel>
            <Panel title="When does WorkApp expire my Profiles and Posts?">
              <p>
                Profiles and Posts have varying expiry times depending on the
                type of profile or post. For example, Business and Community
                Profiles expire every 30 days while Job & Event Posts expire on
                the applications closing date or the Event date. All other Posts
                and Profiles expire in 7 days from the date of last Refresh. You
                can refresh all Profiles and Posts as often as you like which
                will boost the listing to the top of search results as well as
                renew it for a further 7 or 30 days depending on the listing
                type.
                <div className="flex flex-row space-x-3 mt-5 text-[#4D7AB7] underline underline-offset-6">
                  <a href="">Download for Apple</a>
                  <a href="">Download for Android</a>
                  <a href="">Use Classified App on the web</a>
                </div>
              </p>
            </Panel>
            <Panel title="Why do I have to specify Payment details?">
              <p>
                WorkApp currently has PayPal integration to make it easier for
                buyers to pay sellers. Other payment gateways will be added in
                future releases. By specifying your preferred payment method in
                Account Settings, the Buyers will know if you accept PayPal and
                choose to pay you accordingly. WorkApp does not charge you any
                fees or commissions and these details are not disclosed to
                anyone except for payment processing purposes.
                <div className="flex flex-row space-x-3 mt-5 text-[#4D7AB7] underline underline-offset-6">
                  <a href="">Download for Apple</a>
                  <a href="">Download for Android</a>
                  <a href="">Use Classified App on the web</a>
                </div>
              </p>
            </Panel>
            <Panel title="Why do I receive notifications at 6am and 12pm?">
              <p>
                WorkApp notifications are sent at predetermined times as a
                reminder to Refresh your Profiles and Posts. 6am reminder is
                important for Workers whose profiles expire that day and are
                still available for work and 12pm is only sent if you
                haven&apos;t refreshed your post or profile by then. We really
                don&apos;t want you to miss out by having your profiles and
                posts expire.
                <div className="flex flex-row space-x-3 mt-5 text-[#4D7AB7] underline underline-offset-6">
                  <a href="">Download for Apple</a>
                  <a href="">Download for Android</a>
                  <a href="">Use Classified App on the web</a>
                </div>
              </p>
            </Panel>
          </div>
        </div>
        <div className="hidden md:flex">
          <Image
            src="/assets/faq-bg.png"
            alt="..."
            height={300}
            width={500}
          />
        </div>
      </div>
    </div>
  );
}
