import React, {useState, useEffect} from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { auth } from '../../../firebase';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import SubForm from '../../../components/forms/SubForm'
import CategoryForm from "../../../components/forms/CategoryForm";
import LocalSearch from '../../../components/forms/LocalSearch';

import { getCategories } from '../../../functions/category';

//IMPORTAR CATEGORIAS A PARTIR DAS FUNÇÕES
import { createSub,
         getSubs,
         getSub,
         removeSub
} from '../../../functions/sub';

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
const SubCreate =()=>{ 
//DECLARAÇÃO DE VARIAVEIS DE ESTADO EM EXECUÇÃO 
const { user } = useSelector((state) => ({ ...state }));
const [name, setName] = useState("");
const [subs,setSubs] = useState([]);
const [categories, setCategories] = useState([]);
const [category, setCategory] = useState("");

//STEP#1:
const [keyword,setKeyword] = useState("");

//
useEffect (()=>{
    loadCategories();
    loadSubs();     
},[]);

//
const loadCategories = () =>getCategories().then((c) => setCategories(c.data));   
//   
const loadSubs = () =>getSubs().then((c) => setSubs(c.data));

//DECLARAÇÃO DO MÉTODO DE MANIPULÇÃO DOS EVENTOS (e) DAS VARIAVEIS DE ESTADO do MÉTODO PARA INSERIR DADOS NA ENTIDADE CATEGORIA**
const handleSubmit = (e)=>{
  e.preventDefault();
  createSub({ name, parent: category})
  .then((res) => {
      toast.success(`"${res.data.name}" FOI CRIADO(A)`);
      setName("");
      loadSubs();
    })
           .catch((err) =>{
           // setLoading(false);
            if(err.response.status===400) toast.err(err.response.data);
      } );
};


//MÉTODO FRONT- END PARA REMOVER CATEGORIA 
const handleRemove= async (slug)=>{
  if (window.confirm("Delete?")){
        removeSub(slug)
        .then((res)=>{
           toast.error(`${res.data.name} FOI ELIMINADO`) 
           loadSubs();    
        })
        .catch(err =>{
                if(err.response.status===400) toast.err(err.response.data);  
        })
  }
}

//STEP#3:

//STEP#4:
const searched = (keyword)=>(c)=> c.name.toLowerCase().includes(keyword);

return (    
<div className ="container-fluid"><p/><p/>
<div className="row"> <p/><p/><p/>
<div className="  col-md-3 mx-auto"><p/>
      <p/><AdminNav/> <hr/><p/>
             
<label 
            className=" text-dark   form-control mb-3 text-center "
            style={{background:"#7FFFD4"}} 
> 
            <b>C a t e g o r i a  </b>
      
</label>

    <div className="form-group">
        <select
            name="category"
            className='form-control border-dark'
            onChange={(e)=>setCategory(e.target.value)}
    >
          {categories.length > 0 && 
           categories.map((c)=>
             <option
                key={c._id}
                value={c._id}>
               {c.name} 
            </option>)}
            
        </select>
       
    </div> 

<div className="form-group col-mb-3   mx-auto ">
<SubForm
      
      handleSubmit ={handleSubmit}
      name ={name}
      setName = {setName}
      
    />

</div>


<div
  className="form-group col-mb-3   mx-auto "
>

   
</div> 
</div> 


<hr/>
<div className=" form-group col-md-9   mx-auto"> 
            
    <div  className='form-group col-md-10   float-    '>
         {/* step 2 and step 3 */}
         
            <LocalSearch
                 keyword={keyword}
                 setKeyword ={setKeyword}
                 className ="border-info"
            />

        <hr/>
         {/* step 5 */}

                {subs.filter(searched(keyword)).map((c)=>(
                            < div className="alert alert-secondary"   key={c._id}>
                                    {c.name}
                                    <span 
                                        onClick={()=>handleRemove(c.slug)}
                                        className='text-danger btn btn-sm float-right'>
                                        <DeleteOutlined/>
                                    </span>
                                     <Link 
                                        className='text-success btn btn-sm float-right'
                                        to ={`/admin/sub/${c.slug}`}>
                                          <EditOutlined/> 
                                    </Link>
                            </div>
                 ))}
                           
          <hr/>        
       </div>              
   </div>    
 </div>
</div> 
 );
};
export default SubCreate;