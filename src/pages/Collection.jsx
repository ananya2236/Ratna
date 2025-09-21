import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import { useContext } from 'react';
import { ShopContext } from "../context/ShopContext.js";
import { assets } from '../assets/assets.js';
import Title from '../components/Title.jsx';
import Productitem from '../components/Productitem.jsx';
import {motion} from 'framer-motion';

const Collection = () => {
  const { products , search, showSearch } = useContext(ShopContext);
  const [ShowFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const applyFilter = () => {
    let productsCopy = Array.isArray(products) ? products.slice() : [];

    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategory)); // make sure your data has `subcategory`
    }

    productsCopy = shuffleArray(productsCopy); // Shuffle
    setFilterProducts(productsCopy);
  };

  const sortProducts=()=> {
    let fpCopy=filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subcategory,search,showSearch]);

  useEffect(() => {
    sortProducts();
  },[sortType]);

  return (
    <div>
    {showSearch && <SearchBar />}
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-30 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <div onClick={() => setShowFilter(!ShowFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          <p>FILTERS</p>
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${ShowFilter ? 'rotate-90' : ''}`}
            src={assets.down_arrow}
            alt=''
          />
        </div>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Necklace', 'Earings', 'Bangles', 'Anklets'].map((cat, i) => (
              <p className='flex gap-2' key={i}>
                <input type="checkbox" className='w-3' value={cat} onChange={toggleCategory} /> {cat}
              </p>
            ))}
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Gold', 'Diamond', 'Stone', 'Pearl'].map((type, i) => (
              <p className='flex gap-2' key={i}>
                <input type="checkbox" className='w-3' value={type} onChange={toggleSubCategory} /> {type}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low-to-High</option>
            <option value="high-low">Sort by: High-to-Low</option>
          </select>
        </div>

        {/* Product Cards with Animation */}
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-9'>
          {
            filterProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Productitem
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  );
};

export default Collection;
