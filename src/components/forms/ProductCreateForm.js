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

const ProductCreateForm = ({
  handleSubmit, 
  handleChange, 
  setValues,
  handleCategoryChange, 
  subOptions, 
  showSub, 
  values,

  })  => { 
    
//destrutor
const {
    title,
    description,
    price,
    categories,
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

  
   <form onSubmit={handleSubmit}><p/><p/><p/><p/> 

 

      <div  
           style={{background:"", color:"yellow"}}  
           className="   mx-auto  mb-3 text-center "> 
                <h4 className="md-2 "style={{color:"#26004d"}}>   P u b l i c a r   </h4>  
      </div>

   <div
    className='form-group' >
   
   <label><> T í t u l o  </> </label> {/**NOME DO PRODUTO */}
      <Input
      
        type="text"
        name="title"
        className="form-control"
        value={title}
        onChange={handleChange}
        style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}} 
      /> 
    </div>

    <div className='form-group' >
    <label><> C o n t e ú d o </> </label>{/**DESCRIÇÃO DO PRODUTO */}
      <Input
        type="text"
        name="description"
        className="form-control"
        value={description}
        onChange={handleChange}
        style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
      />
     </div>

     <div className='form-group' >
     <label><> P r e ç o  </> </label> {/*PREÇO DO PRODUTO */}
      <Input
       style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
        type="number"
        name="price"
        className="form-control"
        value={price}
        onChange={handleChange}
      />
    </div>

      <div className ="md-12">
        <label><>F r e t e</> </label> {/*PREÇO DO PRODUTO */}<br/>
        <select  
        
        name="shipping"
        className="form-control"
        onChange={handleChange}
        style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
     >
    
    <div></div>
     <option >Por favor Seccione</option>
     <option value ="No">No</option> {/*PREÇO DO PRODUTO */}
     <option value ="Yes">Yes</option>

     </select>
      </div>

    <div className = "md-12 ">
    <label><>Q u a n t i d a d e</> </label> {/*QUANTIDADE DO PRODUTO */}<br/>
      <Input
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

    <div className="form-group">
     
    <label> <>C o r </> </label>   {/*COR DO PRODUTO */}
    <select
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

    <div
    
    className="form-group">
        <label><> M a r c a </></label>
    <select
        name="brand" 
        className="form-control" 
        onChange={handleChange}
        style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
    >

    <div ></div>
    <option> Por favor Seccione </option>

    {brands.map((b) => (
    <option
         key={b}
        value={b}
        style={{background:"white3" , color:"black"}} 
    >

    {b}

    </option>

    ))}


    </select>
    </div>



    <div className="form-group">
    <label><>C a t e g o r i a </></label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          style={{background:"white", boxShadow: '2px 2px 4px rgba(38, 0, 77, 0.5)'}}
        >
          <option>Seleccione por favar</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option
                key={c._id} 
                value={c._id}>

                {c.name}

              </option>
            ))}
        </select>
      </div>

      <div>

      </div>
         


      {showSub && (
        <div>
        
          <label><> S u b c a t e g o ri a s </> </label>

          <Select
            
            mode="multiple"
            style={{ width: "100%", background:"white3" } }
            placeholder="Please select"
            value={subs}
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option

                className="text-black"
                 key={s._id}
                 style={{background:"#0000ff", color:"white"}}
                 value={s._id}
                 
                 >
                 {s.name}

                </Option>
              ))}
          </Select>
        </div>
      )}
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
       
         

    


</form>
 );
};

export default ProductCreateForm;