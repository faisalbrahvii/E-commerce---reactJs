import React from 'react'
import { BsBox } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";


const DeliveryDetails = () => {
  return (
    <div className='bg-slate-100 mt-14'>
      <div className='container mx-auto '>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 '>
            <div className='text-center p-9'>
                <div className='flex justify-center'>
                <p ><BsBox size={50}  className='text-black/50' /></p>
                </div>
                <h1 className='text-lg text-black/85 font-bold mt-6'>Free delivery</h1>
                <p className='text-black/50 font-bold text-[18px] mt-3'>And free returns. See checkout for delivery dates.</p>
            </div>
            <div className='text-center p-9'>
                <div className='flex justify-center'>
                <p ><AiOutlineDollar size={50}  className='text-black/50' /></p>
                </div>
                <h1 className='text-lg text-black/85 font-bold mt-6'>Pay monthly at 0% APR</h1>
                <p className='text-black/50 font-bold text-[18px] mt-3'>Choose to check out with Apple Card Monthly Installments.</p>
            </div>
            <div className='text-center p-9'>
                <div className='flex justify-center'>
                <p ><FaRegCircle size={50}  className='text-black/50' /></p>
                </div>
                <h1 className='text-lg text-black/85 font-bold mt-6'>Personalize it</h1>
                <p className='text-black/50 font-bold text-[18px] mt-3'>Engrave your device with your name or a personal note</p>
            </div>
            
           
        </div>
      </div>
    </div>
  )
}

export default DeliveryDetails
