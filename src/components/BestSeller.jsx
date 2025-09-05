import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.js';
import Title from './Title';
import Productitem from './Productitem.jsx';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const bestProducts = products.filter(item => item.bestseller);
        const shuffled = shuffleArray(bestProducts);
        setBestSeller(shuffled.slice(0, 4));
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque assumenda quo tempore quam ipsum esse adipisci asperiores corrupti perspiciatis! Ducimus, porro nobis voluptatum excepturi repudiandae nesciunt neque omnis voluptas itaque.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller;
