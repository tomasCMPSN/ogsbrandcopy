import React from "react";
import { Container } from "react-bootstrap";

const AllCollections = ({ products }) => {
  console.log(products);
  return (
    <Container style={{ marginTop: "16vh" }}>
      <div className="text-center">
        <h1>ALL PRODUCTS</h1>
      </div>
    </Container>
  );
};

export default AllCollections;
