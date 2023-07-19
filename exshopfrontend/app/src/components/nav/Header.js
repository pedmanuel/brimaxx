import React, { useState } from "react";
import {Menu, Input} from "antd";

import {
  MenuOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  SearchOutlined,
  LogoutOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg mx-auto navbar fixed-top"
        style={{ background: "#26004d", color: "white" }}
      >
        <button
          className="navbar-toggler float-left"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "1px solid white" }}
        >
          <b>
            <MenuOutlined
              className=""
              style={{ background: "", color: "white" }}
            />
          </b>
        </button>

        <Link style={{ color: "white" }} className="navbar-brand hover-effect " to="/">
          <b>EX-SHOPPING</b>
        </Link>

        <Link className="text-warning float-right nav-link" to="/register">
          <a>
            <UserAddOutlined
              className="float-right"
              style={{ color:"white"}}
            />
          </a>
        </Link>

        <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
          <Input
          className="ml-5"
            placeholder="Pesquisar"
            suffix={<SearchOutlined style={{ marginRight: "10px", color:"#ff99e5" }} />}
            style={{ width: "85%", borderRadius: "20px  20px " , border: "2px solid cyan",}}
            
          />
        </div>

        <Link style={{ color: "white" }} className="float-right nav-link" to="/login">
          <b>
            <UserOutlined
              className="float-left mr-1 mt-1"
              style={{ color: "white" }}
            />
          </b>
          <b className="">
            {" "}
            entrar{" "}
          </b>
        </Link>
      </nav>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Header;