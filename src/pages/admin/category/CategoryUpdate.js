import React, { useState, useEffect } from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { getCategory, updateCategory } from '../../../functions/category';
import CategoryForm from '../../../components/forms/CategoryForm';

// COMPONENTES DO ANT DESIGN
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

// DECLARAÇÃO DA ENTIDADE DE ATUALIZAÇÃO DE CATEGORIAS
const CategoryUpdate = ({ history, match }) => {
  // DECLARAÇÃO DE VARIÁVEIS DE ESTADO
  const { user } = useSelector((state) => ({ ...state }));
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  // CARREGAR CATEGORIA AO MONTAR O COMPONENTE
  useEffect(() => {
    loadCategory();
  }, []);

  // MÉTODO PARA CARREGAR CATEGORIA
  const loadCategory = () =>
    getCategory(match.params.slug).then((c) => setName(c.data.name));

  // MÉTODO PARA SUBMETER DADOS NO FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    updateCategory(match.params.slug, { name }, user.token)
      .then((res) => {
        setLoading(false);
        setName('');
        toast.success(`"${res.data.name}" FOI ATUALIZADO(A)`);
        history.push('/admin/category');
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  // DECLARAÇÃO DO FORMULÁRIO DE ATUALIZAÇÃO DE CATEGORIAS
  return (
    <div className="container-fluid"><p /><p /><p /><p />

      <div className="row mx-auto"><p /><p /><p /><p />

        <div className="col-md-3">
          <p /><AdminNav /> <hr /><p />

          <div>
            {loading ? (
              <h4 className="text-danger">Carregando...</h4>
            ) : (
              <h4>Atualizar Categoria</h4>
            )}

            <CategoryForm
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
            />

            <div className="form-group col-mb-3 mx-auto"></div>

            <div className="form-group col-md-9 mx-auto">
              <div className="form-group col-md-10 float-"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;