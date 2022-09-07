import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingBox from "../componenets/LoadingBox";
import MessageBox from "../componenets/MessageBox";
import { cartAddItem } from "../slices/cartSlice";
import Rating from "./../componenets/Rating";

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.cart);
  const product = products.products.find((item) => item.slug === slug);
  const existItem = cart.cartItems.find((x) => x._id === product._id);
  const quantity = existItem ? existItem.quantity + 1 : 1;
  if (product.countInStock < quantity) {
    window.alert("Sorry. Product is out of stock");
    return;
  }
  const addToCartHandler = () => {
    dispatch(cartAddItem({ ...product, quantity }));
  };

  return products.loading ? (
    <div className="text-center">
      <LoadingBox />
    </div>
  ) : products.error ? (
    <div>{products.error}</div>
  ) : product ? (
    <div>
      <Row>
        <Col md={6}>
          <img className="img-large" src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 5 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : product.countInStock <= 5 &&
                        product.countInStock > 0 ? (
                        <Badge bg="warning" style={{ color: "black" }}>
                          Only {product.countInStock} Left
                        </Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button variant="primary" onClick={addToCartHandler}>
                      Add To Cart
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  ) : (
    <MessageBox variant="danger">Product {slug} is Not Found</MessageBox>
  );
};

export default ProductScreen;
