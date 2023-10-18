import React, { useState, useEffect } from 'react';
import '../../App.css';
import { getProducts } from '../../functions/product';
import ProductCard from '../cards/ProductCard';
import LoadingCard from '../cards/LoadingCard';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const LatestProductsCarousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    setLoading(true);
    getProducts("createdAt", "desc").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };

  return (
    <div className="news-highlight">
      
      {loading ? (
        <LoadingCard count={1} />
      ) : (
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          dynamicHeight={false}
          transitionTime={3000}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <Button
                type="text"
                onClick={onClickHandler}
                style={{
                  left: "10px",
                  zIndex: 2,
                }}
                icon={<LeftOutlined />}
              />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <Button
                type="text"
                onClick={onClickHandler}
                style={{
                  right: "50px",
                  zIndex: 2,
                }}
                icon={<RightOutlined />}
              />
            )
          }
        >
          {products.map(product => (
            <div key={product.id}>
              <ProductCard product={product}  style={{  height: "20%", width: "20%" }} />
              {/* Aplicar a classe à imagem aqui */}
              <style>
                {`
                  .carousel-root .carousel .slider-wrapper .slider .slide img {
                   
                  }
                `}
              </style>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default LatestProductsCarousel;

