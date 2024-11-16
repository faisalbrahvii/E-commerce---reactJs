import React from 'react'
import HeroImg from '../assests/img/herro.png'
import {FaShopify} from 'react-icons/fa'
import { IoIosArrowRoundForward } from "react-icons/io";
import  { Link } from 'react-router-dom'



const Hero = () => {
  return (
    <div  name='home' className=' w-full h-screen bg-zinc-200 flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='font-bold text-orange-700 animate__animated animate__fadeInLeft'>SALES UP TO 30% OFF</p>
                <h1 className='py-3 mb-2 md:text-4xl font-bold animate__animated animate__fadeInLeft' >Grab this stunning ensemble. 🎉</h1>
                <p className='text-[15px] text-black/55 font-bold mt-5 animate__animated animate__fadeInLeftBig'>features picked at a better value that ever Powerfull sensors to monites your fitness</p>
                <button className='border py-3 px-6 bg-slate-100 sm:w-[60%] my-4 flex items-center gap-3 hover:bg-white  hover:shadow-lg animate__animated animate__fadeInLeft'><FaShopify/><Link to="/shop"> Shop Now </Link><IoIosArrowRoundForward /></button>
        </div>
        <div>
            <img src={HeroImg} className=' animate__animated animate__bounceIn' alt="" />
        </div>
        
    </div>
</div>
  
  )
}

export default Hero
