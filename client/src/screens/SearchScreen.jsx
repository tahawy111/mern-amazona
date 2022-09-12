import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../actions/product.actions";
import getQuery from "../utils/getQuery";
import Rating from "./../componenets/Rating";
import { LinkContainer } from "react-router-bootstrap";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.product);
  const queryObj = getQuery(window.location.search);
  const { category, query, price, rating, page, order } = queryObj;
  useEffect(() => {
    dispatch(searchProducts());
  }, []);
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || page;
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;
    const filterRating = filter.rating || rating;
    const filterPrice = filter.price || price;
    const filterOrder = filter.order || order;
    return `/search?category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${filterOrder}&page=${filterPage}`;
  };
  const prices = [
    { name: "$1 to $50", value: "1-50" },
    { name: "$51 to $200", value: "51-200" },
    { name: "$201 to $1000", value: "201-1000" },
    { name: "$1001 or more", value: "1001-more" },
  ];
  const ratings = [
    { name: "4stars & up", rating: 4 },
    { name: "3stars & up", value: 3 },
    { name: "2stars & up", value: 2 },
    { name: "1stars & up", value: 1 },
  ];

  return (
    <div>
      <Helmet>
        <title>SearchProducts</title>
      </Helmet>

      <Row>
        <Col md={3}>
          <h3>Department</h3>
          <div>
            <ul>
              <li>
                <Link
                  className={"all" === category ? "text-bold" : ""}
                  to={getFilterUrl({ category: "all" })}
                >
                  Any
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    className={c === category ? "text-bold" : ""}
                    to={getFilterUrl({ category: c })}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Price</h3>

            <ul>
              <li>
                <Link
                  className={"all" === price ? "text-bold" : ""}
                  to={getFilterUrl({ price: "all" })}
                >
                  Any
                </Link>
              </li>
              {prices.map((p) => (
                <li key={p.value}>
                  <Link
                    to={getFilterUrl({ price: p.value })}
                    className={p.value === price ? "text-bold" : ""}
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Avg. Customer Review</h3>
            <ul>
              {ratings.map((r) => (
                <li key={r.name}>
                  <Link
                    to={getFilterUrl({ rating: r.rating })}
                    className={`${r.rating}` === `${rating}` ? "text-bold" : ""}
                  >
                    <Rating caption={" & up"} rating={r.rating}></Rating>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={getFilterUrl({ rating: "all" })}
                  className={rating === "all" ? "text-bold" : ""}
                >
                  <Rating caption={" & up"} rating={0}></Rating>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={9} className="justify-content-between mb-3">
          <Col md={6}>
            <div>
              {/* {countProducts === 0 ? "No" : countProducts} Results */}
              {query !== "all" && ` : ${query}`}
              {category !== "all" && ` : ${category}`}
              {price !== "all" && ` : Price ${price}`}
              {rating !== "all" && " : Rating " + rating + " & up"}
              {query !== "all" ||
              category !== "all" ||
              rating !== "all" ||
              price !== "all" ? (
                <Button variant="light" onClick={() => navigate("/search")}>
                  <i className="fas fa-times-circle"></i>
                </Button>
              ) : null}
            </div>
          </Col>
        </Col>
        <Col className="text-end">
          Sort by{" "}
          <select
            value={order}
            onChange={(e) => {
              navigate(getFilterUrl({ order: e.target.value }));
            }}
          >
            <option value="newest">Newest Arrivals</option>
            <option value="lowest">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
            <option value="toprated">Avg. Customer Reviews</option>
          </select>
        </Col>
      </Row>
      {/* {products.length === 0 && <MessageBox>No Product Found</MessageBox>}

      <Row>
        {products.map((product) => (
          <Col sm={6} lg={4} className="mb-3" key={product._id}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row> */}

      <div>
        {/* {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            className="mx-1"
            to={getFilterUrl({ page: x + 1 })}
          >
            <Button
              className={Number(page) === x + 1 ? "text-bold" : ""}
              variant="light"
            >
              {x + 1}
            </Button>
          </LinkContainer>
        ))} */}
      </div>
    </div>
  );
};

export default SearchScreen;
