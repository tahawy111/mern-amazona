import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {
  Navbar,
  Container,
  Nav,
  Badge,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "./actions/product.actions";
import { Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import { signout } from "./slices/authSlice";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignupScreen from "./screens/SignupScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { FaBars } from "react-icons/fa";
import SearchBox from "./componenets/SearchBox";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { categories, catLoading } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [auth.user.name, dispatch]);
  const { cart } = useSelector((state) => state.cart);
  const signoutHandler = () => {
    dispatch(signout());
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? "d-flex flex-column site-container active-cont"
            : "d-flex flex-column site-container"
        }
      >
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Button
              variant="dark"
              onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
            >
              <FaBars size={27} />
            </Button>
            <LinkContainer to="/">
              <Navbar.Brand>amazona</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <SearchBox />
              <Nav className="me-auto w-100 justify-content-end">
                <Link to="/cart" className="nav-link">
                  Cart{" "}
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {auth.user.name ? (
                  <NavDropdown title={auth.user.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      to="#signout"
                      className="dropdown-item"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div
          className={
            sidebarIsOpen
              ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
              : "side-navbar d-flex justify-content-between flex-wrap flex-column"
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories &&
              !catLoading &&
              categories.map((category) => (
                <Nav.Item key={category}>
                  <LinkContainer
                    to={`/search?category=${category}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    <Nav.Link>{category}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              ))}
          </Nav>
        </div>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route
                path="/payment"
                element={
                  auth.user.name ? (
                    <PaymentMethodScreen />
                  ) : (
                    <Navigate to="/signin?redirect=/payment" />
                  )
                }
              />
              <Route
                path="/placeorder"
                element={
                  auth.user.name ? (
                    <PlaceOrderScreen />
                  ) : (
                    <Navigate to="/signin?redirect=/placeorder" />
                  )
                }
              />
              <Route
                path="/shipping"
                element={
                  auth.user.name ? (
                    <ShippingAddressScreen />
                  ) : (
                    <Navigate to="/signin?redirect=/shipping" />
                  )
                }
              />
              <Route
                path="/shipping"
                element={
                  auth.user.name ? (
                    <ShippingAddressScreen />
                  ) : (
                    <Navigate to="/signin?redirect=/shipping" />
                  )
                }
              />
              <Route
                path="/order/:orderId"
                element={
                  auth.user.name ? (
                    <OrderScreen />
                  ) : (
                    <Navigate to="/signin?redirect=/order/:orderId" />
                  )
                }
              />
              <Route
                path="/orderhistory"
                element={
                  auth.user.name ? (
                    <OrderHistoryScreen />
                  ) : (
                    <Navigate to="/signin?redirect=/orderhistory" />
                  )
                }
              />
              <Route
                path="/profile"
                element={
                  auth.user.name ? (
                    <ProfileScreen />
                  ) : (
                    <Navigate to="/signin?redirect=/profile" />
                  )
                }
              />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">
            ©{new Date().getFullYear()} All rights reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
