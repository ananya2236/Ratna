import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24">
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='w-32 mb-5' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sequi inventore doloribus cumque at quisquam neque quis expedita perspiciatis, non impedit minima. Voluptatem excepturi dicta accusantium nemo harum recusandae eius!</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to='/'><li>Home</li></Link>
                <li>About US</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 34509 12308</li>
                <li>contact@noorbazar.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ noorbazar.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer