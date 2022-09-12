import React from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import getQuery from "../utils/getQuery";
import Rating from "./../componenets/Rating";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.product);
  const queryObj = getQuery(window.location.search);
  const { category, query, price, rating, page, order } = queryObj;

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
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default SearchScreen;
