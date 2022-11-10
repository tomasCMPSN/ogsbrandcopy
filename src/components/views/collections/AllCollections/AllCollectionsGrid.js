import React from "react";
import { Col, Image } from "react-bootstrap";

const AllCollectionsGrid = (product) => {
  console.log(product.product);
  return (
    <Col xs={6} lg={3} className="pb-3 pb-lg-5">
      <Image
        fluid={true}
        src={product.product.color1Img1}
        alt={product.product.name}
        className="d-block mx-auto"
      />
      <div className="fw-bold fs-3">
        {product.product.name}
      </div>
      <div>
        {product.product.price} €
      </div>
    </Col>
  );
};

export default AllCollectionsGrid;
