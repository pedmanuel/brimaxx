import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const Carousel3D = () => {
  const noticias = [
    {
      id: 1,
      title: 'BRIMAX - ANGOLA',
      image: '/BRIMAX - Frente a Pumangol do 28 Lobito.JPG',
    },
    {
      id: 2,
      title: 'BRIMAX - Rua Principal, Saindo do 28 para Caponte',
      image: '/BRIMAX - Rua Principal, Saindo do 28 para Caponte.JPG',
    },
    {
      id: 3,
      title: 'BRIMAX - Venda de Materiais de Construção',
      image: '/BRIMAX - Venda de Materiais de Construção.JPG',
    },
    {
      id: 4,
      title: 'BRIMAX - Venda de Materiais de Construção',
      image: '/BRIMAX - Venda de Materiais de Construção.JPG',
    },
    {
      id: 5,
      title: 'BRIMAX - Venda de Materiais de Construção',
      image: '/machado-cabo-bimateria-pro-600gr-flux.jpg',
    },
  ];

  return (
    <div className="carrossel mt-3">
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