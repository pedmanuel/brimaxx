import React from 'react';

import { Link } from "react-router-dom";

import { InstagramOutlined, TwitterOutlined, FacebookOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer
    className="before"
      style={{
        background: "#000",
        color: "white",
        padding: "25px 0",
      }}
    >
     
      <div className="containerf">
        <div className="row">
          <div className="col-md-3">
            <h5 
              style={{ color:"#09ff00" }}
             
            >Contato</h5>
            <p>
              Endereço: Benguela, Lobito, Zona Comercial do 28
            </p>
            <p> Email: comercial@brimax-angola.net </p>
            <p>Telefone: +244 927 91 72 61</p>
          </div>

          <div className="col-md-3">
            <h5
            style={{ color:"#09ff00" }}
            >Sobre nós</h5>
            <p>
              Somos uma empresa angolana de vendas de materiais de construção  e 
              outros diversos materiais ligados a este ramo.

            </p>
          </div>

          <div className="col-md-3">
            <h5 style={{ color:"#09ff00" }} >Siga-nos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.instagram.com/brimaxangola/" target="_blank" rel="noopener noreferrer ">
                  <InstagramOutlined style={{ fontSize: "24px", color: "white" }} />
                </a> Instagram
              </li>
              <li>
                <a href="https://twitter.com/brimaxangola" target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined style={{ fontSize: "24px", color: "white" }} />
                </a> Twitter
              </li>
              <li >
                 <a href="https://www.facebook.com/brimaxangola" target="_blank" rel="noopener noreferrer">
                   <FacebookOutlined clasName =" mr-2"style={{ fontSize: "24px", color: "white", borderRadius: "100%", width: "24px", height: "24px", }} />
                 </a> Facebook
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 style={{ color:"#09ff00" }} >Links úteis</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/faq" style={{ color: "white" }}>
                  Perguntas frequentes
                </Link>
              </li>
              <li>
                <Link to="/terms" style={{ color: "white" }}>
                  Termos e condições
                </Link>
              </li>
              <li>
                <Link to="/privacy" style={{ color: "white" }}>
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
       <div className ="text-center">
       <div className='d-flex mx-4'>

</div>  
          
           <b8 
        
              style={{
               background: "#000",
                     color: "white",
                   }}
                     > Copyright © 2019 - 2023 BRIMAX - ANGOLA . All Rights Reserved.  </b8>  </div>
                   
    </footer>
  );
};

export default Footer;