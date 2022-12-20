import React from "react";
import { useState } from "react";
import { useSignup } from "../useSignup";
import { Alert, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { StyledForm } from "../../admin/collectionsCreate/StyledForm";
import { StyledButton } from "../../product/StyledButton";
import { StyledWhiteButton } from "../../product/StyledWhiteButton";
import { StyledContainer } from "../StyledContainer";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error } = useSignup();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <Container style={{ marginTop: "16vh" }}>
      <StyledForm onSubmit={handleSubmit}>
        <div className="pt-4 pb-2">
          <h1 className="fw-bold">REGISTER</h1>
        </div>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="fs-3">Email</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            type="email"
            placeholder="Enter email."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPasswrod">
          <Form.Label className="fs-3">Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            type="password"
            placeholder="Enter password."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCheckbox">
          <Form.Check
            type="checkbox"
            required={true}
            label={
              <span>
                I have read and accept the
                <Link to="/" className="text-decoration-none text-dark fw-bold">
                  {" "}
                  Terms and Conditions
                </Link>{" "}
                and
                <Link to="/" className="text-decoration-none text-dark fw-bold">
                  {" "}
                  Privacy Policy.
                </Link>
              </span>
            }
          />
        </Form.Group>
        {error && <Alert variant="danger">{error}</Alert>}
        <div>
          <StyledButton
            type="submit"
            variant="warning"
            className="w-100 fw-bold fs-5 py-3"
          >
            Create Account
          </StyledButton>
        </div>
      </StyledForm>
      <StyledContainer>
        <hr className="my-5" />
        <p className="text-center fw-bold">Already have an account?</p>
        <Link to="/login">
          <StyledWhiteButton
            variant="warning"
            className="w-100 fw-bold fs-5 py-3"
          >
            Login
          </StyledWhiteButton>
        </Link>
      </StyledContainer>
    </Container>
  );
};

export default Signup;
