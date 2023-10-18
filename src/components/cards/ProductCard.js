import React from "react";
import { Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import default3 from "../../images/default3.png";

const { Meta } = Card;

const ProductCard = ({ product, handleRemove }) => {
  const { title, description, images, slug } = product;

  return (
    <div className="product-card-container">
      <Card
        className="product-card p-1"
        style={{ height: "100%" }}
        cover={
          <div className="product-card-image">
            <img
              src={images && images.length ? images[0].url : default3}
              alt={title}
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        }
        actions={[
          <EyeOutlined
            key="view"
            onClick={() => handleRemove(slug)}
            style={{ color: "black" }}
          />,
          // Other actions
        ]}
      >
        <Meta title={title} description={`${description && description.substring(0, 40)}...`} />
      </Card>
    </div>
  );
};

export default ProductCard;