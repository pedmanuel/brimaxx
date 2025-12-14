import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { getProductsByCount } from "../../../functions/product";
import AdminProductCard from "../../../components/cards/AdminProductCard";
import { Spin, Row, Col } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    try {
      const res = await getProductsByCount(10); // Carrega 10 produtos (ajuste conforme necessário)
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      toast.error("Erro ao carregar os produtos");
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Admin */}
        <div className="col-md-3 mx-auto" style={{ marginTop: "60px" }}>
          <AdminNav />
        </div>

        {/* Conteúdo Principal */}
        <div className="col-md-9">
          <div className="text-center my-4">
            <h2 style={{ color: "#26004d", fontWeight: "bold" }}>
              <ShoppingOutlined style={{ fontSize: "1.5rem", marginRight: "8px" }} />
              Gerenciar Produtos
            </h2>
            <hr />
          </div>

          {/* Carregamento */}
          {loading ? (
            <div className="text-center">
              <Spin size="large" />
              <p>Carregando produtos...</p>
            </div>
          ) : (
            <Row gutter={[16, 16]}>
              {products.map((product) => (
                <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
                  <AdminProductCard product={product} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;