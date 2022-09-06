import "../App.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./../actions/product.actions";

const HomeScreen = () => {
  const shouldLog = useRef(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(getProducts());
    }
  }, [dispatch]);

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {/* {products.map((product) => (
          <div className="product" key={product._id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add To Cart</button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default HomeScreen;
