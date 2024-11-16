import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaSearch, FaHeart, FaShopify } from 'react-icons/fa';
import { IoCloseSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import p1 from '../assests/img/w1.png';
import { useDispatch, useSelector } from 'react-redux'; 
import { removeItem } from '../cartSlice';
import Registerlogo from "../assests/registerlogo/register.png";
import Googlelogo from "../assests/registerlogo/google.png";
import { FaArrowUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showElectronicsDropdown, setShowElectronicsDropdown] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const dispatch = useDispatch(); 
  const cartItems = useSelector((state) => state.cart.cartItems); 


  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    const userData = { name, email, password };
    localStorage.setItem('user', JSON.stringify(userData));
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');
    setIsModalOpen(false);
    setIsLoginModalOpen(true);
    setIsModalOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
        toast.success('Login successful!');  
    } else {
        setErrorMessage('Invalid email or password.');
        toast.error('Invalid email or password.');  
    }
};

  const handleNav = () => {
    setNav(!nav);
  };
  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };
  const Click = () => {
    setShowDetails(false);
  };
  const closeNav = () => {
    setNav(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsLoginModalOpen(false);
    setNav(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsModalOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  

  return (
    <div className="container inset-x-0 mx-auto p-3 flex justify-between items-center w-full z-50">
      <h1 className="text-2xl font-bold text-black"><Link to="/">Faysal's E-shop</Link></h1>
      
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 items-center font-sans font-bold">
        <li className="p-4 text-black"><Link to="/">Home</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Features">Features</Link></li>
        <li><Link to="/Shop">Shop</Link></li>
        <li><Link to="/Blogdisplay">Blog</Link></li>
        <li><Link to="/Getintouch">Contact</Link></li>
      </ul>

      {/* Desktop icons */}
      <div className="hidden md:flex gap-10 items-center">
      <Link to="/shop" onClick={closeNav}><FaSearch className="text-black" /></Link>
        <FaHeart className="text-black" />
        <div onClick={handleDetails}>
          {showDetails ? <FaShopify className="text-black" /> : <FaShopify size={20} />}
          <div className='absolute top-3 text-red-500 py-3 px-4 bg-transparent text-[13px]'>
          {totalQuantity}
          </div>
        </div>
        {!isLoggedIn && (
          <button onClick={openModal} className="border px-5 py-1 rounded-sm hover:bg-slate-100">
            Register
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-50 z-40 transition-transform ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-white p-5 h-full">
        <h1 className="text-2xl font-bold text-black text-center mb-12 "><Link to="/">Faysal's E-shop</Link></h1>
          <ul className="flex flex-col gap-4 items-center">
            <li><Link to="/" onClick={closeNav}>Home</Link></li>
            <hr className=''/>
            <li><Link to="/About" onClick={closeNav}>About Us</Link></li>
            <li><Link to="/Features" onClick={closeNav}>Features</Link></li>
            <li><Link to="/Shop" onClick={closeNav}>Shop</Link></li>
            <li><Link to="/Blogdisplay" onClick={closeNav}>Blog</Link></li>
            <li><Link to="/Getintouch" onClick={closeNav}>Contact</Link></li>
            <div className="flex gap-10 items-center">
        <div className='mt-5 flex gap-11'>
        <FaSearch className="text-black" />
        <FaHeart className="text-black" />
        <div onClick={handleDetails}>
          {showDetails ? <FaShopify className="text-black" /> : <FaShopify size={20} />}
        </div>
        </div>
  
      </div>
            <div className='mt-5'>
            {!isLoggedIn && (
              <button onClick={openModal} className="border px-28 py-1 rounded-sm hover:bg-slate-100">
              Register
            </button>
            )}
            </div>
            <button onClick={closeNav} className="w-full rounded-md font-semibold absolute bottom-0 left-0 bg-gray-400 py-3 hover:bg-gray-100 mt-4">
          Close
        </button>
          </ul>
        </div>
      </div>

      {/* Cart */}
      <div className={`${showDetails ? 'fixed' : 'hidden'} right-0 top-0 w-80 h-full bg-zinc-200 z-50`}>
      <div className="m-8">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-semibold">YOUR CART</h1>
          <button onClick={closeDetails}>
            <IoClose size={25} />
          </button>

        </div>
        

        {cartItems.map((item, index) => (
          <div className="flex gap-4 mt-7" key={index}>
            <div>
              <img src={item.image} className="w-20 border bg-gray-300 p-1" alt="" />
            </div>
            <div>
              <h1 className="text-[15px] font-bold">{item.name}</h1>
              <p className="text-[15px] font-bold text-black/30">{item.price}</p>
              <button
                onClick={() => dispatch(removeItem(index))}
                className="w-full bg-black/30 hover:bg-black/50 hover:text-gray-100 flex items-center justify-center py-1 mt-6 rounded text-white"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/features">
        <button
          className="w-full rounded-md font-semibold absolute bottom-0 left-0 bg-gray-400 py-3 hover:bg-gray-100 mt-4"
        >
          Check Out
        </button>
      </Link>
    </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <button onClick={closeModal} className="text-2xl absolute top-5">
              <IoCloseSharp />
            </button>
            <div className="w-96 h-auto">
              <div className='flex justify-center h-24'>
                <img src={Registerlogo} alt="Register Logo" />
              </div>
              <h1 className='text-center text-3xl font-semibold mt-4'>Register Here !</h1>
              <button className='w-full'>
                <div className='flex items-center border p-1 mt-4'>
                  <div className='w-32'>
                    <img src={Googlelogo} className='w-5' alt="Google Logo" />
                  </div>
                  <div>
                    <h1 className='font-semibold text-[11px] text-gray-500'>Connect with Google</h1>
                  </div>
                </div>
              </button>
              <div className="flex items-center my-4 mt-6">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="px-3 text-[11px] text-gray-500">OR REGISTER WITH EMAIL</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div> 
              <form onSubmit={handleSubmit} className="p-4">
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-2 py-2 border mt-4" />
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-2 py-2 border mt-4" />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-2 py-2 border mt-4" />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-2 py-2 border mt-4" />
                {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
                <button type="submit" className="w-full bg-blue-600 text-white py-2 mt-6"  >Register</button>
              </form>
              <div className='flex justify-center p-4 mt-1'>
               <p className='font-sans text-gray-500 text-[13px]'>Dont have an account yet? </p>
               <p className='font-sans text-blue-700 text-[13px] hover:underline cursor-pointer' onClick={openLoginModal}>Sign up</p>
             </div>
            </div>
          </div>
        </div>
      )}

{isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-lg">
            <button onClick={closeLoginModal} className="text-2xl absolute top-15">
              <IoCloseSharp />
            </button>
            <div className="w-96 h-auto">
              <img src={Registerlogo} alt="Register Logo" className="h-24 mx-auto" />
              <h1 className='text-center text-3xl font-semibold mt-4'>Welcome Back</h1>
             <button className='w-full'>
               <div className='flex items-center border p-1 mt-4'>
                 <div className='w-32'>
                   <img src={Googlelogo} className='w-5' alt="Google Logo" />
                 </div>
                 <div>
                   <h1 className='font-semibold text-[11px] text-gray-500'>Connect with Google</h1>
                 </div>
               </div>
             </button>
             <div className="flex items-center my-4 mt-6">
               <hr className="flex-grow border-t border-gray-300" />
               <span className="px-3 text-[11px] text-gray-500">OR REGISTER WITH EMAIL</span>
               <hr className="flex-grow border-t border-gray-300" />
             </div> 
              <form onSubmit={handleLogin} className="p-4">
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-2 py-2 border mt-4" />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-2 py-2 border mt-4" />
                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white">
                  Login
                </button>
              </form>
              <div className='flex justify-center p-4 mt-1'>
               <p className='font-sans text-gray-500 text-[13px]'>Already have an account? </p>
               <p className='font-sans text-blue-700 text-[13px] hover:underline cursor-pointer' onClick={openModal}>Sign In</p>
             </div>
            </div>
          </div>
        </div>
      )}

      {/* <div className='fixed  bottom-3 right-12 border p-4 bg-slate-300 rounded-f'>
      <FaArrowUp />
      </div> */}
    </div>
  );
};

export default Navbar;
