import React, {useState, useEffect} from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { auth } from '../../../firebase';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import CategoryForm from '../../../components/forms/CategoryForm'
import LocalSearch from '../../../components/forms/LocalSearch';

//IMPORTAR CATEGORIAS A PARTIR DAS FUNÇÕES
import { createCategory,
         getCategories,
         removeCategory
} from '../../../functions/category';

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
        Form, Input,
        label 
} from 'antd';
import { async } from '@firebase/util';


//DECLARAÇÃO DA ENTIDADE DE CRIAÇÃO DE CATEGORIAS
const CategoryCreate =()=>{ 
 
//DECLARAÇÃO DE VARIAVEIS DE ESTADO EM EXECUÇÃO 
const { user } = useSelector((state) => ({ ...state }));
const [name, setName] = useState("");
const [categories,setCategories] = useState([]);
const [keyword,setKeyword] = useState("");

//STEP#1:

//
useEffect (()=>{
      loadCategories();
},[])

//
const loadCategories=()=>
getCategories().then((c)=>
setCategories(c.data));

//DECLARAÇÃO DO MÉTODO DE MANIPULÇÃO DOS EVENTOS (e) DAS VARIAVEIS DE ESTADO
const handleSubmit = (e)=>{

  e.preventDefault();
  // console.log(name);
  //setLoading(true);

  //**MÉTODO PARA INSERIR DADOS NA ENTIDADE CATEGORIA**
   
  //createCategory({ name }, user.token)
  createCategory({ name})
  .then((res) => {
      
      toast.success(`"${res.data.name}" FOI CRIADO(A)`);
      
      setName("");
      loadCategories();
       
    })
           .catch((err) =>{
           // setLoading(false);
            if(err.response.status===400) toast.err(err.response.data);
      } );
};


//MÉTODO FRONT- END PARA REMOVER CATEGORIA 
const handleRemove= async (slug)=>{
  if (window.confirm("Delete?")){
        removeCategory(slug)
        .then((res)=>{
           toast.error(`${res.data.name} FOI ELIMINADO`) 
           loadCategories();    
        })
        .catch(err =>{
                if(err.response.status===400) toast.err(err.response.data);  
        })
  }
}


//STEP#3:

//STEP#4:

const searched = (keyword)=>(c)=> c.name.toLowerCase().includes(keyword);

//DECLARAÇÃO DO FORMULÁRIO DE CATEGORIAS
return (    
   <div className ="container-fluid"><p/><p/>
   <div className="row"> <p/><p/><p/>
   <div className="  col-md-3 mx-auto"><p/>
         <p/><AdminNav/> <hr/><p/>

    
<div className="form-group col-mb-3   mx-auto ">  
<CategoryForm
                   handleSubmit ={handleSubmit}
                   name ={name}
                   setName = {setName}
                /> 
   {/*STEP#2 e STEP3:*/}   

<div
  className="form-group col-mb-3   mx-auto "
>

</div>        
</div>
</div> 
             
 <hr/>            
<div  className='form-group col-md-9   mx-auto'>
<div  className='form-group col-md-10   float-  '>     
            <LocalSearch
                 keyword={keyword}
                 setKeyword ={setKeyword}
                 className="border-dark"
            />

               <hr/> <p/>
               {/*STEP#:5 */}
                            {categories.filter(searched(keyword)).map((c)=>(
                            < div 
                                 className="alert alert-secondary"
                                 key={c._id}
                            >
                                    {c.name}
                                    <span 
                                        onClick={()=>handleRemove(c.slug)}
                                        className='text-danger btn btn-sm float-right'
                                    >
                                       <DeleteOutlined/>
                                    </span>
                                    
                                     <Link className='text-success btn btn-sm float-right' to ={`/admin/category/${c.slug}`}>
                                          <EditOutlined/> 
                                   </Link>
                            </div>
                            ))}
                           
                 
       </div>              
    </div>
    </div>
    </div>
 );
};
export default CategoryCreate;