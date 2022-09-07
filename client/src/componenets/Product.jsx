import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = (props) => {
  const product = props.product;
  return (
    <Card className="product" key={product._id}>
      <img src={product.image} alt={product.name} className="card-img-top" />
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
