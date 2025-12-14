import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryForm from '../../../components/forms/CategoryForm';
import LocalSearch from '../../../components/forms/LocalSearch';

// IMPORTAR FUNÇÕES DE CATEGORIA
import { createCategory, getCategories, removeCategory } from '../../../functions/category';

// COMPONENTES DO ANT DESIGN
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

// DECLARAÇÃO DA ENTIDADE DE CRIAÇÃO DE CATEGORIAS
const CategoryCreate = () => {

  // DECLARAÇÃO DE VARIÁVEIS DE ESTADO
  const { user } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  // CHAMADA DO MÉTODO PARA CARREGAR CATEGORIAS
  useEffect(() => {
    loadCategories();
  }, []);

  // MÉTODO PARA CARREGAR CATEGORIAS
  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  // MÉTODO PARA SUBMETER DADOS NO FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    createCategory({ name }, user.token)
      .then((res) => {
        toast.success(`"${res.data.name}" FOI CRIADO(A)`);
        setName('');
        loadCategories();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) toast.error(err.response.data);
        setLoading(false);
      });
  };

  // MÉTODO PARA REMOVER CATEGORIA
  const handleRemove = async (slug) => {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      setLoading(true);
      removeCategory(slug, user.token)
        .then((res) => {
          toast.error(`${res.data.name} FOI ELIMINADO(A)`);
          loadCategories();
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 400) toast.error(err.response.data);
          setLoading(false);
        });
    }
  };

  // MÉTODO PARA FILTRAR CATEGORIAS
  const searched = (keyword) => (c) =>
    c.name.toLowerCase().includes(keyword);

  // DECLARAÇÃO DO FORMULÁRIO DE CATEGORIAS
  return (
    <div className="container-fluid"><p /><p />

      <div className="row"><p /><p /><p />

        <div className="col-md-3 mx-auto" style={{ marginTop: "80px" }}><p />
          <p /><AdminNav /> <hr /><p />

          <div className="form-group col-mb-3 mx-auto">
            <CategoryForm
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              loading={loading}
            />
          </div>

          <p /><p /><p /> <br /><br />
        </div>

        <div className="col-md-9" style={{ marginTop: "70px" }}>
          <div className="form-group col-md-10 mx-auto">
            <LocalSearch
              keyword={keyword}
              setKeyword={setKeyword}
              className="border-dark"
            />
            <hr />

            {/* LISTA DE CATEGORIAS */}
            {loading ? (
              <p>Carregando...</p>
            ) : (
              categories.filter(searched(keyword)).map((c) => (
                <div className="alert alert-secondary" key={c._id}>
                  {c.name}
                  <span
                    onClick={() => handleRemove(c.slug)}
                    className="text-danger btn btn-sm float-right"
                  >
                    <DeleteOutlined />
                  </span>
                  <Link
                    to={`/admin/category/${c.slug}`}
                    className="text-success btn btn-sm float-right"
                  >
                    <EditOutlined />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCreate;