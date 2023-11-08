import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddForm from "./AddForm";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import UserDetails from "./UserDetails";
import EditForm from "./EditForm";

const MainRoutes = ({
  addProduct,
  getProducts,
  products,
  deleteProduct,
  getOneProduct,
  oneProduct,
  updateProduct,
}) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              getProducts={getProducts}
              products={products}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route
          path="edit/:id"
          element={
            <EditForm
              updateProduct={updateProduct}
              oneProduct={oneProduct}
              getOneProduct={getOneProduct}
            />
          }
        />
        <Route path="/add" element={<AddForm addProduct={addProduct} />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
