import React from "react";
import { Link } from "react-router-dom";
import { InstagramOutlined, TwitterOutlined, FacebookOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer
    className="before"
      style={{
        background: "#26004d",
        color: "cyan",
        padding: "25px 0",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 
              style={{ color: "white" }}
             
            >Contato</h5>
            <p>
              Endereço: Benguela, Luanda, Angola
            </p>
            <p>Email: altitech@altitech.angola</p>
            <p>Telefone: +244 918 39 29 62</p>
          </div>

          <div className="col-md-3">
            <h5
            style={{ color: "white" }}
            >Sobre nós</h5>
            <p>
              Somos uma empresa de tecnologia focada em soluções inovadoras para o mercado angolano.
            </p>
          </div>

          <div className="col-md-3">
            <h5 style={{ color: "white" }} >Siga-nos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.instagram.com/altitech_angola/" target="_blank" rel="noopener noreferrer ">
                  <InstagramOutlined style={{ fontSize: "24px", color: "cyan" }} />
                </a> Instagram
              </li>
              <li>
                <a href="https://twitter.com/altitech_angola" target="_blank" rel="noopener noreferrer">
                  <TwitterOutlined style={{ fontSize: "24px", color: "cyan" }} />
                </a> Twitter
              </li>
              <li >
                 <a href="https://www.facebook.com/altitech.angola" target="_blank" rel="noopener noreferrer">
                   <FacebookOutlined clasName =" mr-2"style={{ fontSize: "24px", color: "cyan", borderRadius: "100%", width: "24px", height: "24px", }} />
                 </a> Facebook
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 style={{ color: "white" }} >Links úteis</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/faq" style={{ color: "cyan" }}>
                  Perguntas frequentes
                </Link>
              </li>
              <li>
                <Link to="/terms" style={{ color: "cyan" }}>
                  Termos e condições
                </Link>
              </li>
              <li>
                <Link to="/privacy" style={{ color: "cyan" }}>
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
       <div className ="text-center">
              
           <b8 
        
              style={{
               background: "#26004d",
                     color: "white",
                   }}
                     > Copyright © 2019 - 2023 ALTITECH - ANGOLA . All Rights Reserved.  </b8>  </div>
                    
    </footer>
  );
};

export default Footer;