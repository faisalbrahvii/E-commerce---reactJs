import React from 'react';
import firstImage from '../assest/blogdisplay/cone.jpg';
import SecImage from '../assest/blogdisplay/ctwo.jpg';
import ThreeImage from '../assest/blogdisplay/cthree.jpg';
import FourImage from '../assest/blogdisplay/csix.jpg';
import FiveImage from '../assest/blogdisplay/cfive.jpg';
import SixImage from '../assest/blogdisplay/cfour.jpg';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const Blogdisplay = () => {
  return (
    <div className="p-4">
     

      <section className="w-full h-48 sm:h-64 bg-black flex justify-center items-center ">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Blog</h1>
      </section>

      <section className="my-8 mx-4 sm:mx-12 md:mx-24 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          {[firstImage, SecImage, ThreeImage].map((image, index) => (
            <div key={index} className="mb-12">
              <div className="relative">
                <div className="absolute top-4 left-4 p-3 bg-white/90 text-center">
                  <h1 className="text-lg sm:text-2xl font-bold">22</h1>
                  <p className="text-xs sm:text-sm font-bold text-black/50">Jan 2024</p>
                </div>
                <img src={image} className="w-full h-48 sm:h-72 object-cover" alt="Blog post" />
              </div>
              <div className="mt-6">
                <h1 className="text-lg sm:text-xl font-bold mb-3">
                  {index === 0 ? '8 Inspiring Ways to Wear Dresses in the Winter' : index === 1 ? 'The Great Big List of Men\'s Gifts for the Holidays' : '5 Winter-to-Spring Fashion Trends to Try Now'}
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm font-bold mb-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque at doloribus facere eos rerum.
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <div className="flex gap-2 text-xs sm:text-sm text-gray-400">
                    <p>by <span className="text-black/75">Admin</span> |</p>
                    <p>StreetStyle, Fashion, Couple |</p>
                    <p>8 Comments</p>
                  </div>
                  <div className="flex items-center gap-2 text-black/55 hover:text-black/65">
                    <p className="font-bold">CONTINUE READING</p>
                    <MdOutlineArrowRightAlt size={20} className="text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <div className="relative">
            <input
              type="text"
              className="w-full border rounded-full py-2 pl-10 pr-4 placeholder-gray-400"
              placeholder="Search"
            />
            <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black/80">Categories</h1>
            <div className="mt-4 space-y-2">
              {["Fashion", "Beauty", "Street Style", "Life Style", "DIY & Crafts"].map((category) => (
                <p key={category} className="text-gray-400 font-bold hover:text-gray-500">{category}</p>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black/80">Featured Products</h1>
            {[FourImage, FiveImage, SixImage].map((img, i) => (
              <div key={i} className="flex items-center gap-3 my-3">
                <img src={img} className="w-20 h-20 object-cover" alt="Featured Product" />
                <div className="text-sm">
                  <h1 className="text-gray-600">Product Name Here</h1>
                  <p className="text-gray-400">$19.00</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black/80">Archive</h1>
            <div className="mt-4 space-y-2">
              {[
                { month: 'July 2019', count: 35 },
                { month: 'March 2019', count: 32 },
                { month: 'Sep 2019', count: 20 },
                { month: 'Jun 2012', count: 10 },
                { month: 'April 2020', count: 14 },
                { month: 'Dec 2017', count: 31 },
                { month: 'Nov 2012', count: 70 }
              ].map((archive) => (
                <div key={archive.month} className="flex justify-between items-center text-gray-400 hover:text-gray-500">
                  <p>{archive.month}</p>
                  <p>({archive.count})</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black/80">Tags</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              {["Fashion", "LifeStyle", "Denim", "StreetStyle", "Crafts"].map((tag) => (
                <button key={tag} className="border rounded-xl bg-slate-50 text-xs py-1 px-4">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogdisplay;
