import React from "react";
import { Container, Form } from "react-bootstrap";
import { StyledForm } from "../../admin/collectionsCreate/StyledForm";
import { StyledButton } from "../../product/StyledButton";
import { StyledContainer } from "../StyledContainer";

const ResetPassword = () => {
  return (
    <Container style={{ marginTop: "16vh" }}>
      <StyledContainer>
        <div className="pt-4 pb-2">
          <h1 className="fw-bold">REQUEST PASSWORD RESET</h1>
        </div>
      </StyledContainer>
      <StyledForm>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="fs-3">Email</Form.Label>
          <Form.Control type="text" placeholder="Enter email." />
        </Form.Group>
        <div>
          <StyledButton variant="warning" className="w-100 fw-bold fs-5 py-3 mt-5">Submit request</StyledButton>
        </div>
      </StyledForm>
    </Container>
  );
};

export default ResetPassword;
