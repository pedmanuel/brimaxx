import React, { useState, useEffect } from 'react';
import '../App.css';

import Jumbotron from '../components/cards/Jumbotron';
import Footer from '../components/nav/Footer';
import NewArrivals from '../components/home/NewArrivals';
import BestSeller from '../components/home/BestSeller';

function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  

return (
<>
  <div className="jumbotron text-center" style={{ backgroundColor: '#F3F2EF', color: '#4B0082', maxWidth: '1500px',  marginLeft: 'auto', marginRight: 'auto', }}>
    <Jumbotron strings={["Venha ver todas as Novidades", "Mais Vendidos ", "Mais Desejados"]} />

  </div>
    <div 
      className="container"
        style={{
          border: "5px solid white",
          borderRadius: "15px",
          backgroundColor: '#F3F2EF',
          color: '#4B0082',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1500px', // Define a largura (esquerda ou direita)  do container se desejar
        }} 
    >

      <div className="jumbotron text-center" style={{ backgroundColor: '#F3F2EF', color: '#4B0082' }}>
        <Jumbotron strings={["Discover the", "latest products", "from Apple"]} />
      </div>
      <MemoizedNewArrivals currentPage={currentPage} />
      <div className="jumbotron text-center" style={{ backgroundColor: '#F3F2EF', color: '#4B0082' }}>
        <Jumbotron strings={["Best Sellers", "Shop our most", "popular products"]} />
      </div>
      <MemoizedBestSeller currentPage={currentPage} />
      
     
    </div>
    <Footer/>
     </>
    
  );
}

const MemoizedNewArrivals = React.memo(NewArrivals);
const MemoizedBestSeller = React.memo(BestSeller);

export default Home;