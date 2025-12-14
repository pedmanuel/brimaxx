import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubForm from '../../../components/forms/SubForm';
import LocalSearch from '../../../components/forms/LocalSearch';

// IMPORTAR FUNÇÕES DE CATEGORIA E SUBCATEGORIA
import { getCategories } from '../../../functions/category';
import { createSub, getSubs, removeSub } from '../../../functions/sub';

// COMPONENTES DO ANT DESIGN
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

// DECLARAÇÃO DA ENTIDADE DE CRIAÇÃO DE SUBCATEGORIAS
const SubCreate = () => {
  // DECLARAÇÃO DE VARIÁVEIS DE ESTADO
  const { user } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState('');
  const [subs, setSubs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');

  // CARREGAR CATEGORIAS E SUBCATEGORIAS AO MONTAR O COMPONENTE
  useEffect(() => {
    loadCategories();
    loadSubs();
  }, []);

  // MÉTODO PARA CARREGAR CATEGORIAS
  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  // MÉTODO PARA CARREGAR SUBCATEGORIAS
  const loadSubs = () => getSubs().then((c) => setSubs(c.data));

  // MÉTODO PARA SUBMETER DADOS NO FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    createSub({ name, parent: category }, user.token)
      .then((res) => {
        toast.success(`"${res.data.name}" FOI CRIADO(A)`);
        setName('');
        loadSubs();
      })
      .catch((err) => {
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  // MÉTODO PARA REMOVER SUBCATEGORIA
  const handleRemove = async (slug) => {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      removeSub(slug, user.token)
        .then((res) => {
          toast.error(`${res.data.name} FOI ELIMINADO(A)`);
          loadSubs();
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
        });
    }
  };

  // MÉTODO PARA FILTRAR SUBCATEGORIAS
  const searched = (keyword) => (c) =>
    c.name.toLowerCase().includes(keyword);

  // DECLARAÇÃO DO FORMULÁRIO DE CRIAÇÃO DE SUBCATEGORIAS
  return (
    <div className="container-fluid"><p /><p />
      <div className="row"><p /><p /><p />
        <div className="col-md-3 mx-auto" style={{ marginTop: '80px' }}><p />
          <p /><AdminNav /> <hr /><p />

          <label
            className="text-dark form-control mb-3 text-center"
            style={{ background: 'rgba(0, 0, 0, 0.1)' }}
          >
            <b>C a t e g o r i a</b>
          </label>

          <div className="form-group">
            <select
              name="category"
              className="form-control border-dark"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group col-mb-3 mx-auto">
            <SubForm
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
            />
          </div>

          <div className="form-group col-mb-3 mx-auto"></div>
        </div>

        <div className="col-md-9 mx-auto" style={{ marginTop: '80px' }}>
          <div className="form-group col-md-10 float-">
            <LocalSearch
              keyword={keyword}
              setKeyword={setKeyword}
              className="border-info"
            />
            <hr />

            {subs.filter(searched(keyword)).map((c) => (
              <div className="alert alert-secondary" key={c._id}>
                {c.name}
                <span
                  onClick={() => handleRemove(c.slug)}
                  className="text-danger btn btn-sm float-right"
                >
                  <DeleteOutlined />
                </span>
                <Link
                  to={`/admin/sub/${c.slug}`}
                  className="text-success btn btn-sm float-right"
                >
                  <EditOutlined />
                </Link>
              </div>
            ))}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCreate;