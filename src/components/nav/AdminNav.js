import React from 'react';
import {Link} from "react-router-dom";
//import { ul, li, nav }     from 'antd';


import {ShakeOutlined, 
        TagsOutlined, 
        CarryOutOutlined, 
        ScheduleOutlined, 
        UnlockOutlined, 
        HeartOutlined,
        MenuOutlined,
        DiffOutlined 
} from '@ant-design/icons';

const AdminNav = ()=>(
     
     
//NAV INICIO

<nav
 //style={{background:"#26004d",boxShadow: '2px 2px 4px rgba(240, 195, 92, 0.8)'}}
 style={{background:"black",boxShadow: '2px 2px 4px rgba(0, 255, 255, 0.4)'}}
className="mx-auto form-control  "

>
       
 <ul 
 
 class="dropdown"
 // style={{background:"#26004d"}}
  >
           <li
          
              class=" dropdown text-white  mx-auto md-8"  
             // style={{background:"#26004d"}} 
                   // class=  "nav-link dropdown-toggle  text-white  bg- dropdown-item d-flex form-control float-right"
                    href="#" id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true" 
                    aria-expanded="false">
                           
               Administrar < b className='mb-2 mx-auto float-right'> <MenuOutlined/> </b>
               
          </li>       

               <div   class =" with-100px border-white dropdown-menu float-left mt-3" 
                      aria-labelledby="navbarDropdownMenuLink"
                      //style={{background:"#f4d48a",color:"black"}}
                      style={{background:"#FDF6E3",boxShadow: '2px 2px 4px rgba(240, 195, 92, 0.8)'}} 
               >
                    {/* <Link class="dropdown-item text-dark " to="/admin/Products">  G e r a l   </Link> */}
                    <Link class="dropdown-item text-dark " to="/admin/category">  C a t e g o r i a s   </Link>

                    <Link class=" dropdown-item text-dark" to="/admin/sub">  S u b C a t e g o r i a  </Link>

                    <li class="dropdown-item text-dark " href="#">  C u p o n </li>

                    <Link class="dropdown-item text-dark" to="/admin/product">  P u b l i c a r  </Link>

                    <Link class="dropdown-item text-dark" to="/admin/dashboard">  P r o d u t o s   </Link>
               </div>

   
        </ul>
        

 </nav>
   
//NAV FIM

);

export default AdminNav;


