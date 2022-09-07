import { Button, Container, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import getQuery from "./../utils/getQuery";

const SigninScreen = () => {
  const redirectUrl = getQuery(window.location.search);
  console.log(redirectUrl);
  const redirect = redirectUrl.redirect ? redirectUrl.redirect : "/";
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form>
        <Form.Group className="my-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="my-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
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
