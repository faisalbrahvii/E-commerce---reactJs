import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";
import Footer from '../components/Footer'
const GetinTouch = () => {
  return (
    <div>
      
      <div className='p-12'>
        <h1 className='text-4xl font-bold mb-11 '>Get in touch</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14'>
        <div className='border1 p-5'>
            <p className='font-bold'>Send a Message</p>
            <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo ut, necessitatibus odit eligendi non!</p>
            <form  >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mt-7'>
            <div class="flex flex-col">
            <label for="name" class="mb-2 font-bold">Name :</label>
            <input type="text" id="name" class="p-4 border-none border-b w-[90%] bg-transparent border-gray-500 focus:border-none focus:border-b focus:border-gray-500" placeholder="Enter Your Name" />
            </div>
            <div class="flex flex-col">
            <label for="name" class="mb-2 font-bold">Email Address :</label>
            <input type="text" id="name" class="p-4 border-none border-b w-[90%] bg-transparent border-gray-500 focus:border-none focus:border-b focus:border-gray-500" placeholder="Enter Your Address" />
            </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-3'>
            <div class="flex flex-col">
            <label for="name" class="mb-2 font-bold">Interested In :</label>
            <input type="text" id="name" class="p-4 border-none border-b w-[90%]  border-gray-500 focus:border-none focus:border-b bg-transparent focus:border-gray-500" placeholder="Enter Ypur Interested" />
            </div>
            <div class="flex flex-col">
            <label for="name" class="mb-2 font-bold">Phone Number :</label>
            <input type="text" id="name" class="p-4 border-none border-b w-[90%] border-gray-500 focus:border-none focus:border-b bg-transparent focus:border-gray-500" placeholder="Enter Your Phone number" />
            </div>
            </div>
            <div className='grid grid-cols-1 mt-3'>
            <div class="flex flex-col">
            <label for="name" class="mb-2 font-bold ">Message:</label>
            <textarea name=""  id="name" cols="30" className='bg-transparent' rows="4"></textarea>
            </div>
            </div>
            <div className='flex justify-end mt-5'>
                <button className='text-white rounded-lg py-2 px-4 p-3 flex  items-center bg-black hover:bg-gray-300 hover:text-black'><IoIosArrowRoundForward /> Submit</button>
            </div>
            </form>
        </div>
        <div>
            <div>
             <div>
             <h1 className='text-2xl font-bold'>Call Us</h1>
                <p className='text-slate-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum nemo quo rem dolore deleniti!</p>
                <div className='flex gap-2 mt-4'>
                <FiPhoneCall className='text-orange-400'/>
                <p className='text-orange-400'>03227075828</p>
             </div>    
            </div>
             <div className='mt-5'>
             <h1 className='text-2xl font-bold'>Visit Us</h1>
                <p className='text-slate-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum nemo quo rem dolore deleniti!</p>
                <div className='flex gap-2 mt-4'>
                <CiLocationOn className='text-orange-400'/>
                <p className='text-orange-400'>Chakiwara photolane Street - 2 Lyari-Karachi </p>
             </div>    
            </div>
             <div className='mt-5'>
             <h1 className='text-2xl font-bold'>Call Us</h1>
                <p className='text-slate-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum nemo quo rem dolore deleniti!</p>
                <div className='flex gap-2 mt-4'>
                <IoChatbubblesOutline className='text-orange-400'/>
                <p className='text-orange-400'>Start Chat</p>
             </div>    
            </div>
            </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10' >
        <div>
        <h3 className='text-[20px] text-slate-500 font-bold'>FAQ</h3>
         <h1 className='font-bold text-5xl mt-3'>Frequently </h1>
         <h1 className='font-bold text-5xl'>asked</h1>
         <h1 className='font-bold text-5xl'>question . </h1>
        </div>
        <div>
        <h3 className=' font-bold'>Lorem ipsum dolor sit amet.</h3>
         <p className='text-slate-600 mt-3'> Lorem, ipsum dolor. Lorem ipsum dolor sit Lorem ipsum dolor sit amet. amet consectetur adipisicing elit. Corporis, nam? </p>
         <div className='flex justify-between items-center mt-4' >
         <p className='text-slate-500'>1, Lorem ipsum dolor sit amet Lorem, ipsum dolor ?</p>
         <FaCircleArrowRight/>
         </div>
         <div className='flex justify-between items-center mt-3'>
         <p className='text-slate-500'>2, Lorem ipsum dolor sit amet Lorem, ipsum dolor ?</p>
         <FaCircleArrowRight/>
         </div>
         <div className='flex justify-between items-center mt-3'>
         <p className='text-slate-500'>3, Lorem ipsum dolor sit amet Lorem, ipsum dolor ?</p>
         <FaCircleArrowRight/>
         </div>
         <div className='flex justify-between items-center mt-3'>
         <p className='text-slate-500'>4, Lorem ipsum dolor sit amet Lorem, ipsum dolor ?</p>
         <FaCircleArrowRight/>
         </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default GetinTouch
