import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { Button, h4, Input, Avatar, label } from "antd";
import {
  MailOutlined,
  GoogleOutlined,
  UserOutlined,
  UnlockOutlined,
  SafetyOutlined,
  LockOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import { useSelector } from "react-redux";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => ({ ...state }));
  {
    /** 
    useEffect (()=>{
        if (user && user.token )
        history.push("/");
    }, [user,history] );
    */
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log("ENV--->",process.env.REACT_APP_REGISTER_REDIRECT_URL);

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);

    toast.success(
      `foi enviada uma mensagem para ${email}. ver  no SPAN ou na caixa de entrada do email e click no link enviado, para completar a operação`
    );

    // save user in localstorage
    window.localStorage.setItem("emailForRegistration", email);

    //clear state
    setEmail("");
  };

  const registerForm = () => (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "120vh",
        justifyContent: "60px",
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <div
          className=" p-4"
          style={{
            borderRadius: "9px",
            background: "rgba(0, 0, 0, 0.1)",
            minHeight: "25vh",
            // boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)"
          }}
        >
          <h5
            className="mx-auto"
            style={{
              color: "white",
              marginTop: "20px",
              fontFamily: "Georgia, serif",
              fontWeight: "bold",
            }}
          ></h5>

          <input
            className="form-control mt-2 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Escreva aqui  o seu email da gmail..."
            autoFocus
            style={{
              borderRadius: "10px",
              opacity: "0.8",
              marginBottom: "0px",
            }}
          />

          <div className="d-flex mt-2 justify-content-center">
            <button
              type="submit"
              className="btn btn-dark m-0 hover-effect"
              style={{
                borderRadius: "15px",
                opacity: "0.7",
                backgroundColor: "dark",
                // transition: "background-color 0.3s",
                //fontFamily: "Arial",
                fontWeight: "",
                fontSize: "16px",
                //textTransform: "lowercase",
                textAlign: "center",
                height: "45px",
              }}
            >
              S o l i c i t a r
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <>
      {/** DISTÂNCIA ENTRE COMPONENTES */}

      <div className="container p-5 mb-4">
        <div className="row">
          <div
            className="mx-auto col-md-7 offset-md-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h5
              style={{
                color: "#08142c",
                marginTop: "20px",
                fontFamily: "Georgia, serif",
                fontWeight: "bold",
              }}
            >
              Cadastre - se{" "}
            </h5>

            {registerForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
