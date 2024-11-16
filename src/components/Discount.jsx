import React from 'react'
import Discountpanel from '../assests/img/dis.png'
const Discount = () => {
  return (
    <div className='container mx-auto w-full rounded-2xl   bg-slate-100 mt-14'>
      <div className='relative w-full  flex justify-center'>
          <img src={Discountpanel} alt="" className='' />
          <div className='absolute inset-0 bottom-36 flex flex-col justify-center items-center'>
              <p className='text-black/45 font-bold text-sm'>BIG DISCOUNT</p>
              <h1 className='text-2xl font-bold text-black/70'>Google Pixel Smart Phone</h1>
              <h1 className='text-[20px] font-bold text-red-500'>$350.00</h1>
              <button className='rounded-xl bg-red-600 hover:bg-white hover:text-black text-white text-sm mt-4 px-8 py-2'>Shop Now</button>
          </div>
      </div>
    </div>
  )
}

export default Discount
