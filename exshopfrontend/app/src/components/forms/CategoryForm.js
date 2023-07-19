import React from 'react'

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
    Form,
    Input,
    label 
} from 'antd';

const CategoryForm = ({handleSubmit, name, setName}) =>( 
<form onSubmit ={handleSubmit} >
    
        <label  
           style={{background:"#7FFFD4"}}  
           className=" text-dark   form-control mb-3 text-center "> 
                <b>C a t e g o r i a s </b>
        </label>
  
        <input
              type="text"   
              onChange={(e) =>setName(e.target.value)}
              value={name}
              //autoFocus
              required
              prefix={<SafetyOutlined />} 
              className="text-primary border-dark  form-control mb-3"
              size="large" placeholder="Nova Categoria"
        />
         
      <div className='form-group col-md-5 mx-auto'>
      <Button
              style={{background:"#26004d"}}
              onClick={handleSubmit}
              size="small"
              shape ="round"
              className=" text-white btn btn-primary mx-auto form-group mb-4 "
              //disass="btn btn-info " 
              type="Button"
             // classabled={!name || name.length <0 || loading}
  
              >S a l v a r
        </Button>
       </div>       
  </form>



 );

export default CategoryForm;