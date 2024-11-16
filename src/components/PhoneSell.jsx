import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

import { kids } from '../Data/Data.js'
import { mainkid } from '../Data/Data.js'

import { CiHeart } from "react-icons/ci";

const PhoneSell = () => {
  return (
    <div className='container mx-auto  mt-12 mb-5 p-5'>
      <div className='flex justify-between '>
        <div>
        {/* <h1 className='sm:text-lg md:text-3xl font-bold ml-5 text-black/65'>Top Iphone Products</h1> */}
        <p className=' text-black/65 sm:text-sm md:text-2xl font-bold animate__animated animate__fadeInLeft'>Top Children Products</p>
        <hr className='mt-5 text-orange-900' />
        </div>
        <div className='flex items-center gap-2 '>
        <button className='font-bold text-black/70 flex items-center gap-2 sm:text-sm md:text-[14px] animate__animated animate__fadeInLeft'>View all Children Collection <IoIosArrowRoundForward className='text-red-700 animate__animated animate__fadeInLeft' size={25} /></button>
        </div>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 mt-10 p-2 gap-5'>
        {kids.slice(0,1).map((Ios , index)=>{
            return(
                <div className='flex' key={index}>
            <div className=''>
                <img src={Ios.image} alt="" />
            </div>
            <div className='w-96 '>
                <h2 className='text-black/50 font-bold'>{Ios.name}</h2>
                <div className='flex mt-3 gap-3'> 
                <p className='text-red-500'>{Ios.current_price}</p>
                <p className='text-gray-400'>{Ios.price}</p>
                </div>
                <h2 className='text-slate-400 font-sans mt-4'>{Ios.dec}</h2>

             <div className='flex items-center gap-4 mt-4'>
                <button className='bg-orange-300 text-black w-full sm:w-48 py-3 rounded hover:bg-gray-300'>ADD TO CART</button>
                <div className='border hover:bg-gray-50 h-12 flex items-center p-3 rounded'>
                <CiHeart className='   sm:text-3xl  md:text-4xl lg:text-4xl hover:text-orange-700 ' />
                  
                </div>

             </div>
            
            </div>
        </div>    
            )
        })}
        
        <div className='grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 '>
            {mainkid.map((Iphone , index)=>{
                return(
                    <div className='flex' key={index}>
                      <div className=''>
                          <img src={Iphone.image} alt="" className='img' />
                      </div>
                      <div className='w-96'>
                          <h2 className='text-black/50 font-bold'>{Iphone.name} </h2>
                          <div className='flex mt-3 gap-3'> 
                          <p className='text-red-500'>{Iphone.price}</p>
                          </div>             
                      </div>
                     </div>
                )
            })}
        

        </div>
      </div>
    </div>
  )
}

export default PhoneSell
