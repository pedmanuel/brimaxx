import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const Carousel3D = () => {
  const noticias = [
    {
      id: 1,
      title: 'BRIMAX - ANGOLA',
      image: '/BRIMAX - Frente a Pumangol do 28 Lobito.jpg',
    },
    {
      id: 2,
      title: 'BRIMAX - Rua Principal, Saindo do 28 para Caponte',
      image: '/BRIMAX - Rua Principal, Saindo do 28 para Caponte.jpg',
    },
    {
      id: 3,
      title: 'BRIMAX - Venda de Materiais de Construção',
      image: '/BRIMAX - Venda de Materiais de Construção.jpg',
    },
    {
      id: 4,
      title: 'BRIMAX - Venda de Materiais de Construção',
      image: '/BRIMAX - Venda de Materiais de Construção.jpg',
    },
    
    {
      id: 5,
      title: 'BRIMAX - Lobito Zona comercial 28',
      image: '/BRIMAX - Lobito Zona comercial 28.jpg',
    },
  ];

  return (
    <div className=" ">
      <div className="row">
        <div className="col-12">
          <Carousel className="custom-carousel"> {/* Adicione a classe personalizada */}
            {noticias.map((noticia) => (
              <Carousel.Item key={noticia.id}>
                <img className="d-block w-100" src={noticia.image} alt={noticia.title} />
                <Carousel.Caption>
                  <h1 className='bordarleft'>{noticia.title}</h1>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;