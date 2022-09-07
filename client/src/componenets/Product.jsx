import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAddItem } from "../slices/cartSlice";
import Rating from "./Rating";

const Product = (props) => {
  const product = props.product;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const existItem = cart.cartItems.find((x) => x._id === product._id);
  const quantity = existItem ? existItem.quantity + 1 : 1;
  const addToCartHandler = (product) => {
    if (product.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch(cartAddItem({ ...product, quantity }));
  };
  return (
    <Card className="product" key={product._id}>
      <img src={product.image} alt={product.name} className="card-img-top" />
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        <Button
          variant="primary"
          disabled={product.countInStock < quantity}
          onClick={() => addToCartHandler(product)}
        >
          {product.countInStock < quantity ? "Out of stock" : "Add To Cart"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
