import React from "react";
import Resizer from  "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";


//COMPONENTES DO ANT DESIGN COMPONENTES
import { DeleteOutlined,
        EditOutlined,
        MailOutlined,
        GoogleOutlined,
        UserOutlined, 
        SafetyOutlined,
        UploadOutlined ,
        PlusOutlined

} from '@ant-design/icons';

//IMPORTAR COMPONENTES DO ANTD PARA SEREM USADOS COMO BTSTRP
import { Button,
    Checkbox,
    Form,
    Input,
    label,
    Avatar,
    Badge
    
    
} from 'antd';

const FileUpload = ( {values, setValues} ) => {
const {user} = useSelector((state) => ({...state}));

const fileUploadAndResize = (e) =>{

let files = e.target.files;
let allUploadedFiles = values.images;

if(files){
        
        for (let i = 0; i < files.length; i++){
                Resizer.imageFileResizer(
                        files[i], 
                        720, 
                        720, 
                        "JPEG", 
                        100,
                        0, 
                        (uri) => {
                                
                        console.log(uri);
                        axios
                        .post(`${process.env.REACT_APP_API}/uploadimages`, {image: uri} ) .then(
                                (res) => {
                
                                console.log('IMAGE UPLOAD RES DATA', res);
                        
                                allUploadedFiles.push(res.data);
                                

                                setValues({ ...values, images: allUploadedFiles});

                        })
                        .catch((err) => {
                                
                                console.log("CLOUDINARY UPLOAD ERR", err);
                        });
                },
                "base64"
                );
                
        }
}


};

const handleImageRemove = (public_id) => {
        axios.post(`${process.env.REACT_APP_API}/removeimage`,
         { public_id }, ).then (
                (res)=> {
                    const {images} = values
                    let filteredImages = images.filter((item) => {
                    return item.public_id !== public_id;
                    });
                    setValues({ ...values, images: filteredImages });
                }).catch((err) => {
                        console.log(err)
                });
        
};

return( 

<div className=' form-group col-md-4  mx-auto'>

<h className="float-left mx-auto form-group mb-1">

<div className=' form-group col-md-0 float-left mx-auto' >      
        { values.images &&
          values.images.map((image) => (
                 <Badge
                         count= "X" 
                         key = {image.public_id} 
                        onClick = {handleImageRemove(image.public_id)}
                        style ={{cursor:"pointer"}}
                 >
                         <Avatar 
                         // 
                         src={image.url} 
                         size ={100} 
                         className="m-3"
                         shape="circle"
                />   
                
                         
                 </Badge>                      
         ))}
 </div> 

  </h>
 
<label size="small" shape="circle" className="btn btn float-left mx-auto form-group mb-1">{<PlusOutlined />}  upload

<Input  
        type="file" 
        multiple 
        accept="images/*" 
        onChange={fileUploadAndResize}
        size="small"
        border="white"
        hidden
        shape="circle"
        className="float-left  text-warning mx-auto  mb-3"
/> 


</label> <p/>
<h className="float-left mx-auto form-group mb-1"> </h>






 </div> 

 
    
    );
}

export default FileUpload;