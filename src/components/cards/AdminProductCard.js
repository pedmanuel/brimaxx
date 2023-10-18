import React from "react";
import { Card } from "antd";
import styles from "../../App.css";

import default3 from "../../images/default3.png";
import default2 from "../../images/default2.jpg";
import { EditOutlined, DeleteOutlined,EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

const AdminProductCard = ({ product, handleRemove }) => {

  //destructure
  const { title, description, images, slug } = product;

  return (
    <div className=" bordar-1 sombra-1 mt-4" style={{ backgroundColor: "white" }}>
      <Card
        className="invisivel"
        style={{ height:"40%", border: "none" }}
        cover={
          <img
            src={images && images.length ? images[0].url : default3}
            style={{ height:"40%", border: "none" }}
            className="p-4"
          />
        }
        actions={[
          <DeleteOutlined
            className="text-danger"
            onClick={() => handleRemove(slug)}
          />,
          <Link to={`/admin/products/${slug}`}>
            <EditOutlined className="text-info mx-auto float-left" />
          </Link>,
        ]}
      >
        <Meta
          title={title}
          description={`${description && description.substring(0, 40)}... `}
        />
      </Card>
    </div>
  );
};

export default AdminProductCard;