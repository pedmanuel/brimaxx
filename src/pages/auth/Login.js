import React, { useState, useEffect } from "react";
import styles from "../../App.css";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button, Input, Avatar, label } from "antd";
import { Image, Form, Label, div } from "antd";
import { MailOutlined, GoogleOutlined, UserOutlined, UnlockOutlined, SafetyOutlined, LockOutlined, TeamOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrUpdateUser } from "../../functions/auth";
import Footer from "../../components/nav/Footer";

const Login = ({ history }) => {
  const [email, setEmail] = useState("altitech.angola@gmail.com");
  const [password, setPassword] = useState("00000000");
  const [loading, setLoading] = useState(false);
  const [flutuando, setFlutuando] = useState(true);

  const handleClick = () => {
    setFlutuando(!flutuando);
  };

  const { user } = useSelector((state) => ({ ...state }));
  {/** 
    useEffect(() => {
      if (user && user.token) history.push("/");
    }, [user, history]);
  */}
  const dispatch = useDispatch();

  const roleBasedRedirect = (res) => {
    if (res.data.role === "admin") {
      history.push("/admin/dashboard");
    } else {
      history.push("/user/history");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          dispatch({
            type: "LOGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          roleBasedRedirect(res);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();

        createOrUpdateUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            roleBasedRedirect(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };   
  //************************************************************************ INICIO DA TELA DE LOGIN ************************************************************************ 
    const loginForm = () => (
      <form 
          className=" login-form " 
          style={{ marginTop: "80px",}}
      >
        
 
          <h2
            style={{
              color: "#08142c",
              marginTop: "50px",
              fontFamily: "Georgia, serif",
              fontWeight: "bold",
            }}
         >
        Entrar
      </h2>
         
            
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="digite aqui o seu email"
                autoFocus
                style={{
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "100%",
                }}
              />
            
           
              <input               
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*** Escreva aqui a palavra passe para próximos acessos ***"
                autoFocus               
                style={{
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "100%",
                }}
              />
            
            
              <span
                className="span span-inverse span-danger"
                shape="round"
                onClick={googleLogin}
                icon={<GoogleOutlined />}
                size="large"
              >
                <Link to="{googleLogin}" className="text-info">
                   <b className="text-danger">google</b>
                </Link>
              </span>
            

        

        <button
                    
                    onClick={handleSubmit} 
                    type="primary"              
                    className="hover-effect mt-2"
                    disabled={!email ||password.length<6}
                    //style={{background:"#26004d"}}
                   // style={{background:"#26004d", boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
                   style={{
                    color: "white",
                    display: "block",
                    margin: "0 auto",
                    borderRadius: "20px",
                    opacity: "0.8",
                    width: "250px",
                    backgroundColor: "dark",
                    backgroundSize: "100% auto",
                    backgroundPosition: "center",
                    transition: "background-position 0.3s",
                    height: "45px",
                    border: "none",
                  }}
        >
         Entrar
        </button>  
        <div className="remember-forgot mt-4">
        <label style={{ marginBottom: "10px" }}>
          <input type="checkbox" /> Lembrar-me
        </label>
      </div>

        <div className="signup-link mt-2">
        <span className="mt-4">
          Novo no RadSul? <a href="/register">Registe-se agora</a>
        </span>
      </div>                  
</form>

//************************************************************************FIM DA TELA DE LOGIN ************************************************************************

);

return (
  <div className="d-flex flex-column align-items-center mt-5" >
   
    <div  onClick={handleClick} >
      {loading ? (
        <h5 className="text-info"> </h5>
      ) : (
        <h5 className="float-right text-info"></h5>
      )}
       
      {loginForm()   }

  </div>
   
  </div>
);
}
export default Login;