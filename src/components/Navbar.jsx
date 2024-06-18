import React, { useState } from 'react';
import { Navlinks } from '../utils/Navlinks';
import { GrMenu, GrClose } from "react-icons/gr";


const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (

      <div className='flex items-center justify-between  py-5 md:px-36 px-7 shadow-sm font-Outfit'>
        
        {/* Logo */}
          <div className='flex space-x-2 items-center z-[2]'>
            <div>
              <img src='./assets/L2S_Logo.jpg' className='size-8 rounded-xl' alt="Logo"/>
            </div>
            <div className='md:text-xl text-white '>
              Leading2Succeed-FB
            </div>
          </div>
        
        {/* Menu icon for mobile */}
        <div onClick={() => setOpen(!open)} className='md:text-3xl text-xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? <GrClose className=' text-white' /> : <GrMenu className=' text-white' />}
        </div>

        {/* Links */}
        <ul className={`md:flex items-center md:pb-0 absolute md:static z-[0] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? ' top-20' : ' left-[-490px] top-20'}`}>
          {Navlinks.map((link, index) => (
            <li key={index} className='md:ml-8 text-md md:my-0 my-7 ' >
              <a href={link.path} className= ' text-white hover:text-blue-800 duration-200'>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
  )
};

export default Navbar;
