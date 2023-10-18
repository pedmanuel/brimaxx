import React, {useState, useEffect} from "react";
import { auth } from "../../firebase";
import {toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "../../functions/auth";

const RegisterComplete=({history})=>{   
// variaveis e campos de controlo    
const [email,setEmail ] = useState("");
const [password, setPassword]= useState('');

//const { user } = useSelector((state) => ({ ...state }));
let dispatch = useDispatch();

//use Effect funcao que usa funcao 
useEffect (()=> {

    setEmail(window.localStorage.getItem("emailForRegistration"));
    //console.log(window.location.href);
    //console.log(window.localStorage.getItem("emailForRegistration"));
},[history]);


const handleSubmit= async (e)=>{
    e.preventDefault();
    //validacao de dados
    if(!email || !password){
        toast.error('É necessário inserir todos os campos: o email e password');

    return;
    }
    if(password.length<6){

        toast.error('A  palavra-passe  tem de ter  mais do que 5 elementos');

    return;
    }

        


        try{
        const result =await
          auth.signInWithEmailLink(email,window.location.href );
            //console.log("RESULT", result);
        if(result.user.emailVerified){

          //remover email da memória local storage
          window.localStorage.removeItem("emailForRegistration");

          // capturar o tokken do usuário
          let user = auth.currentUser
          await user.updatePassword(password);
          const idTokenResult = await user.getIdTokenResult()

          //armazenar com o redux
          console.log("user",user,"idTokenResult",idTokenResult);
           
          //METODO QUE BUSCA E ACTUALIZA TOKEN DO USER  
            createOrUpdateUser(idTokenResult.token)
            .then((res)=> { 
                dispatch({
                type:'LOGGED_IN_USER',
                payload:{
                    name:res.data.name,    
                    email:res.data.email,
                    token: idTokenResult.token,
                    role:res.data.role,
                    _id:res.data._id,
            },
            });

            })
            .catch(err=> console.log(err));

          //redirecionar o usuário
            history.push('/')
         }

      } catch(error){
            console.log(error);
            toast.error(`o tempo estipulado esgotou-se, faça um novo cadastro para o ...${email}. `);
           
        }
    };

const CompleteRegisterForm =()=>( 

<form  onSubmit= {handleSubmit} 

style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    justifyContent: "50px",
  }}
>      

<div className="d-flex justify-content-center align-items-center">
        <div
          className=" p-4"
          style={{
            borderRadius: "9px",
            background: "rgba(0, 0, 0, 0.1)",
            minHeight: "25vh",

          }}
        >

<input
            type="email"
            className="form-control "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Escreva aqui o seu email do Gmail..."
            autoFocus
            style={{
              width: "300px",
              marginBottom: "20px",
              borderRadius: "10px",
              opacity: "",
              color: "dark",
              transition: "background-color 0.3s",

            }}
          />

<input
            type="password"
            className="form-control mt-2 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" Digite a sua senha a"

            style={{
              width: "300px",
              marginBottom: "20px",
              borderRadius: "10px",
              opacity: "",
              color: "dark",
              transition: "background-color 0.3s",
            }}
          />

<div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-dark hover-effect"
              style={{
                width: "150px",
                borderRadius: "20px",
                opacity: "0.8",
                //backgroundImage: "linear-gradient(to right, black, white, black)",
                backgroundSize: "100% auto",
                backgroundPosition: "left center",
                transition: "background-position 0.3s",
              }}
            >
              Concluir
            </button>
          </div>


        </div>
      </div>           
</form>
 );

    return (

<>
      <div className="bg-light container p-5 mb-4">
        <div className="row">
          <div
            className="mx-auto col-md-7 offset-md-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h5 style={{ color: "#08142c", marginTop: "20px", fontFamily: "Georgia, serif", fontWeight: "bold" }}>Completar Cadastro</h5>
           
            {CompleteRegisterForm()}
          </div>
        </div>
      </div>
     
    </>
  );
};

export default RegisterComplete;