import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'


function Header() {
  return (
    <div className='h-fit border-1 z-9999 bg-[#ffffff]'>
        <div className='flex md:flex-row flex-col md:space-x-12 justify-center w-auto md:w-full p-4 items-center bg-[#ffffff]'>
          <div className='w-auto'>
            <Image src="/assets/workapp.png" alt="logo" width={401 }height={110} />
          </div>
          <div className='flex md:grid grid-cols-2 container gap-3 sm:w-1/4 md:w-64 p-2'>
            <div className='m-auto'>
              <Image src="/assets/ios.png" alt="ios" width={170} height={120} />
            </div>
            <div className='m-auto'>
              <Image src="/assets/googleplay.png" alt="googleplay" width={170} height={120} /> 
            </div>
          </div>
        <div className='flex flex-row space-x-3 p-3'>
            <div className='h-9 sm:w-16 border m-auto border-[#2b3c96] hover:bg-[#2b3c96] transition-colors duration-300 rounded-md'>
              <button className="h-full w-full text-[#2b3c96] transition-colors duration-300 hover:text-white m-auto">
                Sign In
              </button>
            </div>
            <div className='h-9 sm:w-16 border m-auto bg-slate-400 border-[#313131] hover:bg-[#313131] transition-colors duration-300 rounded-md'>
              <button className="h-full w-full text-[#313131] transition-colors duration-300 hover:text-white m-auto">
                Sign Up
              </button>
            </div>
        </div>
        </div>
        <div className='bottom-0 sm:flex flex-wrap bg-[#2b3c96] items-center'>
            <Navbar/>
        </div>
    </div>
    
  )
}

export default Header