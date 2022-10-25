import React from "react";
import { Col } from "react-bootstrap";

const AllCollectionsGrid = (product) => {
    console.log(product);
  return (
    <Col xs={6} lg={3}>
      <div>
        <h1>{product.product.name}</h1>
      </div>
    </Col>
  );
};

export default AllCollectionsGrid;
