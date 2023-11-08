import React, { useEffect, useState } from "react";
import Appbar from "./components/navbar/Navbar";
import MainRoutes from "./components/MainRoutes";
import axios from "axios";

const App = () => {
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
    <div>
      <MainRoutes
        updateProduct={updateProduct}
        oneProduct={oneProduct}
        getOneProduct={getOneProduct}
        addProduct={addProduct}
        products={products}
        getProducts={getProducts}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default App;
