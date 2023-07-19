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
                type:'LOGED_IN_USER',
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

    class="d-grid justify-content-center text-center"
>      

<input
            type ="email" 
            className="form-control border border-dark" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
         
/> 
        <p></p> 

<input
            
           // border border-dark
            type ="password" 
            class="form-control border border-dark   float-right"
            id="inputPassword"
            placeholder="*** Escreva aqui a palavra passe para próximos acessos *** "    
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
 />

 <p class="h7 float-rigt " text-decoration-underline=  "true" >Antes de completar, anote a sua password e email num bloco de nota</p>    
 <p class="h6 float-right"> </p> 
               
 <button
         type="submit"
         //class="btn btn-primary my-12"
          className="  btn btn-dark float-right "
         >

Completar 
</button>            
</form>
 );

    return (

        <div className="container p-5">

            <div classeName="row">

                <div  classeName="col-md-6 offset-md-3" >

                    <h4 class="mx-auto ">Completar o Cadastro</h4>
                   
                    {CompleteRegisterForm()}

                </div>
            </div>
        </div>
    );
};

export default RegisterComplete;