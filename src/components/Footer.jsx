import React from 'react'
import Ioslogo from '../assest/logopic/applelogo.png'
import StoreLogo from '../assest/logopic/store.png'

const Footer = () => {
  return (
    <div className='bg-slate-50 w-full '>

    <div className='container mx-auto p-6'>
        <div className='grid sm:grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4  p-6  '>
          
          <div className=''>
            <h1 className='text-2xl font-bold text-black/85'>Contact Us</h1>
            <div className='font-bold text-[14px] text-black/50'>
            <p className='mt-3'>Drou Demo Store</p>
            <p className='mt-1'>No: 1256 Freedom, New York</p>
            <p className='mt-1'>United Status</p>
            <p className='mt-1'>+923227075828</p>
            <p className='mt-1'>babulbrohi43@gmail.com</p>
            </div>
            
          </div>
          <div className=''>
            <h1 className='text-2xl font-bold text-black/85'>Information</h1>
            <div className='font-bold text-[14px] text-black/50'>
            <p className='mt-3'>Product Support</p>
            <p className='mt-1'>Checkout</p>
            <p className='mt-1'>Licence Policy</p>
            <p className='mt-1'>Affirate</p>
            </div>
            
          </div>
          <div className=''>
            <h1 className='text-2xl font-bold text-black/85'>Customer Service</h1>
            <div className='font-bold text-[14px] text-black/50'>
            <p className='mt-3'>Help Center</p>
            <p className='mt-1'>Redeem Voucher</p>
            <p className='mt-1'>Contact us</p>
            <p className='mt-1'>Policies & Rules</p>
            </div>
            
          </div>
          <div className=''>
            <h1 className='text-2xl font-bold text-black/85'>Download Our App</h1>
            <div className='font-bold text-[14px] text-black/50'>
            <p className=' mt-3'>Download our App and get extra 15% Discount on your first Order..!</p>
            <div className='grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
                <div className='flex items-center bg-white  shadow-lg rounded-md px-4 py-2 animate__animated animate__fadeInRight'>
                    <img src={Ioslogo} alt="" className='h-8' />
                    <div>
                      <p className='text-black/50 text-[7px]'>Download on the </p>
                      <h1 className='text-[13px]  text-black/85'>App Store</h1>
                    </div>
                </div>
                <div className='flex items-center bg-white  shadow-lg rounded-md px-4 py-2 animate__animated animate__fadeInRight'>
                    <img src={StoreLogo} alt="" className='h-6' />
                    <div>
                      <p className='text-black/50 text-[7px]'>Download on the </p>
                      <h1 className='text-[13px]  text-black/85'>Play Store</h1>
                    </div>
                </div>
               
            </div>
            </div>
            
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
