import React, {useState, useEffect} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {auth} from "../../../firebase";
import {toast}  from  'react-toastify';
import { getProductsByCount } from '../../../functions/product';
import AdminProductCard from '../../../components/cards/AdminProductCard';


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

const AllProducts = () =>{ 



 return (    
      <div className ="container-fluid"><p/><p/>
      
          <div className="row"> <p/><p/><p/>
      
              <div className="  col-md-3 mx-auto" style={{ marginTop: "80px",}} ><p/>
                  <p/><AdminNav/> <hr/><p/>
              </div>  
            
              <div  
           style={{background:"", color:"#26004d"}}  
           className="   mx-auto  mb-3 text-center "> 
                <h4 className="md-2 ">   P r o d u t o   </h4>  
      </div>
             </div>
       </div>              
 
);
};
export default AllProducts;