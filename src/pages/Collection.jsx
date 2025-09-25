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
    <div className="relative min-h-screen">
      {showSearch && <SearchBar />}
      
      <div className='pt-20'> {/* Added padding top to push content down */}
        {/* Mobile Filter Button - Now at the top */}
        <div className='sm:hidden px-4 mb-4'>
          <button 
            onClick={() => setShowFilter(!ShowFilter)}
            className='w-full flex items-center justify-center gap-2 bg-white shadow-lg rounded-full p-3'
          >
            <span>FILTERS</span>
            <img
              className={`h-3 transition-transform duration-300 ${ShowFilter ? 'rotate-90' : ''}`}
              src={assets.down_arrow}
              alt=''
            />
          </button>
        </div>

        {/* Mobile Filters Panel */}
        {ShowFilter && (
          <div className="sm:hidden px-4 py-4 bg-white shadow-md mb-4">
            {/* Category Filter */}
            <div className='py-2'>
              <p className='mb-2 text-sm font-medium'>CATEGORIES</p>
              <div className='flex flex-wrap gap-3 text-sm font-light text-gray-700'>
                {['Necklace', 'Earings', 'Bangles', 'Anklets'].map((cat, i) => (
                  <label className='flex items-center gap-2' key={i}>
                    <input type="checkbox" className='w-4 h-4' value={cat} onChange={toggleCategory} />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SubCategory Filter */}
            <div className='py-2'>
              <p className='mb-2 text-sm font-medium'>TYPE</p>
              <div className='flex flex-wrap gap-3 text-sm font-light text-gray-700'>
                {['Gold', 'Diamond', 'Stone', 'Pearl'].map((type, i) => (
                  <label className='flex items-center gap-2' key={i}>
                    <input type="checkbox" className='w-4 h-4' value={type} onChange={toggleSubCategory} />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Desktop Filter Button - remains fixed */}
        <div 
          onClick={() => setShowFilter(!ShowFilter)} 
          className='hidden sm:flex fixed left-4 top-24 z-30 cursor-pointer bg-white shadow-lg rounded-full p-3 items-center gap-2'
        >
          <p>FILTERS</p>
          <img
            className={`h-3 transition-transform duration-300 ${ShowFilter ? 'rotate-90' : ''}`}
            src={assets.down_arrow}
            alt=''
          />
        </div>

        {/* Main Content */}
        <div className='px-2 sm:px-8 md:px-16 lg:px-24'>
          <div className='flex justify-between items-center text-base sm:text-2xl mb-6'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2 py-1'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by Price: Low-to-High</option>
              <option value="high-low">Sort by Price: High-to-Low</option>
            </select>
          </div>

          {/* Product Grid - Adjusted for larger products */}
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8'>
            {filterProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="aspect-square" // Forces square aspect ratio
              >
                <Productitem
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;