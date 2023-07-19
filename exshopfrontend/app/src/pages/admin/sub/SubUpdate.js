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
import { 
         getSub,
         updateSub,
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
const SubUpdate =({match, history})=>{ 
//DECLARAÇÃO DE VARIAVEIS DE ESTADO EM EXECUÇÃO 
const { user } = useSelector((state) => ({ ...state }));
const [name, setName] = useState("");
const [categories, setCategories] = useState([]);
const [parent,setParent] = useState('');

//STEP#1:
const [keyword,setKeyword] = useState("");

//
useEffect (()=>{
    loadCategories();
    loadSub();     
},[]);

//
const loadCategories = () =>
getCategories().then((c) => 
    setCategories(c.data));   
//   
const loadSub = () =>
getSub(match.params.slug).then((s) => {
  setName(s.data.name);
  setParent(s.data.parent);
});

//DECLARAÇÃO DO MÉTODO DE MANIPULÇÃO DOS EVENTOS (e) DAS VARIAVEIS DE ESTADO do MÉTODO PARA INSERIR DADOS NA ENTIDADE CATEGORIA**
const handleSubmit = (e)=>{
  e.preventDefault();
  updateSub(match.params.slug,{name, parent})
  .then((res) => {
      setName("");
      loadSub();
      toast.success(`"${res.data.name}" FOI ACTUALIZADO (A)`);
      history.push("/admin/sub");
    })
           .catch((err) =>{
           // setLoading(false);
            if(err.response.status===400) toast.err(err.response.data);
      } );
};
//STEP#3:
//STEP#4:
return (    
<div className ="container-fluid"><p/><p/>
<div className="row"> <p/><p/><p/>
<div className="  col-md-3 mx-auto"><p/>
                  <AdminNav/>
<hr/><p/>              
<label 
            className=" text-dark   form-control mb-3 text-center "
            style={{background:"#7FFFD4"}} 
> 
    <b> c a t e g o r i a s</b>
      
</label>

    <div className="form-group">
        <select
            name="category"
            className='form-control'
            onChange={(e)=>setParent(e.target.value)}
    >
      
          {categories.length > 0 && 
           categories.map((c)=>( 
             <option
                key={c._id}
                value={c._id}
                selected={c._id === parent}
              > 
               {c.name} 
            </option>
            ))}
            
        </select>  
    </div> 

<div className="form-group col-mb-3   mx-auto ">
<SubForm
      
      handleSubmit ={handleSubmit}
      name ={name}
      setName = {setName}
      
    />
</div>

</div> 
<hr/>

<div className=" form-group col-md-9   mx-auto"> </div>

</div>
</div> 
 );
};
export default SubUpdate;