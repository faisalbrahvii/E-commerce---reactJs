import React from "react";
import HeroImg from "../assests/img/herro.png";
import { FaShopify } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex items-center justify-center  pt-[80px] overflow-hidden"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] mx-auto px-4">
        <div className="flex flex-col justify-center w-full px-4 py-8 space-y-4 md:space-y-6">
          <p className="font-bold text-orange-700 text-lg animate__animated animate__fadeInLeft">
            SALES UP TO 30% OFF
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animate__animated animate__fadeInLeft">
            Grab this stunning ensemble. 🎉
          </h1>
          <p className="text-sm text-black/55 font-bold animate__animated animate__fadeInLeftBig">
            Features picked at a better value than ever. Powerful sensors to
            monitor your fitness.
          </p>
          <button className="border py-3 px-6 bg-slate-100 sm:w-[70%] md:w-[60%] flex items-center gap-3 hover:bg-white hover:shadow-lg animate__animated animate__fadeInLeft">
            <FaShopify />
            <Link to="/shop">Shop Now</Link>
            <IoIosArrowRoundForward />
          </button>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={HeroImg}
            className="w-[200px] sm:w-[250px] md:w-[300px] animate__animated animate__bounceIn"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
