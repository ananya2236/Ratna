import React, { useEffect } from 'react'
import { useContext } from 'react';
import { ShopContext } from "../context/ShopContext.js";
import Title from './Title.jsx';
import Productitem from './Productitem.jsx';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = React.useState([]);

    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    useEffect(() => { 
        if (Array.isArray(products)) {
            const shuffled = shuffleArray(products);
            setLatestProducts(shuffled.slice(0, 8));
        }
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-md text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatibus alias ullam? Quo repellendus eligendi quia excepturi rerum ipsa laudantium quisquam, a consequatur, quae aut? Atque magnam earum sed incidunt!
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection;
