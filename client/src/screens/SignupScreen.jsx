import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import getQuery from "./../utils/getQuery";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions/auth.actions";
import { toast } from "react-toastify";

const SignupScreen = () => {
  const redirectUrl = getQuery(window.location.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirect = redirectUrl.redirect ? redirectUrl.redirect : "/";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { auth } = useSelector((state) => state);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    dispatch(signup({ name, email, password })).then(() => {
      if (auth.user.name) {
        navigate(redirect);
      }
    });
  };
  useEffect(() => {
    if (auth.user.name) {
      navigate(redirect);
    }
  }, [navigate, redirect, auth.user.name]);
  useEffect(() => {
    if (auth.error) {
      toast.error(auth.error);
    }
  }, [auth.error]);
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h1 className="my-3">Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
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
        <Form.Group className="my-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <div className="mt-3">
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="mt-3">
          Already have an account?{" "}
          <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignupScreen;
