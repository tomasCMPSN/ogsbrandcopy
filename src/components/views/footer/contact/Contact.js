import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container style={{ marginTop: "16vh" }}>
      <div>
        <h1 className="fw-bold pt-5">CONTACT</h1>
      </div>
      <div className="mt-4">
        <p>Write to us at hello@ogsbrand.com</p>
        <p>
          We will contact you within 48 hours (working hours) in order to solve
          your doubts.
        </p>
      </div>
    </Container>
  );
};

export default Contact;
