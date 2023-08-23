import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='min-h-screen mx-auto'>
      <div className="bg-[url('/assets/job_bg.jpg')] md:h-96 h-60 flex justify-end bg-cover bg-center">
        <div className="absolute flex justify-center items-center md:mt-14 mt-5 mr-20 md:mr-40 bg-gray-500 border-none bg-opacity-50 md:h-52 h-20 md:w-96 w-auto text-white md:text-3xl text-sm">
            <h1 className="my-5 mx-5">
                LIST AND FIND<br></br> JOB VACANCIES
            </h1>
        </div>
      </div>
      <div className='flex justify-center py-5 bg-white md:h-auto'>
        <div className='grid grid-rows-1 text-black w-4/5 items-center'>
          <h1 className='text-center'>JOBS</h1>
          <p className='md:w-2/4 lg:w-4/5 text-center m-auto mb-8 leading-normal'>
          Classified App is your own free jobs agency, connecting employers and workers in real time. <br />
            Small and large businesses alike can list vacancies in just a few minutes <br />
            or search Worker Profiles to instantly find the right person for a job.
            Workers can advertise their skills and availability at zero cost.
            Classified App innovative refresh technology means your search will always produce the latest <br />
            and most relevant listings. Our integrated messaging function makes it simple and easy to get in touch and get going!
          </p>
        </div>
      </div>
        <div className='flex justify-center md:min-h-screen'>
          <div className='text-[#747474] items-center md:grid grid-cols-2 gap-2'>
            <div className='text-center py-5 mx-5'>
              <h1 className='font-bold mb-8'>
                GET FOUND
              </h1>
              <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal'>
                Create unlimited profiles to showcase your skills and services to potential employers.
                Refresh your profile at least once a day to stay front and centre on Classified App.
              </p>
            </div>
            <div className='text-center py-5 mx-5'>
              <h1 className='font-bold mb-8'>
                FOR EMPLOYERS
              </h1>
              <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal'>
                Whether you have a short-term or long-term position to fill,
                simply post your vacancy and wait for applications to roll in.
                You can also post whole Tenders on Classified App.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-white md:grid grid-cols-2 gap-2 min-h-screen text-black'>
          <div className='flex justify-center items-center mx-5'>
            <div className='md:grid grid-row-1 gap-2 py-5'>
              <div className='flex justify-center'>
                <Image src="/assets/classified2.jpg" alt="logo" width={401} height={110} />
              </div>
              <div className='text-center py-5'>
                <h1 className='font-bold text-2xl mb-8'>
                  From the Fans: 10 reasons why you should use Classified App
                </h1>
                <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal'>
                  One of our delighted fans in Romania, Andrada Anitei,
                  recently posted an article in LinkedIn and a blog on her website about Classified App.
                  We love it when people around the globe get real value from [...]
                </p>
              </div>
              <div className='h-9 sm:w-32 border m-auto border-[#2b3c96] hover:bg-[#2b3c96] transition-colors duration-300 rounded-md'>
                <button className="h-full w-full transition-colors duration-300 hover:text-white m-auto">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center py-5 mx-5'>
            <div className='grid grid-row-1 gap-3'>
              <div className='flex justify-center'>
                <Image src="/assets/classified1.jpg" alt="logo" width={401} height={110} />
              </div>
              <div className='text-center py-5'>
                <h1 className='font-bold text-2xl mb-8'>
                  Looking for Candidates just got exciting
                </h1>
                <p className='md:w-2/4 lg:w-4/5 text-center m-auto leading-normal'>
                  Looking for candidates just got exciting When it comes to finding the right staff,
                  Recruitment Agencies play a prominent role in identifying, interviewing and shortlisting prospective staff.
                  A number of companies however, prefer to manage [...]
                </p>
              </div>
              <div className='h-9 sm:w-32 border m-auto border-[#2b3c96] hover:bg-[#2b3c96] transition-colors duration-300 rounded-md'>
                <button className="h-full w-full transition-colors duration-300 hover:text-white m-auto">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url('/assets/job_bg.jpg')] md:h-96 h-60 flex justify-end bg-cover bg-center">
        <div className="absolute flex justify-center items-center md:mt-14 mt-5 mr-20 md:mr-40 bg-gray-500 border-none bg-opacity-50 md:h-52 h-20 md:w-96 w-auto text-white md:text-3xl text-sm">
            <h1 className="my-5 mx-5">
                <div className='text-[#2b3c96]'>CLASSIFIED APP</div> <br></br> A World Of opportunity in your palm
            </h1>
        </div>
      </div>
    </div>
  )
}

export default page