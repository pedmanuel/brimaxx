import axios from "axios";

    export const getCategories = async () => 
    await axios.get( `${process.env.REACT_APP_API}/categories`);

    export const getCategory = async (slug) => 
        await axios.get( `${process.env.REACT_APP_API}/category/${slug}`);

    export const removeCategory = async (slug) => 
    await axios.delete( `${process.env.REACT_APP_API}/category/${slug}`,
    {
        headers:{
            
        },
    }
    
    );


    export const updateCategory = async (slug, category) =>
    await axios.put(`${process.env.REACT_APP_API}/category/${slug}`, category, {
      headers: {
        
      },
    });
  

    export const createCategory = async (category) =>
    await axios.post(`${process.env.REACT_APP_API}/category`, category, {
      headers: {
        
      },
    });

    export const getCategorySubs = async (_id) => 
    await axios.get(`${process.env.REACT_APP_API}/category/subs/${_id}`);
   
   
  

