import React, {useState, useEffect} from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from "react-toastify";
import {getCategories, getCategorySubs} from "../../../functions/category";
import FileUpload from '../../../components/forms/FileUpload';
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import { getProduct, updateProduct } from '../../../functions/product';
import ProductUpdateForm from '../../../components/forms/ProductUpdateForm';


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
    title:"",
    description:"",
    price:'',
    categories:[],
    category:"",
    subs:[],
    shipping:"",
    quantity:'',
    images:[],
    colors: ["Black", "Brown", "Silver","White", "Blue"],
    brands: ["Apple","Samsung", "Microsoft","Lenovo","ASUS"],
    color:"",
    brand:"",
};


//DECLARAÇÃO PRINCIPAL DA ENTIDADE DE CRIAÇÃO DE PRODUTOS
const ProductUpdate = ({ match, history }) => {

// DECLARAÇÃO DE VARIAVEIS E CONSTANTES
const [values, setValues] = useState(initialState);
const  [ categories, setCategories] = useState ([]);
const [subOptions, setSubOptions] = useState([]);
const [arrayOfSubs, setArrayOfSubs] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("");
const [loading, setLoading] = useState(false);

const { slug } = match.params;
 
//CHAMADA DO MÉTODO PARA CARREGAR PRODUTOS
useEffect(()=>{
    loadProduct();
    loadCategories();
    
},[]);

//MÉTODO PARA CARREGAR PRODUTO
const loadProduct =()=> {
    getProduct(slug).then((p) => {
    //CARREGA PRODUTO INDIVIDUAL
    setValues({...values, ...p.data});
    //CARREGA SUBCATEGORIA 
    getCategorySubs(p.data.category._id).then((res) =>{
    

    //AO CARREGAR PELA 1 VEZ MOSTRA SUBs PADRÁO 
   setSubOptions(res.data);
});
    //PREPARA ARRAY DE ID SUBS PARA MOSTRAR COMO SUBS
    let arr = [];
    p.data.subs.map((s)=>{
        arr.push(s._id);
    });
    console.log("ARR", arr);
    setArrayOfSubs((prev)=> arr); // forma do antd de implementaçao
    });
};

//´METODO PARA CARREGAR CATEGORIAS
const loadCategories = () =>
getCategories().then((c) => {
  console.log("GET CATEGORIES IN UPDATE PRODUCT", c.data);
  setCategories(c.data);
});

//ÉTODO PARA SUBMETER DADOS
const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);

    values.subs = arrayOfSubs;
    values.category = selectedCategory ? selectedCategory : values.category;

    updateProduct(slug,values)
        .then((res) => {         
            setLoading(false);
            toast.success(`"${res.data.title}" foi actualizado`);
            history.push("/admin/dashboard");
    })
    .catch(err => {
        console.log(err);
        setLoading(false);
        toast.error(err.response.data.err);
       
    });
};

// MÉTODO PARA MUDAR OS VALORES DAS VARIAVEIS DE ESTADO
const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
 };




 //MÉTODO PARA MUDAR DE CATEGORIA E SUB CATEG
 const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log('Click em categoria', e.target.value);
    setValues({ ...values, subs:[] });

    setSelectedCategory(e.target.value);

    getCategorySubs(e.target.value).then((res) => {
      console.log("SUBOPTION NO CLICK DE SUB", res);
        setSubOptions(res.data);
    });
   
    if (values.categories._id === e.target.value){
        loadProduct([]);
    }
        setArrayOfSubs([]);
 };

//DECLARAÇÃO DO FORMULÁRIO DE CATEGORIAS
return ( 
 
<div className =" container-fluid "><p/><p/>
    <div className="row "> <p className="paragrafo3-vazio"></p>
        <div className="  col-md-3                                                                                                              "><p/>
            <p/><AdminNav/> <hr/><p/>
           {/*{JSON.stringify(values)}*/}
           < FileUpload
                    className = " form-control  "
                    values = {values} 
                    setValues = {setValues}
               
               />
        </div> 

        <div className="col">
        <ProductUpdateForm 
           handleSubmit={handleSubmit}
           handleChange={handleChange}
           setValues={setValues}
           values = {values}
           handleCategoryChange = {handleCategoryChange}
           categories = {categories}
           subOptions = {subOptions}
           arrayOfSubs ={arrayOfSubs}
           setArrayOfSubs={setArrayOfSubs}
           selectedCategory={selectedCategory}
           
           />   
        </div>
    </div>
</div>             
 );
};
export default ProductUpdate;