import React from 'react';
import { categories } from '../Data/Data.js';
import {Link} from 'react-router-dom'
const Shop = () => {
  return (
    <div className='mt-14'>
      <div className='container mx-auto gap-9 p-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        {categories.slice(0, 3).map((item, index) => (
          <div key={index} className='relative w-full border h-80 animate__animated animate__fadeInUp'>
            <img src={item.image} alt={item.category} className='w-full h-full' />
            <div className='absolute inset-0 top-32 flex flex-col p-6'>
              <p className='text-orange-900 font-bold sm:text-[10px] md:text-sm'>{item.des} 🎉</p>
              <h1 className='sm:text-[14px] md:text-3xl lg:text-3xl font-bold text-black'>{item.category}  </h1>
              <Link to="/Shop"><button className='rounded bg-slate-500 text-white sm:text-[12px] mt-7 w-full py-4 hover:bg-white hover:text-black'>Show now</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
