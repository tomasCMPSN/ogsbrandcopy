import React from "react";
import { Container, Row } from "react-bootstrap";
import AllCollectionsGrid from "./AllCollectionsGrid";

const AllCollections = ({ products }) => {
  console.log(products);
  return (
    <Container style={{ marginTop: "16vh" }}>
      <div className="text-center pt-lg-5 pb-4">
        <h1 className="fw-bold">BROWSE ALL</h1>
      </div>
      <Row className="mx-1 mx-lg-5">
        {products.map((product) => (
          <AllCollectionsGrid product={product} key={product._id} />
        ))}
      </Row>
    </Container>
  );
};

export default AllCollections;
