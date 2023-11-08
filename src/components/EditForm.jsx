import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditForm = ({ getOneProduct, oneProduct, updateProduct }) => {
  const [editedObj, setEditedObj] = useState({
    title: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    oneProduct && setEditedObj(oneProduct);
  }, [oneProduct]);

  function productSave(e) {
    e.preventDefault();
    updateProduct(id, editedObj);
    navigate("/");
  }

  return (
    <div>
      <h2>Edit form</h2>
      <form onSubmit={productSave}>
        <input
          value={editedObj.title}
          placeholder="Title"
          onChange={(e) =>
            setEditedObj({ ...editedObj, title: e.target.value })
          }
          type="text"
        />
        <input
          value={editedObj.price}
          placeholder="Price"
          onChange={(e) =>
            setEditedObj({ ...editedObj, price: e.target.value })
          }
          type="number"
        />
        <input
          value={editedObj.image}
          placeholder="Image link"
          onChange={(e) =>
            setEditedObj({ ...editedObj, image: e.target.value })
          }
          type="url"
        />

        <button>Save</button>
      </form>
    </div>
  );
};

export default EditForm;
