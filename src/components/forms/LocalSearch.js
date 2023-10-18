import React from 'react'
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

const LocalSearch =({keyword, setKeyword})=>{

//MÉTODO SEARCH PARA PROCURAR CATEGORIAS 
const handleSearchChange=(e)=>{
    e.preventDefault()
    setKeyword(e.target.value.toLowerCase());
 };

return(
   
<div className='container pt-2 pb-2'>


 
               <Input

                 
                  
                  suffix={<SearchOutlined  style={{background:" white" , color:"red"}}   />}
                  type="search"
                  placeholder='filtrar'
                  value ={keyword}
                  onChange={handleSearchChange}
                  className="form-control border-dark mb-0"
                  size="small"
                  shape="circle"
                  
                 />
 
    


</div>




);
};

export default LocalSearch;