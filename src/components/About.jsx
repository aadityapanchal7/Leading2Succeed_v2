import React from 'react'
import { BiFile } from "react-icons/bi";

function About() {
  return (
    <section className=' min-h-screen max-w-[1600px]'>
      <div className=' items-center flex flex-row'>
        <div className=' md:box-border md:w-1/2 flex justify-center md:text-7xl'> 
          About
        </div>
        <BiFile className='   md:ml-[5%] md:size-72'/>
      </div>
    </section>
  )
}

export default About;
