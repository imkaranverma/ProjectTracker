import React, { Fragment } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='bg-white shadow h-22 flex justify-between items-center'>
      <div>
      <p className='text-3xl uppercase font-bold ml-20 mt-6 text-[#6366F1]'>Project Track</p>
      <p className='ml-20 font-medium capitalize text-base mt-0 mb-4 text-[#6366F1]'>To-Do for Project</p>
    </div>
{/* Icons */}
    <div className='mr-14 flex gap-7'>

   <a href='https://github.com/imkaranverma' target='_blank'> <FaGithub  className='text-[#6366F1] text-3xl'/></a>
   <a href='https://www.linkedin.com/in/imkaranverma/' target='_blank'> <FaLinkedin  className='text-[#6366F1] text-3xl'/></a>
   <a href='https://iamkaranverma.netlify.app/' target='_blank'> <IoPersonCircleSharp  className='text-[#6366F1] text-3xl'/></a>
    </div>
      </div>
  )
}

export default Navbar