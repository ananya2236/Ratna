import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext'; // Make sure this path is correct
import Title from './Title'; // Make sure this path is correct
import Productitem from './Productitem'; // Make sure this path is correct

const RelatedProducts = ({ category, subcategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    // Debug log to see props and products
    console.log('RelatedProducts props:', category, subcategory);
    console.log('Products in context:', products);

    if (products && products.length > 0 && category && subcategory) {
      let productsCopy = [...products];

      // filter by category and subcategory (lowercase "c" as in your data)
      productsCopy = productsCopy.filter(
        (item) => item.category === category
      );
      productsCopy = productsCopy.filter(
        (item) => item.subcategory === subcategory
      );

      console.log('Filtered related products:', productsCopy);

      setRelated(productsCopy.slice(0, 5)); // show top 5
    } else {
      setRelated([]);
    }
  }, [products, category, subcategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={'Related'} text2={'Products'} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.length > 0 ? (
          related.map((item, index) => (
            <Productitem
              key={item._id || index}
              id={item._id}
              name={item.name || 'Unnamed'}
              price={item.price || 0}
              image={item.image}            />
          ))
        ) : (
          <p className="col-span-full text-gray-400 text-center">
            No related products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;