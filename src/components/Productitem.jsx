import React, { useContext }from 'react'
import { ShopContext } from '../context/ShopContext.js'
import { Link } from 'react-router-dom'

const Productitem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className='w-full aspect-square bg-white flex items-center justify-center overflow-hidden'>
            <img className='w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105' src={image[0]} alt=''/> 
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default Productitem
