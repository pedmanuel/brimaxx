import React, {useState, useEffect} from "react";
import { auth} from "../../firebase";
import {toast } from 'react-toastify';
import { useSelector } from "react-redux";
//import {Button} from 'antd'

const ForgotPassword=({history})=>{

const [email, setEmail]= useState("");
const [loading, setLoading]=useState(false);

const {user} =useSelector((state) =>({...state}));

//*
useEffect (()=>{
  if(user && user.token ) history.push("/");
  
},[user,history]);


const handleSubmit= async (e)=>{
            e.preventDefault();
            setLoading(true);

const config={
            url:process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
             handleCodeInApp:true,
};
        
     await auth
     .ForgotPassword(email, config)
     .then(()=>{
                setEmail("");
                setLoading(false);
                toast.success('Consulte o seu email para ter acesso ao novo link');
            })
            .catch((error)=>{
                setLoading(false);
                toast.error('O você ainda não está cadastrado! Click em cadastrar-se para poder ter acesso');
                console.log("ERROR MSG IN FORGOT PASSWORD",error);

            })
         };

 return(

 <div className="container col-md-6 offset-md-3">
 <p></p>  
{!loading ? ( 
   
<h4 className="justify-content-center text-center"> 
Recuperar Senha
</h4> ):( 
    
<h4 className="form-group text-center text-danger">Carregando...</h4>

  )}

 <p></p>  

 <form
  onSubmit={handleSubmit}
  className= "justify-content-center text-center"
  >
 
 
    <p></p>    
    <p></p>    
       <input
            type ="email" 
            className="form-control border border-dark" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o seu email aqui para obter a nova senha..."
            autoFocus
/> 

<p></p>

<button
         type="danger"
        //className="form-control btn btn-primary my-12"
        // className="  btn btn-dark mb-3 "
        className=" btn btn-inverse btn-info justify-content-center text-center"
        //icon={<GoogleOutlined/>}
         block
         shape="round"
         size="large"
         disabled={!email} 
        bordered="true"
         >
Enviar pedido da nova senha/email Click aqui...
</button> 
       </form>
    </div>

    );
};
export default ForgotPassword;