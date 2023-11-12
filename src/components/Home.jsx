import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { productContext } from "../contexts/productContext";

const Home = () => {
  const {getProducts,products, deleteProduct} = useContext(productContext)
  useEffect(() => {
    getProducts();
  }, []);

  console.log(products, "home");

  return (
    <div style={{ display: "flex", gap: "200px", flexWrap: "wrap" }}>
      {products.map((card) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={card.image}/>
          <Card.Body>
            <Card.Title>Title: {card.title}</Card.Title>
            <Card.Text>Price: {card.price} $</Card.Text>
            <div style={{ display: "flex", gap: "5px" }}>
              <Link to={`/edit/${card.id}`}>
                <Button variant="primary">Update</Button>
              </Link>
              <Button onClick={() => deleteProduct(card.id)} variant="danger">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
