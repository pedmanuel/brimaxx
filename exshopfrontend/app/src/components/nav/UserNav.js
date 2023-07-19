import React from 'react';
import {Link} from "react-router-dom";
import { ul, li, nav }     from 'antd';
//import {SolutionOutlined}     from 'antd';


 import { SolutionOutlined, UnlockOutlined, HeartOutlined } from '@ant-design/icons';

 
const UserNav = ()=>(
//NAV INICIO
    <nav className="mx-auto" >
       
        <ul  class="list-group">
        
            <li style={{background:"#08142c"}} class=" text-center  list-group-item d-flex justify-content-between align-items-center">
            <Link  className=" mx-auto text-center md-2 " to='/user/history'> <SolutionOutlined/> <span class="badge badge-info badge-pill"> H </span> i s t ó r i c o   </Link> 
           </li >
            
            <li style={{background:"#08142c"}} class="   list-group-item d-flex justify-content-between align-items-center" >
                 <Link  className=" mx-auto text-center md-2 " to='/user/password'>  < UnlockOutlined/> <span class="badge badge-warning badge-pill">P </span> a s s W o r d </Link> 
            </li >
          
            <li style={{background:"#08142c"}}  className =" text-center  list-group-item d-flex justify-content-between align-items-center" > 
                <Link className=" mx-auto text-center md-2 " to='/user/wishlist'> <HeartOutlined/> <span class="  text-center badge badge-danger badge-pill" >D </span> e s e j o s</Link> 
           </li >

        </ul>

    </nav>

//NAV FIM


);

export default UserNav;