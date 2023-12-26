import React, { useState, useEffect } from 'react';
import '../../App.css';
import { getProducts, getProductsCount } from '../../functions/product';
import ProductCard from '../cards/ProductCard';
import LoadingCard from '../cards/LoadingCard';
import { Pagination } from 'antd';

const NewArrivals = ({ mapAsNews }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then((res) => setProductsCount(res.data));
  }, []);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const loadAllProducts = () => {
    setLoading(true);
    // sort, order, limit
    getProducts("createdAt", "desc", page).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  return (
    <div className={`news-card-grid ${mapAsNews ? 'news-card-layout' : 'row'}`} containerA >
      {loading ? (
        <LoadingCard count={6} />
      ) : (
        products.map((product) => (
          <div key={product._id} className={`news-card ${mapAsNews ? 'news-card-item' : 'col-md-4 mb-4'}`}>
            <ProductCard product={product} />
          </div>
        ))
      )}
    </div>
  );
}

export default NewArrivals;