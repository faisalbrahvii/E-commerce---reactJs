import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";
import  { category } from '../Data/Data.js'; 
import { Link } from 'react-router-dom';
const Category = () => {
  return (
    <div className='container mx-auto mt-5'>
      <div className='flex justify-between p-5'>
        <div className='flex justify-center gap-2 items-center' > 
          <BiCategoryAlt />
          <p className=' text-red-700 animate__animated animate__fadeInUp'> Category</p>
        </div>
      </div>
      <div className=''>
        <h1 className='sm:text-lg md:text-3xl  font-bold ml-5 text-black/65 animate__animated animate__fadeInUp '>Trending Categories</h1>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-10 gap-2 p-2 '>
        {category.slice(0,4).map((item , index) => ( 
          <Link to={`/details/${item.id}`} key={item.id}>
            <div key={index} className='flex  items-center animate__animated animate__fadeInUp'>
            <img src={item.image} alt="" className='sm:max-w-[150px]    ' />
            <div>
            <p  className='font-bold  text-black/20  text-[17px]'>{item.name}</p>
            <p  className='font-bold text-gray-500  text-[15px]'>{item.category}</p>

            </div>
          </div>
          </Link>
          
        ))}
      </div>
    </div>
  )
}

export default Category
