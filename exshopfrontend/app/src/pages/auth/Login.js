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
  const [password, setPassword] = useState("918apoio");
  const [loading, setLoading] = useState(false);
  const [flutuando, setFlutuando] = useState(true);

  const handleClick = () => {
    setFlutuando(!flutuando);
  };

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) history.push("/");
  }, [user, history]);

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
      <Form className="d-flex flex-column justify-content-center align-items-center   mt-4" >
        <div 
         className={`flutuar ${flutuando ? "" : "flutuar-parado"} container text-info text-center invisivel mt-4`}
            
         style={{
           boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)' ,
           borderRadius: '10px', 
           background:' linear-gradient(to top, #FFFFFF, rgba(38, 0, 77, 0.1)) 100% 200% ',
           
         }}  
        >
          
          <div className="text-info text-center mt-4" >
            <Avatar
              size={64}
              className={`flutuar ${flutuando ? "" : "flutuar-parado"} row mx-auto col-md-4`}
              icon={<UserOutlined style={{ color: "#26004d" }} />}
              style={{
                background: "white",
                boxShadow:  '2px 2px 4px rgba(38, 0, 77, 0.6)',
                
              }}
            />
          </div>
          <p></p>
          <h4 className="text-center mb-4">Login</h4>
          <form
            onSubmit={handleSubmit}
            className="mx-auto"
          >
            <div className="form-group border">
              <input
                prefix={<UserOutlined style={{ color: "aqua" }} />}
                size="large"
                type="email"
                className="form-control border text-dark border-dark"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="digite aqui o seu email"
                autoFocus
                style={{ boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)' }}
              />
            </div>
            <div className="form-group">
              <input
                prefix={<SafetyOutlined />}
                size="large"
                type="password"
                className="form-control border border-dark text-dark float-right"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*** Escreva aqui a palavra passe para próximos acessos ***"
                autoFocus
                shape="round"
                style={{ boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)' }}
              />
            </div>
            <Link
              prefix
              type="danger"
              className="h7 float-left text-dark text-center mt-2 form-group text-center"
              text-decoration-underline="true"
            >
              <SafetyOutlined />Anote a sua password e o seu email
            </Link>
            <p></p>
            <div className="form-group text-center">
              <span
                className="span span-inverse span-danger"
                shape="round"
                onClick={googleLogin}
                icon={<GoogleOutlined />}
                size="large"
              >
                <Link to="{googleLogin}" className="text-info">
                  entre com sua conta da <b className="text-danger">google</b>
                </Link>
              </span>
            </div>

        <div className="form-group text-center">

        <Button
                    className =" text-light"
                    onClick={handleSubmit}               
                    class="btn btn-inverse  btn-secondary mt-2"
                    shape="round"
                    icon={<MailOutlined/>}
                    size="large"
                    disabled={!email ||password.length<6}
                    //style={{background:"#26004d"}}
                   // style={{background:"#26004d", boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
                    style={{background:"#26004d",boxShadow: '2px 2px 4px rgba(0, 255, 255, 0.5)'}}
        >
         Aceder com Email/Passwor
        </Button>  

                  <div className="form-group mt-2 text-center">
                      <Link to="/forgot/password" classeName=" float-right text-danger">
                        <h9  className=" mt-2 text-dark">
                        Esuci-me /password</h9>
                        </Link>
                  </div>

                  
             </div>
          </form>
        </div>
    
</Form>

//************************************************************************FIM DA TELA DE LOGIN ************************************************************************

);

return (
  <div className="d-flex flex-column justify-content-center align-items-center"  >
   
    <div  onClick={handleClick} >
      {loading ? (
        <h5 className="text-info"></h5>
      ) : (
        <h5 className="float-right text-info"></h5>
      )}
       
      {loginForm()}
      <p></p>
      

  </div>
   
  </div>
);
}
export default Login;