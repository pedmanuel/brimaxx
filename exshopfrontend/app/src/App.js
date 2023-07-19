import React, {useEffect, lazy, Suspense} from 'react'
import {Switch,  Route } from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingOutlined } from "@ant-design/icons";

import {auth} from './firebase'
import { useDispatch } from "react-redux";
import {currentUser} from './functions/auth'


// using lazy
const Login = lazy(() => import( "./pages/auth/Login"));
const Register = lazy(() => import( "./pages/auth/Register"));
const Home = lazy(() => import( "./pages/Home"));
const Header = lazy(() => import( "./components/nav/Header"));
const RegisterComplete = lazy(() => import( "./pages/auth/RegisterComplete"));
const ForgotPassword = lazy(() => import( "./pages/auth/ForgotPassword"));
const History = lazy(() => import( "./pages/user/History"));
const AdminRoute = lazy(() => import( "./components/routes/AdminRoute"));
const UserRoute = lazy(() => import( "./components/routes/UserRoute"));
const Password = lazy(() => import( "./pages/user/Password"));
const Wishlist = lazy(() => import( "./pages/user/Wishlist"));
const AdminDashboard = lazy(() => import( "./pages/admin/AdminDashboard"));
const CategoryCreate = lazy(() => import( "./pages/admin/category/CategoryCreate"));
const CategoryUpdate = lazy(() => import( "./pages/admin/category/CategoryUpdate"));
const SubCreate = lazy(() => import( "./pages/admin/sub/SubCreate"));
const SubUpdate = lazy(() => import( "./pages/admin/sub/SubUpdate"));
const ProductCreate = lazy(() => import( "./pages/admin/product/ProductCreate"));
const AllProducts = lazy(() => import( "./pages/admin/product/AllProducts"));
const ProductUpdate = lazy(() => import( "./pages/admin/product/ProductUpdate"));

;

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
                type:"LOGGED_IN_USER", //ANALISAR ESTE LOGGED_IN_USER
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
},[dispatch]);

return (
  <Suspense
  fallback={
    <div className="col text-center p-5">
      __ React Redux EC
      <LoadingOutlined />
      MMERCE __
    </div>
  }
>
  <Header />
  
  <ToastContainer />

  <Switch>
  
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
  </Suspense>
    
    
  );
};
export default App;