import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <Carousel
        className="my-3"
        style={{
          backgroundImage: "linear-gradient(to right, #473731 , #2f2621)",
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-50 float-end"
            src="images/slytherin.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Has just arrived!</h3>
            <h2>A Summer Collection</h2>
            <p>
              Time-Turner necklace, Gryffindor Sweatshirt, Slytherin robe and
              much more..
            </p>
            <a className="btn btn-primary btn-lg" href="#products">
              Shop Now!
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className="my-5 text-center">Top Rated Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id}>
            <Link to={`/product/${product._id}`}>
              <Card className="bg-dark grow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Text className="text-light">
                    {product.name} (${product.price})
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductCarousel;
