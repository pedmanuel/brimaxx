import React from 'react';
import Footer from '../components/nav/Footer';
import NewArrivals from '../components/home/NewArrivals';
import BestSeller from '../components/home/BestSeller';
import LatestProduct from '../components/home/LatestProduct';
import Carousel3D from '../components/home/Carousel3D';

const Home = () => {
  return (   
    <>
        <Carousel3D/>
      <div className="container">
      
        <div className="content-wrapper">
          
          <div className="main-content"  style={{ textAlign: "center" }}>
            {/* Área de Destaque */}
            {/* Seu conteúdo principal aqui */}
            <h2 className='' style={{ display: "inline-block" }} >Ferramentas</h2>
               <BestSeller />
            <h2 className='' style={{ display: "inline-block" }} >Maquinas e Equipamentos</h2>
                 <NewArrivals />
          </div>
          <div className="sidebar" style={{ marginTop: "30px" }}>
            {/* Barra lateral com as últimas notícias */}
            <h2 className='bordarleft'>Materiais Agro</h2>
            <NewArrivals mapAsNews={true} />
            <h2 className='bordarleft'>Ferragens</h2>
            <BestSeller mapAsNews={true} />
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;