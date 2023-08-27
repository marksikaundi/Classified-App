import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='min-h-screen mx-auto'>
      <div className="bg-[url('https://corporate.workapp.world/wp-content/uploads/2016/04/events_bg.jpg')] md:h-96 h-60 flex justify-start bg-cover bg-center">
          <div className="absolute flex justify-center items-center md:mt-14 mt-5 ml-20 md:ml-40 bg-gray-500 border-none bg-opacity-50 md:h-52 h-20 md:w-96 w-auto text-white md:text-3xl text-sm">
              <h1 className="my-5 mx-5">
                  PROMOTE AND JOIN<br></br> COMMUNITY EVENTS
              </h1>
          </div>
      </div>
      
      <div className='h-auto flex justify-center py-5 bg-white'>
        <div className=''>
          <h1 className='text-black text-center mb-10'>
            COMMUNITY AND EVENTS
          </h1>
          <p className='md:w-2/4 lg:w-4/5 text-[#333333] text-center m-auto mb-8 leading-normal'>
          WorkApp is a free community creation and events platform like no other.
          Use the App to create an individual or community profile to showcase yourself or your organization.
          List your free or paid event on WorkApp, complete with ticket information and optional PayPal purchasing.
          Utilise WorkApp’s unique groups function to share your event with a select group of contacts.
          Search for local entertainment, community, family and sporting events.
          Volunteer your services or search WorkApp to connect with volunteers for your community or cause.
          </p>
        </div>
      </div>
      <div className='h-auto flex justify-center py-4'>
        <div className='w-screen m-auto'>
          <div>
            <h1 className='text-black text-center'>
              COMMUNITY AND EVENTS 
            </h1>
          </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 p-6 content-center text-[#333333] justify-items-center items-center w-auto'>
                <div className=' h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                  <div className='h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                    <h1>Fund Raising</h1>
                  </div>
                </div>
                <div className='h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                  <h1>Concerts & Tour Dates</h1>
                </div>
                <div className='h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                  <h1>Conferences & Tradeshows</h1>
                </div>
                <div className='h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                  <h1>Festivals</h1>
                </div>
                <div className='h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                  <h1>Food and Wine</h1>
                </div>
                <div className='h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                  <h1>Kids and Family</h1>
                </div>
                <div className='h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                  <h1>Nightlife and Singles</h1>
                </div>
                <div className='h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                  <h1>Performing Arts</h1>
                </div>
                <div className='h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                  <h1>Sporting Clubs</h1>
                </div>
            </div>
        </div>
      </div>
      <div className=' items-center bg-white'>
        <div className='py-10 mb-10 justify-center'>
          <h1 className='text-black text-center'>
          LET THE WORLD KNOW ABOUT YOUR EVENT
          </h1>
        </div>
        <div className='md:grid grid-cols-2 gap-3 '>
          <div className='flex justify-center items-center mx-5'>
            <div className='grid grid-rows-1 gap-3 justify-items-center'>
              <div className="h-auto w-auto">
                  <Image
                    src='/assets/classified2.jpg'
                    alt="Picture of the author"
                    //layout="fill" // required
                    className="h-52 w-full"
                    height={40}
                    width={300}
                  />
                </div>
              <div className='grid-rows-1 gap-3 items-center text-center'>
                <div lassName='text-center py-5'>
                <a
                  href=""
                  className="text-black hover:text-[#479DE2] md:text-2xl"
                >
                  From The Fans: 10 Reasons Why You Should Use Classified App
                </a>
                  <p className='md:w-2/4 lg:w-4/5 pt-3 text-[#333333] text-center m-auto leading-normal'>
                    One of our delighted fans in Romania, Andrada Anitei,
                    recently posted an article in LinkedIn and a blog on her website about Classified App.
                    We love it when people around the globe get real value from [...]
                  </p>
                  <button className=" m-auto border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-[#333333] rounded-lg h-10 w-40">
                    <p className="mx-8 my-2">Read More</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mx-5'>
            <div className='grid grid-rows-1 gap-3 justify-items-center text-center'>
                <div className="h-auto w-auto">
                  <Image
                    src='/assets/classified2.jpg'
                    alt="Picture of the author"
                    //layout="fill" // required
                    className="h-52 w-full"
                    height={40}
                    width={300}
                  />
                </div>
              <div className='grid-rows-1 gap-3 items-center'>
                <div lassName='text-center py-5'>
                <a
                  href=""
                  className="text-black hover:text-[#479DE2] md:text-2xl"
                >
                  Why Smart Events Organizers Use Classified App
                </a>
                  <p className='md:w-2/4 lg:w-4/5 pt-3 text-[#333333] text-center m-auto leading-normal'>
                  Life is so busy for most people these days that working out
                  exactly how best to spend your precious spare time can be a challenge in itself.
                  There is never any shortage of concerts, festivals, [...]
                  </p>
                  <button className=" m-auto border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-[#333333] rounded-lg h-10 w-40">
                    <p className="mx-8 my-2">Read More</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mx-5'>
            <div className='grid grid-rows-1 gap-3 justify-items-center text-center'>
              <div className="h-auto w-auto">
                  <Image
                    src='/assets/classified2.jpg'
                    alt="Picture of the author"
                    //layout="fill" // required
                    className="h-52 w-full"
                    height={40}
                    width={300}
                  />
                </div>
              <div className='grid-rows-1 gap-3 items-center'>
                <div lassName='text-center py-5'>
                <a
                  href=""
                  className="text-black hover:text-[#479DE2] md:text-2xl"
                >
                  Classified App for Community and Events
                </a>
                  <p className='md:w-2/4 lg:w-4/5 pt-3 text-[#333333] text-center m-auto leading-normal'>
                  Workapp Is the platform of choice for Community Groups and Events WorkApp is
                  an application that has been created for worldwide use,
                  and the concept behind the development was to create a unique way for [...]
                  </p>
                  <button className=" m-auto border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-[#333333] rounded-lg h-10 w-40">
                    <p className="mx-8 my-2">Read More</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mx-5'>
            <div className='grid grid-rows-1 gap-3 justify-items-center text-center'>
              <div className="h-auto w-auto">
                  <Image
                    src='/assets/classified2.jpg'
                    alt="Picture of the author"
                    //layout="fill" // required
                    className="h-52 w-full"
                    height={40}
                    width={300}
                  />
                </div>
              <div className='grid-rows-1 gap-3 items-center'>
                <div lassName='text-center py-5'>
                <a
                  href=""
                  className="text-black hover:text-[#479DE2] md:text-2xl"
                >
                  Community Organizations and Volunteers
                </a>
                  <p className='md:w-2/4 lg:w-4/5 pt-3 text-[#333333] text-center m-auto leading-normal'>
                  Community Organizations and Volunteers Do you run a not for profit organisation,
                  sports club or other community organisation and need volunteers who can be trusted with the responsibility
                  of fund raising or representing your organisation [...]
                  </p>
                  <button className=" m-auto border border-[#333333] hover:border-[#479DE2] hover:text-[#479DE2] text-[#333333] rounded-lg h-10 w-40">
                    <p className="mx-8 my-2">Read More</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page