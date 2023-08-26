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
        <div className='text-[#747474]'>
          <h1 className='font-bold text-xl text-center mb-10'>
            COMMUNITY AND EVENTS
          </h1>
          <p className='md:w-2/4 lg:w-4/5 text-center m-auto mb-8 leading-normal'>
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
        <div className='text-[#747474] w-screen m-auto'>
          <div>
            <h1 className='font-bold text-xl text-center'>
              COMMUNITY AND EVENTS 
            </h1>
          </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 p-6 content-center justify-items-center font-bold text-xl items-center w-auto'>
                <div className=' h-32 w-48 flex flex-wrap text-center items-center justify-center'>
                  <div className=' content-center'>
                    Fund Raising
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
      <div className=' items-center bg-white text-[#747474]'>
        <div className='py-10 mb-10 justify-center'>
          <h1 className='font-bold text-xl text-center'>
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
                    width={500}
                    height={240}
                    objectFit="fit" // change to suit your needs
                    className="justify-center" // just an example
                  />
                </div>
              <div className='grid-rows-1 gap-3 items-center'>
                <div lassName='text-center py-5'>
                  <h1 className='font-bold text-xl mb-8 text-center'>
                    From the Fans: 10 reasons why you should use WorkApp
                  </h1>
                  <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal'>
                    One of our delighted fans in Romania, Andrada Anitei,
                    recently posted an article in LinkedIn and a blog on her website about WorkApp.
                    We love it when people around the globe get real value from [...]
                  </p>
                  <div className='h-9 sm:w-32 border mt-10 mb-10 m-auto border-[#2b3c96] hover:bg-[#2b3c96] transition-colors duration-300 rounded-md'>
                    <button className="h-full w-full text-[#2b3c96] transition-colors duration-300 hover:text-white m-auto">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mx-5'>
            <div className='grid grid-rows-1 gap-3 justify-items-center'>
                <div className="h-auto w-auto">
                  <Image
                    src='/assets/classified2.jpg'
                    alt="Picture of the author"
                    //layout="fill" // required
                    width={401}
                    height={110}
                    objectFit="fit" // change to suit your needs
                    className="justify-center" // just an example
                  />
                </div>
              <div className='grid-rows-1 gap-3 items-center'>
                <div lassName='text-center py-5'>
                  <h1 className='font-bold text-xl mb-8 text-center'>
                    Why Smart Event Organisers Use WorkApp
                  </h1>
                  <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal'>
                  Life is so busy for most people these days that working out
                  exactly how best to spend your precious spare time can be a challenge in itself.
                  There is never any shortage of concerts, festivals, [...]
                  </p>
                  <div className='h-9 sm:w-32 mt-10 mb-10 border m-auto border-[#2b3c96] hover:bg-[#2b3c96] transition-colors duration-300 rounded-md'>
                    <button className="h-full w-full text-[#2b3c96] transition-colors duration-300 hover:text-white m-auto">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mx-5'>
            <div className='grid grid-rows-1 gap-3 justify-items-center'>
              <div className="h-auto w-auto">
                  <Image
                    src='/assets/classified2.jpg'
                    alt="Picture of the author"
                    //layout="fill" // required
                    width={401}
                    height={110}
                    objectFit="fit" // change to suit your needs
                    className="justify-center" // just an example
                  />
                </div>
              <div className='grid-rows-1 gap-3 items-center'>
                <div lassName='text-center py-5'>
                  <h1 className='font-bold text-xl mb-8 text-center'>
                    WorkApp for Community and Events
                  </h1>
                  <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal'>
                  Workapp Is the platform of choice for Community Groups and Events WorkApp is
                  an application that has been created for worldwide use,
                  and the concept behind the development was to create a unique way for [...]
                  </p>
                  <div className='h-9 mt-10 mb-10 sm:w-32 border m-auto border-[#2b3c96] hover:bg-[#2b3c96] transition-colors duration-300 rounded-md'>
                    <button className="h-full w-full text-[#2b3c96] transition-colors duration-300 hover:text-white m-auto">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center mx-5'>
            <div className='grid grid-rows-1 gap-3 justify-items-center'>
              <div className="h-auto w-auto">
                  <Image
                    src='/assets/classified2.jpg'
                    alt="Picture of the author"
                    //layout="fill" // required
                    width={401}
                    height={110}
                    objectFit="fit" // change to suit your needs
                    className="justify-center" // just an example
                  />
                </div>
              <div className='grid-rows-1 gap-3 items-center'>
                <div lassName='text-center py-5'>
                  <h1 className='font-bold text-xl mb-8 text-center'>
                    Community Organisations and Volunteers
                  </h1>
                  <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal'>
                  Community Organizations and Volunteers Do you run a not for profit organisation,
                  sports club or other community organisation and need volunteers who can be trusted with the responsibility
                  of fund raising or representing your organisation [...]
                  </p>
                  <div className='h-9 mt-10 mb-10 sm:w-32 border m-auto border-[#2b3c96] hover:bg-[#2b3c96] transition-colors duration-300 rounded-md'>
                    <button className="h-full w-full text-[#2b3c96] transition-colors duration-300 hover:text-white m-auto">
                      Read More
                    </button>
                  </div>
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