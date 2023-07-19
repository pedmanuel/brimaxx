import React, { useState, useEffect } from 'react';
import '../../App.css';
import { getProducts, getProductsCount } from '../../functions/product';
import ProductCard from '../cards/ProductCard';
import LoadingCard from '../cards/LoadingCard';
import { Pagination } from 'antd';

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(2);

 
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
    <div className="container mt-2 p-4 " style ={{fixed:'absolute'}}>
      <div>
        {loading ? (
          <LoadingCard count={3} />
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-md-4 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="row">
        <nav className="col-md-4 offset-md-4 text-center pt-5 p-3" style={{ background: "#F3F2EF", border: "none", color: 'cyan', fixed:'absolute'}}>
          <Pagination
            current={page}
            total={Math.ceil(productsCount/3 )*10}
            onChange={handlePageChange}
           style={{ border: "2px solid #F3F2EF", borderRadius: "20px", color: 'cyan', background: "#F3F2EF",fixed:'absolute' }}
           
           
          />
        </nav>
      </div>
    </div>
  );
}

export default NewArrivals; 