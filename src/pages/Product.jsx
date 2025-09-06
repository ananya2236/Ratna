import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.js';
import { assets } from '../assets/assets.js';

const Product = () => {

const {productId}=useParams();
const {products,currency}=useContext(ShopContext);
const [productData,setProductData]=useState(null);
const [image,setImage]=useState('');

const fetchProductData=async()=>{
  products.forEach((item)=>{
    if(item._id===productId){
      setProductData(item);
      setImage(item.image[0]);
      return;
    }
  })
}

useEffect(()=>{
  fetchProductData();
},[productId,products])

  return productData && image ? (
    <div className='border-t-2 pt-24 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-8 md:px-16 lg:px-24'>
      {/*------------------Product Data  -----------------*/}
      <div className='flex gap-1 sm:gap-12 flex-col sm:flex-row'>

        {/* -----------Product Images------------ */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img
                  onClick={()=>setImage(item)}
                  onMouseEnter={()=>setImage(item)} // Change main image on hover
                  src={item}
                  key={index}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer object-cover rounded-md'
                  style={{ maxWidth: '80px', maxHeight: '80px', minWidth: '60px', minHeight: '60px' }}
                  alt=' '
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%] flex items-center justify-center'>
            <img
              className='w-full h-auto max-h-[420px] max-w-[420px] object-contain rounded-lg'
              src={image}
              alt=''
              style={{ background: '#f9f9f9' }}
            />
          </div>
        </div>
        {/* -------Product Info------------ */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex item-center gap-1 mt-2'>
              <img src={assets.star} alt="" className="w-3.5" />
              <img src={assets.star} alt="" className="w-3.5" />
              <img src={assets.star} alt="" className="w-3.5" />
              <img src={assets.star} alt="" className="w-3.5" />
              <img src={assets.dull_star} alt="" className="w-3.5" />
              <p className='pl-2'>{122}</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            <button className='mt-10 cursor-pointer bg-black text-white px-8 py-3  text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product