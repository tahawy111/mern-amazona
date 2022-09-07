import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import Product from "../componenets/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../componenets/LoadingBox";

const HomeScreen = () => {
  const products = useSelector((state) => state.product);

  return (
    <div>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        {products.loading ? (
          <LoadingBox />
        ) : products.error ? (
          <h3 color="red">{products.error}</h3>
        ) : (
          <Row>
            {products.products.map((product) => (
              <Col sm={6} md={4} lg={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
