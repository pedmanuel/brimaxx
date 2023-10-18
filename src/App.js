import React, {useEffect} from 'react'
import {Switch,  Route } from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Header from "./components/nav/Header";
import RegisterComplete from './pages/auth/RegisterComplete';
import ForgotPassword from './pages/auth/ForgotPassword';
import History from './pages/user/History';
import AdminRoute from './components/routes/AdminRoute';
import UserRoute from './components/routes/UserRoute';
import Password from './pages/user/Password';
import Wishlist from './pages/user/Wishlist';
import AdminDashboard from './pages/admin/AdminDashboard';
import CategoryCreate from './pages/admin/category/CategoryCreate';
import CategoryUpdate from './pages/admin/category/CategoryUpdate';
import SubCreate from './pages/admin/sub/SubCreate';
import SubUpdate from "./pages/admin/sub/SubUpdate";
import ProductCreate from './pages/admin/product/ProductCreate';
import AllProducts from "./pages/admin/product/AllProducts";
import ProductUpdate from './pages/admin/product/ProductUpdate';

import {auth} from './firebase';
import { useDispatch } from "react-redux";
import {currentUser} from './functions/auth';

const App=()=> {
const dispatch = useDispatch();

// verificar oo estado do fire base
useEffect(() =>{
  const unsubscribe = auth.onAuthStateChanged(async (user)=>{
   if (user){
     const idTokenResult = await user.getIdTokenResult();
     console.log("user",user);

       //METODO QUE BUSCA E ACTUALIZA TOKEN DO USER  
            currentUser(idTokenResult.token)
            .then((res)=> { 
                dispatch({
                type:'LOGGED_IN_USER', //ANALISAR ESTE LOGGED_IN_USER
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
  }

  });
//LIMPAER
return () => unsubscribe();
},[dispatch]);

return (
 <>
<Header/>
<ToastContainer/>

  <Switch>
         <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <Route exact path="/user/history" component={History} />
        <Route exact path="/user/password" component={Password} />
        <Route exact path="/user/wishlist" component={Wishlist} />
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/admin/category" component={CategoryCreate} />
        <Route exact path ="/admin/products" component={AllProducts}/>
        <Route exact path="/admin/products/:slug" component={ProductUpdate} />
        
        
        <Route
            exact 
            path="/admin/category/:slug"
            component={CategoryUpdate}
       />
       
       <Route exact path="/admin/sub" component={SubCreate} />
       <Route exact path="/admin/sub/:slug" component={SubUpdate} />
       <Route exact path="/admin/product" component={ProductCreate} />
          
  </Switch>
    </>
    
  );
};
export default App;