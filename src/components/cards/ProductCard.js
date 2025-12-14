import React from "react";
import { Card, Button, Rate, Badge } from "antd";
import { EyeOutlined, ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import default3 from "../../images/default3.png";

const { Meta } = Card;

const ProductCard = ({ product, handleRemove }) => {
  const { title, description, images, slug, price, oldPrice, rating } = product;

  // Garantir que o preço seja um número válido antes de formatar
  const formattedPrice = price ? `Kz ${price.toLocaleString("pt-AO")}` : "Preço indisponível";
  const formattedOldPrice = oldPrice ? `Kz ${oldPrice.toLocaleString("pt-AO")}` : "";

  return (
    <div className="product-card-container">
      <Badge.Ribbon text="-20%" color="red" placement="start">
        <Card
          className="product-card"
          hoverable
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
            transition: "all 0.3s ease-in-out",
          }}
          cover={
            <div style={{ height: "200px", overflow: "hidden" }}>
              <img
                src={images && images.length ? images[0].url : default3}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            </div>
          }
        >
          <Meta
            title={
              <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#333" }}>
                {title.length > 40 ? title.substring(0, 40) + "..." : title}
              </h3>
            }
            description={
              <p style={{ fontSize: "0.85rem", color: "#666", marginBottom: "8px" }}>
                {description ? description.substring(0, 50) + "..." : ""}
              </p>
            }
          />

          {/* Preço e Desconto em Kwanza */}
          <div style={{ marginTop: "8px", fontSize: "1.1rem", fontWeight: "bold", color: "#E44D26" }}>
            {formattedPrice}{" "}
            {formattedOldPrice && (
              <span style={{ textDecoration: "line-through", color: "#999", fontSize: "0.9rem" }}>
                {formattedOldPrice}
              </span>
            )}
          </div>

          {/* Avaliação com Estrelas */}
          <div style={{ marginTop: "6px" }}>
            <Rate disabled defaultValue={rating || 0} style={{ fontSize: "14px" }} />{" "}
            <span style={{ fontSize: "0.85rem", color: "#555" }}>({rating || 0})</span>
          </div>

          {/* Ações do Card */}
          <div className="product-card-actions" style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
            <Link to={`/product/${slug}`}>
              <Button type="primary" shape="round" icon={<EyeOutlined />} size="small">
                Ver
              </Button>
            </Link>
            <Button type="default" shape="round" icon={<ShoppingCartOutlined />} size="small">
              Carrinho
            </Button>
            <Button type="default" shape="circle" icon={<HeartOutlined />} size="small" />
          </div>
        </Card>
      </Badge.Ribbon>
    </div>
  );
};

export default ProductCard;

