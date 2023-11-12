import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../contexts/productContext";

const AddForm = () => {
  const {addProduct} = useContext(productContext)
  const [productObj, setProductObj] = useState({
    title: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addProduct(productObj);
    setProductObj({
      title: "",
      price: "",
      image: "",
    });
    navigate("/");
  }

  console.log(productObj, "product");

  return (
    <div>
      <h2>Add form</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={productObj.title}
          placeholder="Title"
          onChange={(e) =>
            setProductObj({ ...productObj, title: e.target.value })
          }
          type="text"
        />
        <input
          value={productObj.price}
          placeholder="Price"
          onChange={(e) =>
            setProductObj({ ...productObj, price: e.target.value })
          }
          type="number"
        />
        <input
          value={productObj.image}
          placeholder="Image link"
          onChange={(e) =>
            setProductObj({ ...productObj, image: e.target.value })
          }
          type="url"
        />

        <button>Save</button>
      </form>
    </div>
  );
};

export default AddForm;
