import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

import React from "react";

const Product = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }} className="bg-dark text-light my-3 grow">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <div>
          <Rating
            value={product.rating}
            text={`${product.numReviews} ${
              product.numReviews > 1 ? "Ratings" : "Rating"
            }`}
          />
          <br />
          <span className="font-weight-bold">${product.price}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
