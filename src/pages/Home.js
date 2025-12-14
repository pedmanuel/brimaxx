import React from 'react';
import Footer from '../components/nav/Footer';
import NewArrivals from '../components/home/NewArrivals';
import BestSeller from '../components/home/BestSeller';
import CategoryList from '../components/category/CategoryList';
import LatestProduct from '../components/home/LatestProduct';
import Carousel3D from '../components/home/Carousel3D';

const Home = () => {
  return (   
    <>  
      <div className="container-fluid">
        <Carousel3D />
        
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="mt-5">
              <h2 className="text-center mb-4" style={{ backgroundColor: 'rgb(71, 228, 24)', padding: '0,5px',  color: 'white' }}>Novos Produtos</h2>
                <NewArrivals />
                <NewArrivals />
              </div>
              <div className="mt-5">
                <h2 className="mb-4">Maquinas e Equipamentos</h2>
                <BestSeller />
              </div>
            </div>
            
            <div className="col-lg-3">
              <div className="mt-5">
                <h2 className="bordarleft mb-4">Materiais Agro</h2>
                <NewArrivals mapAsNews={true} />
              </div>
              <div className="mt-5">
                <h2 className="bordarleft mb-4">Ferragens</h2>
                <BestSeller mapAsNews={true} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12">
            <h2 className="text-center text-uppercase">🛍️ Categorias </h2>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-12">
              <CategoryList />
            </div>
          </div>
        </div>
        
      </div>
      <br/>
      <Footer />
    </>
  );
};

export default Home;
