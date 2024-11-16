import React from 'react';
import Discountpanel from '../assest/about/about.jpeg';
import StoryImage from '../assest/about/story.jpeg';
import StoryImage1 from '../assest/about/download (15).jpeg';
import { companymembers } from '../Data/AboutData.js';
import { PiLessThan, PiGreaterThan } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa6";
import { AiOutlineProject, AiOutlineLike } from "react-icons/ai";
import { BsCup } from "react-icons/bs";
import { Link } from 'react-router-dom';

import { companylogo } from '../Data/AboutData.js';
const About = () => {
  return (
    <div className=''>
      <div className='container mx-auto p-4'>
        {/* <ul className='flex flex-wrap gap */}
      </div>
      <div className="relative text-center">
        <img src={Discountpanel} className="h-56 w-full object-cover" alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className='text-4xl font-bold text-black'>About Us</h1>
          <ul className="flex gap-1 text-[14px] items-center justify-center font-bold text-gray-400">
            <li>Home</li>
            <li>/</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <section>
        <div className='m-8 lg:m-32'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32'>
            <div>
              <h1 className='text-3xl font-bold text-black'>Our Mission</h1>
              <p className='text-black/60 mt-4 lg:mt-7 font-sans text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, optio. Quisquam, dicta?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, optio. Quisquam, dicta?
              </p>
            </div>
            <div>
              <img src={StoryImage1} className='w-full h-80 object-cover rounded' alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='text-center m-8 lg:m-28'>
          <h1 className='text-3xl text-black/65 font-bold'>ALL MEMBERS</h1>
          <div className='flex items-center justify-center gap-4 lg:gap-10'>
            <p><PiLessThan /></p>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-9 mt-7'>
              {companymembers.map((item, index) => (
                <div key={index} className='text-center'>
                  <img src={item.image} alt="" className='w-full h-48 object-cover rounded' />
                  <h1 className='font-bold mt-3'>{item.name}</h1>
                  <p className='text-gray-500'>{item.rollno}</p>
                  <div className='flex items-center justify-center gap-3 text-gray-500 mt-4'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaPinterest />
                  </div>
                </div>
              ))}
            </div>
            <p><PiGreaterThan /></p>
          </div>
        </div>
      </section>
      <section className='bg-gray-100 py-12'>
        <div className='m-8 lg:m-36 p-4 lg:p-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32'>
            <div>
              <h1 className='text-2xl lg:text-3xl font-bold text-black'>Do you want to be a part of our team?</h1>
              <p className='text-black/60 mt-4 lg:mt-7 font-sans text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, optio. Quisquam, dicta?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, optio. Quisquam, dicta?
              </p>
              <button className='py-3 px-7 bg-yellow-400 rounded-full text-[12px] font-bold text-black/65 mt-4 lg:mt-7'>
                JOIN NOW
              </button>
            </div>
            <div>
              <img src={StoryImage} className='w-full h-80 object-cover rounded' alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className=' p-8 lg:p-16'>
        <div className='flex justify-center'>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-9'>
            <div className='border text-center h-44 w-32 lg:w-40 p-4 lg:p-8 rounded-xl shadow-md'>
              <AiOutlineProject size={43} className='mx-auto' />
              <h1 className='text-black/65 font-bold mt-3'>PROJECT</h1>
              <h1 className='text-yellow-300 font-bold text-2xl'>43</h1>
            </div>
            <div className='border text-center h-44 w-32 lg:w-40 p-4 lg:p-8 rounded-xl shadow-md'>
              <AiOutlineLike size={43} className='mx-auto' />
              <h1 className='text-black/65 font-bold mt-3'>LIKES</h1>
              <h1 className='text-yellow-300 font-bold text-2xl'>43</h1>
            </div>
            <div className='border text-center h-44 w-32 lg:w-40 p-4 lg:p-8 rounded-xl shadow-md'>
              <BsCup size={43} className='mx-auto' />
              <h1 className='text-black/65 font-bold mt-3'>CUPS</h1>
              <h1 className='text-yellow-300 font-bold text-2xl'>50</h1>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-9 bg-gray-100 py-8'>
        <div className='w-full flex justify-center p-10'>
          <di v className='text-center'>
            <h1 className='text-2xl text-black/65 font-bold'>ALL CLIENTS</h1>
            <p className='font-bold text-gray-400'>
              Lorem ipsum, placeat, perferendis facere beatae laboriosam,!
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6 mt-8'>
              {companylogo.map((item , index) => (
                <img key={index} src={item.image} className='w-full h-40 object-cover rounded' alt="" />
              ))}
            </div>
          </di>
        </div>
      </section>
    </div>
  );
};

export default About;
