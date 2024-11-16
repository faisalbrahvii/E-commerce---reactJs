import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import  { blog }  from '../Data/Data.js'
import { CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <div className='container mx-auto mt-10'>
      <div className='flex justify-between p-5 '>
        <div className='flex justify-center gap-2 items-center' > 
          <p className=' text-black/65 sm:text-sm md:text-2xl font-bold animate__animated animate__fadeInLeft'>Blog & Events</p>
        </div>  
        <div className=''>
          <button className='font-bold text-black/70 flex items-center gap-2 sm:text-sm md:text-[14px] animate__animated animate__fadeInLeft'> <Link to="/Blogdisplay">View all Events</Link> <IoIosArrowRoundForward className='text-red-700 animate__animated animate__fadeInLeft' size={25} /></button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 md:mt-12'>
            {blog.map((blog , index)=>{
                return(
                  <div  className='border p-4 bg-slate-50 rounded-2xl animate__animated animate__fadeInUp' key={index}>
                  <div>
                    <img src={blog.image} alt="" className='rounded' />
                  </div>
                  <div className=' mt-4 md:mt-6'>
                    <p className='text-red-400  flex gap-2 items-center justify-start text-sm'><CiCalendar className='text-black ' />{blog.date} </p>
                    <h1 className='text-black/60  text-[16px] font-bold'>{blog.dec}</h1>
                  </div>
                </div>
                )
            })}
            
            
             
         </div>
      </div>
    </div>
  )
}

export default Blog
