import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF ,FaInstagram ,FaGithub ,FaTwitter } from "react-icons/fa";

const NewLetter = () => {
  return (
    <div className='container mx-auto mt-10 '>
      <h1 className='text-slate-400 font-bold text-center sm:text-[20px] md:text-2xl lg:text-2xl animate__animated animate__fadeInUp' >Sign Up for the <span className='font-bold text-black '> NEWSLETTER</span></h1>
      <div className='flex justify-center sm:p-4 items-center mt-3'>
  <form className='flex sm:gap-2 p-3'>
    <input type="email" className='border sm:p-3 mr-2 w-60 md:p-3  w-79 lg:p-3 animate__animated animate__fadeInLeft ' placeholder='Enter Your Email' />
    <button type='submit' className='rounded-e-3xl bg-red-500 px-4 py-2 text-white flex items-center'>
      <MdOutlineMail className='mr-1' /> Subscribe
    </button>
  </form>
</div>
<div className='flex justify-center mt-4'>
<div className='flex gap-3 animate__animated animate__fadeInUp'>
    <div className='border p-3'>
        <FaFacebookF className='sm:text-[20px] md:text-2xl lg:text-2xl'/>
    </div>
    <div className='border p-3'>
        <FaInstagram className='sm:text-[20px] md:text-2xl lg:text-2xl'/>
    </div>
    <div className='border p-3'>
        <FaTwitter className='sm:text-[20px] md:text-2xl lg:text-2xl'/>
    </div>
    <div className='border p-3'>
        <FaGithub className='sm:text-[20px] md:text-2xl lg:text-2xl'/>
    </div>
    
</div>
</div>
      
    </div>
  )
}

export default NewLetter
