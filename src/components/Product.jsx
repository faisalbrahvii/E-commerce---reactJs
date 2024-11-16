import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import  { product } from '../Data/Data.js'; 
import { Link } from 'react-router-dom';
import { disproduct } from '../Data/SeoData.js';

const Product = () => {
    const [showProducts, setShowProducts] = useState(false); 

  const toggleProducts = () => {
    setShowProducts(!showProducts); 
  };
  return (
    <div className='container mx-auto mt-5'>
      <div className='flex justify-between p-5'>
        <div className='flex justify-center gap-2 items-center' > 
          <MdOutlineProductionQuantityLimits className='animate__animated animate__fadeInLeft'/>
          <p className=' text-red-700 animate__animated animate__fadeInUp'>Product</p>
        </div>
      
        <div className=''>
          <button className='flex gap-3 font-bold text-black/70 items-center sm:text-sm md:text-[14px] animate__animated animate__fadeInLeft'>View all products <IoIosArrowRoundForward  size={25} className='text-red-700 animate__animated animate__fadeInLeft'/> </button>
        </div>
      </div>
      <div className=''>
        <h1 className='sm:text-lg md:text-3xl font-bold ml-5 text-black/65 animate__animated animate__fadeInUp'>latest Products</h1>
      </div>
     
     <div className='grid sm:grid-cols-2 md:grid-cols-4 text-center lg:grid-cols-5  mt-10 p-5 gap-4'>
        {disproduct.slice(0,5).map((item , index)=>{
            return(
          <Link to={`/details/${item.id}` } key={item.id} >
          <div className='border p-3 shadow-md  transition duration-200 ease-in-out transform hover:translate-y-[-12px] hover:shadow-md' key={index}>
                <div className='bg-slate-50'>
                <img src={item.image} alt="" className='' />
             </div>
             <div className='mt-4 flex  justify-center'>
                 <CiStar  className='text-orange-500' />
                 <CiStar  className='text-orange-500' />
                 <CiStar  className='text-orange-500' />
                 <CiStar  className='text-orange-500' />
                 <CiStar  className='text-orange-500' />    
             </div>
             <div className='mt-2'>
                 <p className='font-bold text-sm'>Console Leather & Canvaa Blogs</p>
             </div>
             <div className='flex gap-3 mt-2 mb-3 justify-center'>
                 <h3 className='font-bold text-sm'>$29.99</h3>
                 <h4 className='text-slate-500 text-sm'>$49.99</h4>
             </div>
               </div> 
          </Link>
                    
            )
        })}
      
     </div>
     {showProducts && ( 
        <div className='grid sm:grid-cols-2 md:grid-cols-4 text-center lg:grid-cols-5  mt-10 p-5 gap-4'>
       {product.slice(5,10).map((item, index) => {
    return (
        <div className='border p-4 shadow-md transition duration-200 ease-in-out transform hover:translate-y-[-12px] hover:shadow-md' key={index}>
            <div className='bg-slate-50'>
                <img src={item.image} alt="" />
            </div>
            <div className='mt-4 flex justify-center'>
                <CiStar  className='text-orange-500' />
                <CiStar  className='text-orange-500' />
                <CiStar  className='text-orange-500' />
                <CiStar  className='text-orange-500' />
                <CiStar  className='text-orange-500' />    
            </div>
            <div className='mt-2'>
                <p className='font-bold text-sm'>Console Leather & Canvas Bags</p>
            </div>
            <div className='flex gap-3 mt-2 mb-3 justify-center'>
                <h3 className='font-bold'>$29.99</h3>
                <h4 className='text-slate-500'>$49.99</h4>
            </div>
        </div>     
    );
})}

      
     </div>
      )}
     <div className='flex justify-center'>
     <button className='px-8 py-5 bg-slate-100 rounded animate__animated animate__fadeInUp' onClick={toggleProducts}>View All Products</button>
     </div>
    </div>
  )
}

export default Product
