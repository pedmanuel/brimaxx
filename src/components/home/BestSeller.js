import React, { useState, useEffect } from 'react';
import { getProducts } from '../../functions/product';
import ProductCard from '../cards/ProductCard';
import LoadingCard from '../cards/LoadingCard';

const BestSeller = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadBestSellers();
  }, []);

  const loadBestSellers = () => {
    setLoading(true);
    // Load the best-selling products (adjust the parameters as needed)
    getProducts('sold', 'desc', 1, 24) // Load up to 24 best-selling products
      .then((res) => {
        setBestSellers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error loading best sellers', error);
        setLoading(false);
      });
  };

  return (
    <div className="best-seller-container ">
      <h2 className=''> </h2>
      <div className="best-seller-grid">
        {loading ? (
          <LoadingCard count={24} />
        ) : (
          bestSellers.map((product) => (
            <div key={product._id} className="best-seller-item">
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BestSeller;