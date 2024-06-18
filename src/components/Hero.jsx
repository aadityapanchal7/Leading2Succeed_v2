import React from 'react';
import Navbar from './Navbar'
import AutoPlaySilentVideo from './Video'

function Hero() {

  return (
    <>
 
      {/* Video */}
      <div className=" w-full absolute h-screen z[-3] ">
        <AutoPlaySilentVideo className=" overflow-hidden absolute w-full h-full object-cover z-[-2]" />
      </div>
      
      <div className='h-screen bg-black/50'>
        {/* Navbar */}
        <Navbar className='absolute ' />
  
        {/* Hero */}
        <div className='box-border flex items-center justify-center md:w-1/2 md:px-36 h-[100vh] ' id="Home">
          {/* Main Text */}
            <div className='flex flex-col items-center space-y-3 text-white md:items-start md:mb-10 mt-36 md:mt-0 z-[2] '>
              <div className='flex-wrap text-4xl md:text-5xl'>Hero Statement</div>
              <div className='text-xl '>Subtext/Description</div>
              <button className='flex justify-center w-24 p-2 text-center bg-blue-400 rounded-2xl'>
                Button
              </button>
            </div>
        </ div>
      </div>
    </>
  )
}

export default  Hero;