import React, {useState, useEffect} from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from "react-toastify";
import {getCategories, getCategorySubs} from "../../../functions/category";
import ProductCreateForm from '../../../components/forms/ProductCreateForm';
import FileUpload from '../../../components/forms/FileUpload';
import {useSelector} from "react-redux";



//IMPORTAR CATEGORIAS A PARTIR DAS FUNÇÕES
import { createProduct,
         removeProduct
} from '../../../functions/product';

//COMPONENTES DO ANT DESIGN COMPONENTES
import { DeleteOutlined,
        EditOutlined,
        MailOutlined,
         GoogleOutlined,
         UserOutlined, 
         SafetyOutlined,
         SearchOutlined
} from '@ant-design/icons';

//IMPORTAR COMPONENTES DO ANTD PARA SEREM USADOS COMO BTSTRP
import { Button,
        Checkbox,
        Form,
        Input,
        label,
        Avatar
} from 'antd';
import { async } from '@firebase/util';



//DECLARAÇÃO DE VARIAVEIS DE ESTADO EM EXECUÇÃO 
const initialState = {
    title:"MacPro",
    description:"Este é o melhor produto da ultima versão",
    price:'789',
    categories:[],
    category:"",
    subs:[],
    shipping:"Yes",
    quantity:'50',
    images:[],
    colors: ["Black", "Brown", "Silver","White", "Blue"],
    brands: ["Apple","Samsung", "Microsoft","Lenovo","ASUS"],
    color:"white",
    brand:"Apple",
};


//DECLARAÇÃO PRINCIPAL DA ENTIDADE DE CRIAÇÃO DE PRODUTOS
const ProductCreate = () => {

// DECLARAÇÃO DE VARIAVEIS E CONSTANTES
 const [values, setValues] = useState(initialState);
 const [subOptions, setsubOptions] = useState([]);
 const [showSub, setShowSub] = useState(false);
 
 //CHAMADA DO MÉTODO PARA CARREGAR CATEGORIAS 
 useEffect(() => {
  loadCategories();
}, []);

//´METODO PARA CARREGAR CATEGORIAS
const loadCategories = () =>
getCategories().then((c) =>
setValues({ ...values, categories: c.data }));
 

//MÉTODO PARA SUBMETER DADOS NO FORM
 const handleSubmit =(e) => {
    e.preventDefault();
    createProduct(values)
    .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" FOI CRIADO (A)`);
       window.location.reload();
    })
    .catch(err =>{
        console.log(err)
        //if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
 };

  //METODO PARA MUDAR
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
 };


 //MÉTODO PARA MUDAR DE CATEGORIA E SUB CATEG
 const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log('Click em categoria', e.target.value);
    setValues({ ...values, subs:[], category: e.target.value});
    getCategorySubs(e.target.value)
    .then((res) => {
        console.log("SUBOPTION NO CLICK DE SUB", res);
        setsubOptions(res.data);
    });
    setShowSub(true);

 };


//DECLARAÇÃO DO FORMULÁRIO DE CATEGORIAS
return ( 
 


<div className =" container-fluid"><p/><p/>

    <div className="row"> <p/><p/><p/>

        <div className="  col-md-3  mx-auto"><p/>
            <p/><AdminNav/> <hr/><p/>
       
               < FileUpload
                    className = " form-control  "
                    values = {values} 
                    setValues = {setValues}
               
               />

            <p/><p/><p/> <br/><br/>

            <div >{JSON.stringify(values.images.url)} </div>
           


        </div> 
        
    <div className="col-md-9">
 
                <ProductCreateForm
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            setValues={setValues}
                            values={values}
                            handleCategoryChange={handleCategoryChange}
                            subOptions={subOptions}
                            showSub={showSub}
                            
                            
                />

                <p/>


                
            </div>  
           

    </div>

  

</div>             
 );
};
export default ProductCreate;