import React, { useState } from "react";
import "../../App.css";
import { Form, a } from "react-router-dom";
import {
  UserOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [showCategories, setShowCategories] = useState(false);
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
  return (
    <div style={{ marginTop: "20px", borderTop: " #FFD700" }}>
      <header
        className={`header ${isMenuOpen ? "transparent-header md-4" : ""}`}
      >
        <nav
          style={{ justifyContent: "flex-top" }}
          className="navbar navbar-expand-lg navbar-dark"
        >
          <div
            style={{ justifyContent: "flex-end" }}
            className="collapse navbar-collapse"
            id="navbarSupportedContent mx-auto"
          >
            <ul
              style={{ justifyContent: "flex-end" }}
              className="menu-principal d-flex justify-content-end"
            >
              <li className="nav-item  text-warning ">
                <a className="nav-a  text-warning " href="/">
                  Home
                </a>{" "}
                <hr className="custom-hr" />{" "}
              </li>

<li className="nav-item dropdown">
  <a className="nav-item text-warning" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</a>
  <div className="dropdown-menu dropdown-menu-scrollable" aria-labelledby="navbarDropdown" style={{ backgroundColor: "rgba(0, 0, 0, 0.890)" }}>
    <div className="menu-content">
      <a className="dropdown-item" href="#">Agro-Jardim</a>
      <a className="dropdown-item" href="#">Agro-Pecuária</a>
      <a className="dropdown-item" href="#">Auto</a>
      <a className="dropdown-item" href="#">Casa e Jardim</a>
      <a className="dropdown-item" href="#">Construção</a>
      <a className="dropdown-item" href="#">Eletricidade e Iluminação</a>
      <a className="dropdown-item" href="#">Ferragens</a>
      <a className="dropdown-item" href="#">Ferramentas Manuais</a>
      <a className="dropdown-item" href="#">Máquinas Agro-Jardim</a>
      <a className="dropdown-item" href="#">Máquinas e Equipamentos</a>
      <a className="dropdown-item" href="#">Oficina</a>
      <a className="dropdown-item" href="#">Pintura</a>
      <a className="dropdown-item" href="#">Proteção e Segurança</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Corpo</a>
      <a className="dropdown-item" href="#">Mãos</a>
      <a className="dropdown-item" href="#">Vedação</a>
    </div>
  </div>
  <hr className="text-warning custom-hr" />{" "}
</li>

              <li className="nav-item  text-warning">
                <a className="nav-a  text-warning " href="/">
                  Promoções
                </a>{" "}
                <hr className="custom-hr" />{" "}
              </li>
              <li className="nav-item  text-warning">
                <a className="nav-a  text-warning " href="/">
                  Parcerias
                </a>{" "}
                <hr className="custom-hr" />{" "}
              </li>
              <li className="nav-item  text-warning">
                <a className="nav-a  text-warning  " href="/">
                  Contacto
                </a>{" "}
                <hr className="custom-hr" />{" "}
              </li>
              <li className="nav-item  text-warning">
                <a className="nav-a  text-warning " href="/">
                  Sobre Nós
                </a>{" "}
                <hr className="custom-hr" />{" "}
              </li>
              <li className="nav-item  text-warning">
                {" "}
                <a className="nav-a  text-warning " href="/">
                  Midias
                </a>{" "}
                <hr className="custom-hr" />{" "}
              </li>
            </ul>
          </div>
        </nav>

        <div
          className={`openMenu ${isMenuOpen ? "abre" : ""} mb-4 fixed-top mt-4`}
          onClick={toggleMenu}
          id="bt-menu"
        >
          <span
            style={{ borderRadius: "2px", border: "2px solid #ffee00" }}
            className="bar"
          >
            {" "}
          </span>
          <span
            style={{ borderRadius: "2px", border: "2px solid #ffee00" }}
            className="bar"
          >
            {" "}
          </span>
          <span
            style={{ borderRadius: "2px", border: "2px solid #ffee00" }}
            className="bar"
          >
            {" "}
          </span>
        </div>

        <div className={`navWrapper ${isMenuOpen ? "abre" : ""}`}>
          <nav className="mb-2">
            <ul className="menu-principal  ">
              <a style={{ color: "dark" }} className=" nav-a " to="/login">
                {" "}
              </a>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Input
                  className="ml-5 mr-4"
                  placeholder="Pesquisar"
                  suffix={
                    <SearchOutlined
                      style={{ marginRight: "10px", color: "black" }}
                    />
                  }
                  prefix={
                    <UserOutlined
                      style={{ marginRight: "10px", color: "black" }}
                    />
                  }
                  style={{
                    maxWidth: "200%",
                    width: "85%",
                    borderRadius: "20px",
                    border: "#FFD700",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </div>
              <li>
                <a href="/mundo"></a>
              </li>
              <li>
                <a className="text-warning" href="/">
                  Home
                </a>
              </li>
           
<li className="nav-item dropdown">
  <a className="nav-item text-warning" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</a>
  <div className="dropdown-menu dropdown-menu-scrollable" aria-labelledby="navbarDropdown" style={{ backgroundColor: "rgba(0, 0, 0, 0.890)" }}>
    <div className="menu-content">
      <a className="dropdown-item" href="#">Agro-Jardim</a>
      <a className="dropdown-item" href="#">Agro-Pecuária</a>
      <a className="dropdown-item" href="#">Auto</a>
      <a className="dropdown-item" href="#">Casa e Jardim</a>
      <a className="dropdown-item" href="#">Construção</a>
      <a className="dropdown-item" href="#">Eletricidade e Iluminação</a>
      <a className="dropdown-item" href="#">Ferragens</a>
      <a className="dropdown-item" href="#">Ferramentas Manuais</a>
      <a className="dropdown-item" href="#">Máquinas Agro-Jardim</a>
      <a className="dropdown-item" href="#">Máquinas e Equipamentos</a>
      <a className="dropdown-item" href="#">Oficina</a>
      <a className="dropdown-item" href="#">Pintura</a>
      <a className="dropdown-item" href="#">Proteção e Segurança</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Corpo</a>
      <a className="dropdown-item" href="#">Mãos</a>
      <a className="dropdown-item" href="#">Vedação</a>
    </div>
  </div>
</li>

              <li>
                <a className="text-warning" href="/">
                  Contacto
                </a>
              </li>
              <li>
                <a className="text-warning" href="/">
                  Promoções
                </a>
              </li>
              <li>
                {" "}
                <a className="text-warning" href="/">
                  Sobre...
                </a>{" "}
              </li>
              <li
                className="nav-item"
                style={{ borderRadius: "20px", color: "#ffee00" }}
              >
                <hr className="custom-hr" />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    text: "dark",
                  }}
                >
                  <Button
                    onClick={() => (window.location.href = "/login")}
                    size="small"
                    shape="round"
                    class="btn btn-info  "
                    //type="primary"
                    className=" text-warning btn btn-primary mx-auto mb-2  "
                    style={{ background: "black", color: "white" }}
                  >
                    {" "}
                    Entrar
                  </Button>
                </div>
              </li>
              <li className="openMenuLayer" onClick={toggleMenu}></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
