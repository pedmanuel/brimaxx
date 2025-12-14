import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubForm from '../../../components/forms/SubForm';
import { getCategories } from '../../../functions/category';
import { getSub, updateSub } from '../../../functions/sub';

// DECLARAÇÃO DA ENTIDADE DE ATUALIZAÇÃO DE SUBCATEGORIAS
const SubUpdate = ({ match, history }) => {
  // DECLARAÇÃO DE VARIÁVEIS DE ESTADO
  const { user } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [parent, setParent] = useState('');

  // CARREGAR CATEGORIAS E SUBCATEGORIA AO MONTAR O COMPONENTE
  useEffect(() => {
    loadCategories();
    loadSub();
  }, []);

  // MÉTODO PARA CARREGAR CATEGORIAS
  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  // MÉTODO PARA CARREGAR SUBCATEGORIA
  const loadSub = () =>
    getSub(match.params.slug).then((s) => {
      setName(s.data.name);
      setParent(s.data.parent);
    });

  // MÉTODO PARA SUBMETER DADOS NO FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    updateSub(match.params.slug, { name, parent }, user.token)
      .then((res) => {
        setName('');
        loadSub();
        toast.success(`"${res.data.name}" FOI ATUALIZADO(A)`);
        history.push('/admin/sub');
      })
      .catch((err) => {
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  // DECLARAÇÃO DO FORMULÁRIO DE ATUALIZAÇÃO DE SUBCATEGORIAS
  return (
    <div className="container-fluid"><p /><p />
      <div className="row"><p /><p /><p />
        <div className="col-md-3 mx-auto"><p />
          <AdminNav />
          <hr /><p />

          <label
            className="text-dark form-control mb-3 text-center"
            style={{ background: '#7FFFD4' }}
          >
            <b>c a t e g o r i a s</b>
          </label>

          <div className="form-group">
            <select
              name="category"
              className="form-control"
              onChange={(e) => setParent(e.target.value)}
            >
              {categories.length > 0 &&
                categories.map((c) => (
                  <option
                    key={c._id}
                    value={c._id}
                    selected={c._id === parent}
                  >
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
        </div>

        <div className="col-md-9 mx-auto">
          <div className="form-group"></div>
        </div>
      </div>
    </div>
  );
};

export default SubUpdate;