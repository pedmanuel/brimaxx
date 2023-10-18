import React, {useState, useEffect} from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { 
    getCategory,
    updateCategory
} from '../../../functions/category';
import CategoryForm from '../../../components/forms/CategoryForm';
//IMPORTAR CATEGORIAS A PARTIR DAS FUNÇÕES


//COMPONENTES DO ANT DESIGN COMPONENTES
import { DeleteOutlined,
        EditOutlined,
        MailOutlined,
         GoogleOutlined,
         UserOutlined, 
         SafetyOutlined 
} from '@ant-design/icons';

//IMPORTAR COMPONENTES DO ANTD PARA SEREM USADOS COMO BTSTRP
import { Button,
        Checkbox,
        Form, Input,
        label 
} from 'antd';
import { async } from '@firebase/util';

//DECLARAÇÃO DA ENTIDADE DE CRIAÇÃO DE CATEGORIAS
const CategoryUpdate =({history, match})=>{ 

    //DECLARAÇÃO DE VARIAVEIS DE ESTADO EM EXECUÇÃO 
    const { user } = useSelector((state) => ({ ...state }));  

    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect (() => {
        loadCategory();    
    },[]);

    const loadCategory =()=>
    getCategory(match.params.slug).then((c) => setName(c.data.name));

    //DECLARAÇÃO DO MÉTODO DE MANIPULÇÃO DOS EVENTOS (e) DAS VARIAVEIS DE ESTADO
    const handleSubmit = (e) => {
      e.preventDefault();
      //**MÉTODO PARA ACTUALIZAR/INSERIR DADOS NA ENTIDADE CATEGORIA**
      setLoading(true);
      updateCategory(match.params.slug, {name})
        .then((res) => {
            setLoading(false);
            setName("");
        toast.success(`"${res.data.name}" FOI ACTUALIZADO (A)`);
        history.push("/admin/category");
          //console.log(res)    
      })
              .catch((err) =>{
              setLoading(false);
              if(err.response.status===400) toast.err(err.response.data);
          } );
};
//
return (    
    <div className ="container-fluid"><p/><p/><p/><p/>
    <div className="row mx-auto"> <p/><p/><p/><p/>
    <div className="col-md-3 ">
    <p/><AdminNav/> <hr/><p/>

    <div >


    {loading ? (
            <h4 className="text-danger"> </h4>
          ) : (
            <h4></h4>
          )}


        <CategoryForm
             handleSubmit={handleSubmit}
             name={name}
             setName={setName}
        />       
    <div
  className="form-group col-mb-3   mx-auto "
></div>

    <div  className='form-group col-md-9   mx-auto'>
    <div  className='form-group col-md-10   float-  '></div>
        
     </div>                   
</div> 



        </div> 
       
     



</div>
</div>
 );
};
export default CategoryUpdate;