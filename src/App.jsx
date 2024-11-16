import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Display from './components/Display';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Item from './components/Items';
import PhoneSell from './components/PhoneSell';
import NewLetter from './components/NewLetter';
import Footer from './components/Footer';
import GetinTouch from './components/GetinTouch';
import Shop from './components/Shop';
import Popular from './components/Popular';
import Blog from './components/Blog';
import Discount from './components/Discount';
import DeliveryDetails from './components/DeliveryDetails';
import About from './components/About';
import Blogdisplay from './components/Blogdisplay';
import Feature from './components/Feature';
import Shopfeature from './components/Shopfeature';
import Details from './components/Details';
import Register from './components/userRegister/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={
            <>
              <Hero  />     
              <Category /> 
              <Shop/>
              <Product />  
              <Display />  
              <Popular/>
              <Item />   
              <Discount/>
              <PhoneSell />
              <Blog/> 
              <NewLetter />
              <DeliveryDetails/>
            </>
          } />

          <Route path="/Register" element={<Register />} />
          <Route path="/Shop" element={<Shopfeature />} />
          <Route path="/Features" element={<Feature />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/Blogdisplay" element={<Blogdisplay />} />
          <Route path="/Getintouch" element={<GetinTouch />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
