import React, { createContext,useState  } from 'react';
import axios from "axios";

export const productContext = createContext()

const ProductContextProvider = ({ children }) => {
    const API = "http://localhost:8000/products";

    const [products, setProducts] = useState([]);
    const [oneProduct, setOneProduct] = useState(null);
  
    async function addProduct(newProduct) {
      await axios.post(API, newProduct);
      getProducts();
    }
  
    async function getProducts() {
      let res = await axios.get(API);
      setProducts(res.data);
    }
  
    async function deleteProduct(id) {
      await axios.delete(`${API}/${id}`);
      getProducts();
    }
  
    async function getOneProduct(id) {
      const res = await axios.get(`${API}/${id}`);
      setOneProduct(res.data);
    }
  
    async function updateProduct(id, editedProduct) {
      await axios.patch(`${API}/${id}`, editedProduct);
      getProducts();
    }
   
    return (
        <productContext.Provider value={{
            products,
            updateProduct,
            oneProduct,
            getOneProduct,
            addProduct,
            getProducts,
            deleteProduct,
        }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;