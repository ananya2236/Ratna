import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.js';
import { assets } from '../assets/assets.js';
import RelatedProducts from '../components/RelatedProducts.jsx';

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
            <hr className='mt-8 sm:w-4/5 mb-5'/>
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash on Delivery is available on this produc.</p>
              <p>Easy Retrun and Exchange Policy in 7 days.</p>
            </div>
        </div>
      </div>
      
      {/* ---------- Description and Review Section --------------- */}
      <div className='mt-20'>
        <div className='flex'>
          {/* Tabs */}
          <p className='border border-gray-300 px-5 py-3 text-sm'>Description</p>
          <p className='border border-gray-300 px-5 py-3 text-sm'>Reviews (122)</p>
        </div>

        {/* Description content */}
        <div className='flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500'>
          <p>
            Crafted with precision and passion, our jewellery blends traditional artistry with contemporary design. Each piece is made from high-quality, ethically sourced materials and finished by skilled artisans to ensure brilliance, durability, and a luxurious feel.
          </p>
          <p>
            Whether you are celebrating a milestone, gifting a loved one, or simply indulging yourself, our collections — from delicate necklaces to statement earrings — are designed to add sparkle to every moment.
          </p>
          <p>
            We pride ourselves on authenticity, quality, and exceptional customer care. Your purchase isn’t just jewellery; it’s a story, a memory, and a style signature you’ll cherish for years to come.
          </p>
        </div>

        {/* -------Display Related Products */}
        <RelatedProducts category={productData.category} subcategory={productData.subcategory}/>


      </div>


    </div>
  ) : <div className='opacity-0'></div>
}

export default Product