import React, { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { StyledForm } from "../../admin/collectionsCreate/StyledForm";
import { StyledButton } from "../../product/StyledButton";
import { StyledWhiteButton } from "../../product/StyledWhiteButton";
import { StyledContainer } from "../StyledContainer";
import { useLogin } from "../useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error} = useLogin()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    navigate("/")
  };

  return (
    <Container style={{ marginTop: "16vh" }}>
      <StyledForm onSubmit={handleSubmit}>
        <div className="pt-4 pb-2">
          <h1 className="fw-bold">LOGIN</h1>
        </div>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="fs-3">Email</Form.Label>
          <Form.Control
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPasswrod">
          <Form.Label className="fs-3">Password</Form.Label>
          <Form.Control
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password."
          />
        </Form.Group>
        <Link to="/resetPassword" className="text-decoration-none text-dark">
          <p className="my-4">Forgot password?</p>
        </Link>
        {error && <Alert variant="danger">{error}</Alert>}
        <div>
          <StyledButton
            type="submit"
            variant="warning"
            className="w-100 fw-bold fs-5 py-3"
          >
            Login
          </StyledButton>
        </div>
      </StyledForm>
      <StyledContainer>
        <hr className="my-5" />
        <p className="text-center fw-bold">Don't have an account?</p>
        <Link to="/signup">
          <StyledWhiteButton
            variant="warning"
            className="w-100 fw-bold fs-5 py-3"
          >
            Create Account
          </StyledWhiteButton>
        </Link>
      </StyledContainer>
    </Container>
  );
};

export default Login;
