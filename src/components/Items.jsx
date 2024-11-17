import React from 'react';

import { bannerss } from '../Data/SeoData';

const Items = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bannerss.map((item, index) => (
          <div
            key={index}
            className="border  bg-cover bg-center p-2 sm:p-2 md:p-2 lg:p-2 rounded-lg shadow-lg"
          >
            <img src={item.image} className='w-full h-full' alt="" />
            {/* Uncomment and update this section for text overlay */}
            {/* <div className="bg-black/60 p-4 rounded-lg">
              <h2 className="font-sans text-white text-lg md:text-xl lg:text-2xl">Intelligent</h2>
              <h4 className="font-bold text-white text-sm md:text-lg lg:text-xl">New Touch Control</h4>
              <p className="text-slate-400 mt-2 text-xs md:text-sm lg:text-base">Discount 20% On Products</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
