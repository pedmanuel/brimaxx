import React, {useState,useEffect} from "react";
import { auth } from "../../firebase";
import {toast } from 'react-toastify';
import {Link} from "react-router-dom"

import {Button, h4, Input, Avatar, label} from 'antd';
import { MailOutlined,GoogleOutlined,UserOutlined, UnlockOutlined,SafetyOutlined , LockOutlined,  TeamOutlined } from '@ant-design/icons';

import { useSelector} from "react-redux";

const Register=({history})=>{
const [email, setEmail ] = useState("");


const {user} = useSelector((state) => ({...state}));

useEffect (()=>{
    if (user && user.token )
     history.push("/");
  }, [user,history] );

const handleSubmit= async (e)=>{
    
        e.preventDefault();

        //console.log("ENV--->",process.env.REACT_APP_REGISTER_REDIRECT_URL);

        const config = {

            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
        };

        await auth.sendSignInLinkToEmail (email, config)

        toast.success(`foi enviada uma mensagem para ${email}. ver  no SPAN ou na caixa de entrada do email e click no link enviado, para completar a operação` );

        // save user in localstorage
        window.localStorage.setItem("emailForRegistration", email);

        //clear state
       setEmail("");

};

const registerForm=()=>( 

<form className="container-fluid" onSubmit= {handleSubmit}>
  <div>      
        <input
         type ="text" 
         className="border-dark form-control " 
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        // placeholder="Escreva aqui  o seu email da gmail..."
         autoFocus
         /> 
            

        <label
                prefix  type ="danger"
                class="h7 float-rigt "
                className="    text-center mt-2 "
                text-decoration-underline=  "true" 
                style={{color:"#08142c"}}
                >

        { <SafetyOutlined />} <h8>Para teres acesso, digite o email da gmail e click em solicitar    </h8></label> <p></p>          
        <Button
                type="submit"
                shape="round"
                //class="btn btn-primary my-12"
                className="text-white float-right "
                class=" btn btn-inverse mx-auto float-right" 
               // style={{background:"#08142c"}}
                style={{background:"#26004d"}}

         >S o l i c i t a r
        </Button>
</div>
 </form>
 );

    return (

        <div className="container p-4 mb-4">{/** DISTÂNCIA ENTRE COMPONENTES */}

    

            <div classeName="row ">

                <div  classeName="  mx-auto col-md-7 offset-md-4" >

                    <h4  style={{color:"#08142c"}}
                         class="mx-auto  "
                          $space="1,5"
                          > c a d a s t r a r    </h4>
                    
                   
                    {registerForm()}
                </div>

            </div>
        </div>
    );


};

export default Register;