import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx';
import Collection from './pages/collection.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/cart.jsx';
import Login from './pages/login.jsx';
import Placeorder from './pages/placeorder.jsx';
import Orders from './pages/orders.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import SearchBar from './components/SearchBar.jsx';

const App = () => {
  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={
          <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Collection />
          </div>
        }/>
        <Route path='/about' element={
          <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <About />
          </div>
        }/>
        <Route path='/contact' element={
          <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Contact />
          </div>
        }/>
        <Route path='/product/:productId' element={
          <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Product />
          </div>
        }/>
        <Route path='/cart' element={
          <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Cart />
          </div>
        }/>
        <Route path='/login' element={
          <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Login />
          </div>
        }/>
        <Route path='/place-order' element={
          <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Placeorder />
          </div>
        }/>
        <Route path='/orders' element={
          <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Orders />
          </div>
        }/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App