import React, {useState} from 'react';
import UserNav from "../../components/nav/UserNav";
import {auth} from "../../firebase";
import {toast}  from  'react-toastify';

  //ANT DESIGN COMPONENTES
import { MailOutlined,GoogleOutlined,UserOutlined, SafetyOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

const Password =()=>{ 

const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const handleSubmit = async (e)=>{
      e.preventDefault();
      setLoading(true);

      //consolo.log(password);
      await auth.currentUser
      .updatePassword(password)
      .then(()=>{
            setLoading(false);
            setPassword("");
            toast.success("PALAVRA PASSE ALTERADA!");
      })
           .catch((err) =>{
            setLoading(false);
            toast.error(err.message);
      } );
};
const passwordUpdateForm =()=> ( 
 <form onSubmit={handleSubmit}>

  <div className=" form-group col-md-4  float-right  mx-auto">

      <label   className="  text-white bg-dark form-control mb-3 text-center "> <b>Mudar de Password</b></label>

      <Input
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
            prefix={<SafetyOutlined />} 
            className="text-primary  form-control mb-3"
            size="large" placeholder="Password Nova"
           
            disabled={loading}
            value={password}
      />

      <Input
            prefix={<SafetyOutlined />}
            className="text-primary form-control mb-4"
            size="large"
            placeholder=" Password Antiga"  />
            
    
      <Button
      
         onClick={handleSubmit}
         size="small"
         shape ="round"
         class="btn btn-info " 
         type="primary"
         className=" btn btn-primary float-right "
        disabled={!password || password.length <0 || loading}

         >Alterar
        </Button>
        

      
        
  </div> 


</form>

 );

return (  
    
    <div className ="container-fluid">  <p></p>  <p></p> 

        <div className="row"> <p></p>
            
            <div className=" mx-auto col-md-3">
               <UserNav/>
            </div> 

              <div  className="col">

                    {loading ? (

                         <h4 className="text-info"> Alterando...</h4>
                         ):(
                        <h4>                 </h4> 
                        )}         
                          
                       {passwordUpdateForm()}

             </div>
       </div>              
 </div>
);
};
export default Password;