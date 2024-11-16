import React from 'react';
import { CiStar } from "react-icons/ci";
import { product1 } from '../Data/Data.js'; 

const Popular = () => {
  return (
    <div className='container mx-auto mt-10'>
      <div className='flex justify-between p-5 '>
        <div className='flex justify-center gap-2 items-center'> 
          <p className=' text-black/65 sm:text-sm md:text-2xl font-bold animate__animated animate__fadeInLeft'>
            Popular Product
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 text-center mt-10 p-5 gap-4'>
        {product1.slice(0, 10).map((item, index) => {
          return (
            <div 
              className='border shadow-md p-1 transition duration-200 ease-in-out transform hover:translate-y-[-12px] hover:shadow-md animate__animated animate__fadeInUp' 
              key={index}
            >
              <div className='bg-slate-50'>
                <img src={item.image} alt="" className='w-full h-44' />
                <div className='mt-4 flex justify-center'>
                  <CiStar className='text-orange-500' />
                  <CiStar className='text-orange-500' />
                  <CiStar className='text-orange-500' />
                  <CiStar className='text-orange-500' />
                  <CiStar className='text-orange-500' />    
                </div>
                <div className='mt-2'>
                  <p className='font-bold text-sm'>Console Leather & Canvas Blogs</p>
                </div>
                <div className='flex gap-3 mt-2 mb-3 justify-center'>
                  <h3 className='font-bold text-sm'>$29.99</h3>
                  <h4 className='text-slate-500 text-sm pb-2'>$49.99</h4>
                </div>
              </div>
            </div>     
          )
        })}
      </div>
    </div>
  );
}

export default Popular;
