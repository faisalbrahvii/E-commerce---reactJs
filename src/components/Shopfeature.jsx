import React, { useState } from 'react';
import { MdOutlineSort } from "react-icons/md";
import { IoMdSearch, IoIosClose } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { product, womencategories , mencategories , bagcategories , shoescategries , watchescategories } from '../Data/SeoData.js'; 

const Shopfeature = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchCollapsed, setSearchCollapsed] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) setSearchCollapsed(false);
  };

  const SearchtoggleCollapse = () => {
    setSearchCollapsed(!searchCollapsed);
    setIsCollapsed(false);
  };

  const filteredProducts = 
  (selectedCategory === 'all' ? product : 
  selectedCategory === 'womencategories' ? womencategories :
  selectedCategory === 'mencategories' ? mencategories :
  selectedCategory === 'bagcategories' ? bagcategories :
  selectedCategory === 'shoescategries' ? shoescategries :
  selectedCategory === 'watchescategories' ? watchescategories :
  []).filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (id) => {
    console.log("Clicked product ID:", id);
  };
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
      <ul className="flex gap-4 text-sm sm:text-base text-slate-500 font-semibold mb-4 sm:mb-0">
  <li 
    className={`underline hover:underline underline-offset-4 ${selectedCategory === 'all' ? 'text-black' : ''}`}
    onClick={() => setSelectedCategory('all')}
  >
    All Products
  </li>
  <li 
    className={`hover:underline underline-offset-4 ${selectedCategory === 'womencategories' ? 'text-black' : ''}`}
    onClick={() => setSelectedCategory('womencategories')}
  >
    Women
  </li>
  <li 
    className={`hover:underline underline-offset-4 ${selectedCategory === 'mencategories' ? 'text-black' : ''}`}
    onClick={() => setSelectedCategory('mencategories')}
  >
    Men
  </li>
  <li 
    className={`hover:underline underline-offset-4 ${selectedCategory === 'bagcategories' ? 'text-black' : ''}`}
    onClick={() => setSelectedCategory('bagcategories')}
  >
    Bag
  </li>
  <li 
    className={`hover:underline underline-offset-4 ${selectedCategory === 'shoescategries' ? 'text-black' : ''}`}
    onClick={() => setSelectedCategory('shoescategries')}
  >
    Shoes
  </li>
  <li 
    className={`hover:underline underline-offset-4 ${selectedCategory === 'watchescategories' ? 'text-black' : ''}`}
    onClick={() => setSelectedCategory('watchescategories')}
  >
    Watches
  </li>
</ul>

        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 border px-6 py-2 rounded text-black/70 text-xs sm:text-sm"
            onClick={toggleCollapse}
          >
            {isCollapsed ? <IoIosClose /> : <MdOutlineSort />} Filters
          </button>
          <button
            className="flex items-center gap-2 border px-6 py-2 rounded text-black/70 text-xs sm:text-sm"
            onClick={SearchtoggleCollapse}
          >
            {searchCollapsed ? <IoIosClose /> : <IoMdSearch />} Search
          </button>
        </div>
      </div>

      {/* Search Section */}
      <section className={`transition-all duration-500 ease-in-out overflow-hidden ${searchCollapsed ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex items-center gap-2 p-3 border rounded-lg mb-4">
          <IoMdSearch size={20} />
          <input 
            type="text"
            className="w-full p-2 border-none bg-slate-100 outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      <section className={`transition-all duration-500 ease-in-out overflow-hidden ${isCollapsed ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg shadow-md mb-4">
          <div>
            <h3 className="font-semibold text-base mb-2">Sort By</h3>
            <ul className="space-y-1 text-gray-600">
              <li className="hover:text-gray-900 cursor-pointer">Default</li>
              <li className="hover:text-gray-900 cursor-pointer">Popularity</li>
              <li className="hover:text-gray-900 cursor-pointer">Average Rating</li>
              <li className="hover:text-gray-900 cursor-pointer">Newness</li>
              <li className="hover:text-gray-900 cursor-pointer">Price: Low to High</li>
              <li className="hover:text-gray-900 cursor-pointer">Price: High to Low</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2">Price</h3>
            <ul className="space-y-1 text-gray-600">
              <li className="hover:text-gray-900 cursor-pointer">All</li>
              <li className="hover:text-gray-900 cursor-pointer">$0.00 - $50.00</li>
              <li className="hover:text-gray-900 cursor-pointer">$50.00 - $100.00</li>
              <li className="hover:text-gray-900 cursor-pointer">$100.00 - $150.00</li>
              <li className="hover:text-gray-900 cursor-pointer">$150.00 - $200.00</li>
              <li className="hover:text-gray-900 cursor-pointer">$200.00+</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2">Color</h3>
            <ul className="space-y-1 text-gray-600">
              {['Black', 'Blue', 'Grey', 'Green', 'Red', 'White'].map((color, index) => (
                <li key={index} className="flex items-center space-x-2 cursor-pointer hover:text-gray-900">
                  <span className={`w-3 h-3 rounded-full ${color.toLowerCase() === 'white' ? 'border' : `bg-${color.toLowerCase()}`}`} />
                  <span>{color}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['Fashion', 'Lifestyle', 'Denim', 'Streetstyle', 'Crafts'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-gray-600 cursor-pointer hover:bg-gray-300 text-xs sm:text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
  {filteredProducts.map(item => (
    <Link to={`/details/${item.id}`} key={item.id}>
      <div className="relative w-full p-6 border rounded-lg group">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-fit h-fit object-cover rounded-t" 
        />
        
        <div className="absolute inset-0  bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 flex justify-center items-center rounded-lg transition-opacity duration-300">
          <p className="text-[13px] font-semibold absolute top-1 left-1">{item.des}</p>
          <p>View Product</p>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <h1 className="font-semibold text-sm sm:text-base text-slate-600">{item.name}</h1>
        </div>
        <p className="text-gray-500 mt-1 text-xs sm:text-sm">{item.price}</p>
      </div>
    </Link>
  ))}
</div>

</section>

    </div>
  );
};

export default Shopfeature;
