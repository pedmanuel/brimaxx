import React from "react";
import { Card } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import default3 from "../../images/default3.png";

const { Meta } = Card;

const ProductCard = ({ product, handleRemove }) => {
const { title, description, images, slug } = product;

  return (
    <div className=" product-card-container-2 " >
      <Card
          className="hover-effect p-1  sombra-5 mt-4 "
          style={{ border: "5px solid white", borderRadius: "15px ", height:"100% ",objectFit:""  }}
          
          cover={<img src={images && images.length ? images[0].url : default3} 
          style={{ objectFit: "cover", height: "80%", margin: "auto" }}
                             
          />}
          actions={[
                <EyeOutlined
                  key="view"
                  onClick={() => handleRemove(slug)}
                  style={{ background: "",  color: "cyan" }}
                />,
               <Link 
                  to={`/product/${slug}`} 
                  key="cart" 
                  style={{ color: "cyan", outline: "none" }}><ShoppingCartOutlined />
               </Link>,
            ]}
      >
        <Meta title={title} description={`${description && description.substring(0, 40)}...`} />
      </Card>
    </div>
  );
};

export default ProductCard;