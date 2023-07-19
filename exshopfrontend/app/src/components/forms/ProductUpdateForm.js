import React from "react";
import {Select} from "antd";

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
label,
select
} from 'antd';

const {Option} =Select;

const ProductUpdateForm = ({
  handleSubmit, 
  handleChange, 
  setValues,
  handleCategoryChange,
  categories,
  subOptions, 
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
  values,
  }) => { 
    
//destrutor
const {
    title,
    description,
    price,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand 

} = values;

return( 
   <form onSubmit={handleChange}><p/><p/><p/><p/> 

 

      <div  
           style={{background:"", color:"yellow"}}  
           className="   mx-auto  mb-3 text-center "> 
                <h4 className="md-2 "style={{color:"Black"}}>   A c t u a l i z a r   </h4>  
      </div>

{/*NOME DO PRODUTO */}
   <div className='form-group' >
   <label><> N o m e  </> </label> 
      <Input
     // style={{background:"#ccd9ff" , color:"black"}} 
        type="text"
        name="title"
        className="form-control"
        value={title}
        onChange={handleChange}
        style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
      /> 
    </div>
{/** FIM DO NOME DO PRODUTO */}

{/**DESCRIÇÃO DO PRODUTO */}
    <div className='form-group' >
    <label><> D e s c r i ç ã o </> </label>
      <Input
        type="text"
        name="description"
        className="form-control"
        value={description}
        onChange={handleChange}
       // style={{background:"#ccd9ff" , color:"black"}} 
       style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
      />
     </div>
{/** FIM DA DESCRIÇÃO DO PRODUTO */}


{/*PREÇO DO PRODUTO */}
     <div className='form-group' >
     <label><> P r e ç o  </> </label>
      <Input
      // style={{background:"#ccd9ff" , color:"black"}} 
        type="number"
        name="price"
        className="form-control"
        value={price}
        onChange={handleChange}
        style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
      />
    </div>
{/** FIM DA DESCRIÇÃO DO PRODUTO */}


{/*FRETE DO PRODUTO */}
      <div className ="md-12">
        <label><> F r e t e </> </label> <br/>
        <select  
        
        name="shipping"
        className="form-control"
        onChange={handleChange}
        //style={{background:"#ccd9ff" , color:"black"}} 
        style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
     >
    
    <div></div>
     <option >Por favor Seccione</option>
     <option value ="No">No</option> 
     <option value ="Yes">Yes</option>
     </select>
    </div>
{/** FIM DA DESCRIÇÃO DO PRODUTO */}


 {/*QUANTIDADE DO PRODUTO */}
    <div className = "md-12 ">
    <label><>Q u a n t i d a d e</> </label><br/>
      <Input
     // style={{background:"#ccd9ff" , color:"black"}} 
     style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
        type="number"
        name="quantity"
        className= " form-group "
        value={quantity}
        onChange={handleChange}
        autoFocus
        size="small"
      />  

    </div>
{/** FIM DA DESCRIÇÃO DO PRODUTO */}



{/*COR DO PRODUTO */}
    <div className="form-group">
    <label> <>C o r </> </label>   

    <select
     // style={{background:"#ccd9ff" , color:"black"}} 
     style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
          name="color" 
          className="form-control" 
          onChange={handleChange}   
    >

    <option className="col-md-3 " >Por favor Seccione</option>
    {colors.map((c) => (
      <option
      key={c}
      value={c}
     >

    {c}

    </option>
    ))}

    </select>
    </div>
{/** FIM DA DESCRIÇÃO DO PRODUTO */}


{/**MARCA  DO PRODUTO */}
    <div className="form-group">
    <label><> M a r k </></label>
      <select
          name="brand" 
          className="form-control" 
          onChange={handleChange}
          //style={{background:"#ccd9ff" , color:"black"}} 
          style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
      >

    <div ></div>
    <option> Por favor Seccione </option>
<div></div> 

{brands.map((b) => (
    <option
         key={b}
        value={b}
        style={{background:"#ccd9ff" , color:"black"}} 
    >

    {b}

    </option>

    ))}

    </select>,
    </div>
{/** FIM DA MARCA DO PRODUTO */}



{/** CATEGORIA DO PRODUTO */}
<div className="form-group">
    <label><>C a t e g o r i a </></label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value = {selectedCategory ? selectedCategory:category._id}
         // style={{background:"#ccd9ff" , color:"black"}} 
         style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
        >
          <option>Seleccione por favar</option>

          {categories.length > 0 &&
            categories.map((c) => (
              <option
                key={c._id}   
                value = {c._id} 
          >
                {c.name}

              </option>
            ))}
        </select>
      </div>
      <div></div>    
{/** FIM DA CATEGGORIA DO PRODUTO */}



{/**  SUBCARTEGORIA DE  CATEGORIA */}
<div>       
    <label><> S u b c a t e g o r i a s </> </label>
          <Select            
            mode="multiple"
            style={{ width: "100%", background:"#ccd9ff",boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)' } }
            //style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
            placeholder="Please select"
            value={arrayOfSubs}
            onChange={(value) => setArrayOfSubs(value)}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option
                 className="text-black"
                // style={{background:"#0000ff", color:"white"}}
               // style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
                 key={s._id}
                 value={s._id}
                >
                 {s.name}
                </Option>
              ))}
         </Select>
</div>
{/** FIM DA CARTEGORIA DO PRODUTO */}



{/** INICIO BOTÃO PARA ACTUALIZAR PRODUTO */}
     <p/>
      <Button
              style={{background:"#40E0D0"}}
              onClick={handleSubmit}
              size="small"
              shape ="round"
              className=" text-dark btn btn-primary mx-auto form-group mb-4 "
              //disass="btn btn-info " 
              type="Button"
             // classabled={!name || name.length <0 || loading}
  
              >S a l v a r
        </Button>
{/** FIM DO BOTÃO PARA ACTUALIZAR PRODUTO */}      
         

    


</form>
 );
};

export default ProductUpdateForm;