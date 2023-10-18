import React, { useState, useEffect } from 'react';
import { getProducts } from '../../functions/product';
import ProductCard from '../cards/ProductCard';
import LoadingCard from '../cards/LoadingCard';

const NewsSubHighlight = ({ news }) => {
  return (
    <div className="news-sub-highlight">
      <img src={news.image} alt={news.title} />
      <h3>{news.title}</h3>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsSubHighlight;
