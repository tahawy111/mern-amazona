import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import getQuery from "./../utils/getQuery";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/auth.actions";
import MessageBox from "./../componenets/MessageBox";

const SigninScreen = () => {
  const redirectUrl = getQuery(window.location.search);
  const dispatch = useDispatch();
  const redirect = redirectUrl.redirect ? redirectUrl.redirect : "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin({ email, password }));
  };
  return (
    <Container className="small-container">
      {auth.error && <MessageBox variant="danger">{auth.error}</MessageBox>}
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="my-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div className="mt-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mt-3">
          New customer{" "}
          <Link to={`/signup?redirect=${redirect}`}>Create New Account</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SigninScreen;
