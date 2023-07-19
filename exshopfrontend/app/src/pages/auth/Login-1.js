import React, {useState, useEffect} from "react";
import { auth, googleAuthProvider } from "../../firebase";
import {toast } from 'react-toastify';
import {Button} from 'antd';
  //ANT DESIGN COMPONENTES
import { MailOutlined,GoogleOutlined } from '@ant-design/icons';
import { useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { createOrUpdateUser } from "../../functions/auth";

const Login=({history})=>{   
const [email,setEmail ] = useState("altitech.angola@gmail.com");
const [password, setPassword]= useState("918apoio");
const [loading, setLoading]= useState(false);

const {user} = useSelector((state) =>({...state}));

useEffect (()=>{
    if(user && user.token ) history.push("/");
    
  }, [user] );

let dispatch = useDispatch();

          //MÉTODO PARA REDIRECIONAR USER LOGADO 
          const roleBasedRedirect = (res ) => {
            if (res.data.role === "admin") {
              history.push("/admin/dashboard") ;
            } else {
              history.push("/user/history" );
            }
          };

        
const handleSubmit= async (e) => {
        e.preventDefault();
        setLoading(true);

        try{
          const result = await
           auth.signInWithEmailAndPassword(email,password );
          const {user}=result;
          const idTokenResult = await user.getIdTokenResult();

        //METODO QUE BUSCA E ACTUALIZA TOKEN DO USER  
        createOrUpdateUser(idTokenResult.token)
         .then((res)=> { 
           dispatch({
            type:'LOGED_IN_USER',
             payload:{
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

    // history.push("/") 
  
    } catch(error){
            console.log(error);
            toast.error(error.message);
            //toast.error(`Caro  ${email}: Ouve uma falha ao tentares autenticar :
           // 1 - verifique a sua conexão com a Internet ou outras ligaçoes de dados;
           // 2- Verificar senhas e Emeil se estão correctos e tente mais uma vez.... `);
            setLoading(false);
        }

        
    };

    //MÉTODO PARA ACEDR COM CONTA DA GMAIL
    const googleLogin = async () => {
         auth
         .signInWithPopup(googleAuthProvider)
         .then(async(result)=>{
            const {user}= result;
            const idTokenResult = await user.getIdTokenResult();

     createOrUpdateUser(idTokenResult.token)
         .then((res)=> { 
           dispatch({
            type:"LOGED_IN_USER",
             payload:{
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
    
               // history.push("/");

        })
        .catch((err) =>{ 
         console.log(err);
         toast.error(err.message);
        });
    };
           
const loginForm =()=>( 

<form  onSubmit= {handleSubmit} >  

<div className="form-group text-center">


<input
           type ="email" 
           className="form-control border border-dark" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="digite aqui o seu email"
            autoFocus
/> 

</div>
        
<div className="form-group">
<input
            type ="password" 
            class="form-control border border-dark   float-right"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="*** Escreva aqui a palavra passe para próximos acessos *** " 
            //autoFocus
 />
</div>

<p></p>

 <p class="h7 float-rigt " className=" text-center " text-decoration-underline=  "true" >Antes de completar, anote a sua password e email num bloco de nota</p>    
  
 <p></p>

 <div className="form-group text-center">
 <Button
        onClick={handleSubmit}
         type="primary"
         class="btn btn-inverse btn-info"
         shape="round"
         //class="btn btn-primary my-12"
         // className="  btn btn-dark float-right "
        // className="  btn btn-dark mb-3 "
        
        // block
        
        
         icon={<MailOutlined/>}
         size="large"
         disabled={!email ||password.length<6}

         >

Aceder com Email/Password
</Button>  
</div>
<p></p>

</form>
);

return (

<div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (

           <h4 className=" text-center ">L o g i n</h4>
)}

 {loginForm()}

<div className="form-group text-center">
<Button
         type="danger"
         //class="btn btn-primary my-12"
         // className="  btn btn-dark float-right "
        // className="  btn btn-dark mb-3 "
         class="btn btn-inverse btn-danger"
        // block
         shape="round"
         onClick={googleLogin}
         icon={<GoogleOutlined/>}
         size="large"
         

         >
Aceder com Email / @gmail
</Button>
</div>

<p></p>
<div className="form-group text-center">
 <Link to="/forgot/password" classeName="float-right text-danger">
Esuci-me /password
</Link>
</div>
</div>
      </div>
    </div>
  );
};


export default Login;