import React, { useState, useEffect } from 'react';
import styles from "../../App.css";
import {  getProducts, getProductsCount } from '../../functions/product';
import ProductCard from '../cards/ProductCard';
import Footer from '../nav/Footer'
import LoadingCard from '../cards/LoadingCard';
import { Row, Col } from "antd";
import { Pagination } from "antd";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);


  useEffect(() => {
    loadAllProducts();
  }, [page]);

  useEffect(()=>{
    getProductsCount().then((res) => setProductsCount(res.data));
  },[]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };
  
  const loadAllProducts = () => {
   setLoading (true);
    getProducts("createdAt", "desc", page).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  return (
  <div style ={{fixed:'absolute'}}>
      
      <div className="container mt-2  p-6" style ={{fixed:'absolute'}}>
        {loading ? ( 

         < LoadingCard count={3}/>
          ): ( 
            <Row gutter={[20, 20]}>       
              {products.map((product) => (
                <div key={product._id} className="col-md-4 mb-4">
                  <ProductCard className="border shadow-sm" product={product} />
                </div>
              ))}

          </Row>

        
          )}

    <div className="row  "   >
    <nav className="col-md-4 offset-md-4 text-center pt-5 p-3" style={{ background: "#F3F2EF", border: "none", color: 'cyan' }}>
          <Pagination
            current={page}
            total={Math.ceil(productsCount/3 )*10}
            onChange={handlePageChange}
           style={{ border: "2px solid #F3F2EF", borderRadius: "20px", color: 'cyan', background: "#F3F2EF", fixed:'absolute' }}
           
           
          />
        </nav>
    </div>   
</div>
 </div>
  );
}

export default BestSeller;