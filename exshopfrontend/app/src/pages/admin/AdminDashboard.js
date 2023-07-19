import React, {useState, useEffect} from 'react';
import AdminNav from "../../components/nav/AdminNav";
import {auth} from "../../firebase";
import {toast}  from  'react-toastify';
import { getProductsByCount } from '../../functions/product';
import AdminProductCard from '../../components/cards/AdminProductCard';
import {removeProduct} from '../../functions/product';


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

//CARREGAR TODOS O PRODUTOS
useEffect(() =>{
      loadAllProducts()
}, []);

//CARREGAR  OS 100 PRODUTOS
const loadAllProducts = () =>{
      getProductsByCount(100)
      .then((res) => {
            setProducts(res.data);
       })
      .catch((err) => {
            console.log(err);
      } );
};


//ELIMINAR PRODUTO
const handleRemove = (slug) => {
    // let answer = window.confirm("Delete?");
    if (window.confirm("Delete?")) {
      // console.log("send delete request", slug);
      removeProduct(slug)
        .then((res) => {
          loadAllProducts();
          toast.error(`${res.data.title} FOI ELIMINADO`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });
    }
  };



//ALTERAR PASSWORD
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

// INICIO DO FORMULARIO DO ACTUALIZAR A PASS WORD 
const passwordUpdateForm =()=> ( 
 <form
 
  onSubmit={handleSubmit}>

  <div className=" form-group">

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
            
    <div className='form-group col-md-5 mx-auto'>
      <Button
       style={{background:"#453a5f",boxShadow: '2px 2px 4px rgba(0, 255, 255, 0.6)'}}
         onClick={handleSubmit}
         size="small"
         shape ="round"
         class="btn btn-info  " 
         //type="primary"
         className=" text-white btn btn-primary mx-auto mb-4  "
         //style={{background:"#453a5f"}}

         >Alterar
        </Button>
        </div>

      
        
  </div> 


</form>
//FIM DO FORMULARIO ACTUALIZAR PASSWORD
 );


 return (    
      <div className ="container-fluid mx-auto"><p/><p/><p/>
      
          <div className="row"> <p/><p/><p/>
      
              <div className="  col-md-3 mx-auto"><p/>
                  <p/><AdminNav/> <hr/><p/>
                  {passwordUpdateForm()}
              </div>  

              
              <br/><p/><p/>
              <div  className="col ">

                    {loading ? (

                         <h4 className="text-info">Loading... </h4>
                        
                         ):(
                             
                        <div  
                              style={{background:"", color:"#26004d"}}  
                              className="   mx-auto  mb-3 text-center "> 
                                   <h4 className="md-2 ">   P r o d u t o s   </h4>  
                         </div> 
                        )} 
                       
                        <div className="col"
                        
                        > 
                        <div className="row "
                        
                        >
                         <p/> <p/> <br/>     
                        {products.map((product) => (
                              <div 
                              
                                    key = {product._id}
                                    className='col-md-2 pb-7 '
                              >

                              < AdminProductCard 
                                    className=""
                                    product = {product}  
                                    handleRemove = {handleRemove}
                                    //style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                              />
                              
                        </div> 
                              
                        ))}  
     
                        </div>

                      


                      
                       
                   </div>
             </div>
       </div>              
 </div>
);
};
export default AdminDashboard;