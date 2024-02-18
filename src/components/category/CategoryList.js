import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../functions/category';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((c) => {
      setCategories(c.data);
      setLoading(false);
    });
  }, []);

  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id} className="col-md-4">
        <Link to={`/category/${c.slug}`} className="btn btn-outline-dark btn-lg btn-block btn-raised mt-3">
          {c.name}
        </Link>
      </div>
    ));

  return (
    <div className="container">
       
      <div className="row">
        {loading ? (
          <h4 className="text-center" >Carregando...</h4>
        ) : (
          showCategories()
        )}
      </div>
    </div>
  );
};

export default CategoryList;