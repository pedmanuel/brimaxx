import React, {useState, useEffect} from 'react';
import AdminNav from "../../components/nav/AdminNav";
import {auth} from "../../firebase";
import {toast}  from  'react-toastify';
import { getProductsByCount } from '../../functions/product';

  //ANT DESIGN COMPONENTES
import { MailOutlined,
      GoogleOutlined,
      UserOutlined, 
      SafetyOutlined 
} from '@ant-design/icons';

import { Button, 
      Checkbox, 
      Form, 
      Input, 
      label 
} from 'antd';

const AdminDashboard = () =>{ 

const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);

const [products, setProducts] = useState([]);

useEffect(() =>{
      loadAllProducts()
}, []);

const loadAllProducts = () =>{
      getProductsByCount(100)
      .then((res) => {
            setProducts(res.data);
       })
      .catch((err) => {
            console.log(err);
      } );
}

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

      <label    className="  text-dark   form-control mb-3 text-center " style={{background:"aqua"}} > <b>P a s s w o r d </b></label>

      <input
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
            //prefix={<SafetyOutlined />} 
            className="text-primary border-dark  form-control mb-3"
            size="large" placeholder="Password Nova"
           
            disabled={loading}
            value={password}
      />


      <input
            //prefix={<SafetyOutlined />}
            className="text-primary border-dark form-control mb-4"
            size="large"
            placeholder=" Password Antiga"  />
            
    
      <Button
      
         onClick={handleSubmit}
         size="small"
         shape ="round"
         class="btn btn-info  " 
         //type="primary"
         className=" text-white btn btn-primary mx-auto mb-4  "
         style={{background:"#453a5f"}}

         >Alterar
        </Button>
        

      
        
  </div> 


</form>

 );

 return (    
      <div className ="container-fluid"><p/><p/>
      
          <div className="row"> <p/><p/><p/>
      
              <div className="  col-md-3 mx-auto"><p/>
                  <p/><AdminNav/> <hr/><p/>
              </div>  

              <div  
              className="col"
              style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
              >

                    {loading ? (

                         <h4 className="text-info">Loading... </h4>
                         
                         ):(
                        <h4> Todos Produtos </h4> 
                        )} 
                        {JSON.stringify(products)}
                        <div className="col"> 
                              
                        {products.map((p) => (

                              <div>    </div>
                              
                        ))}  
     
                        </div>

                      


                      
                       {passwordUpdateForm()}

             </div>
       </div>              
 </div>
);
};
export default AdminDashboard;