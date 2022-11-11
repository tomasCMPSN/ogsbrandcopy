import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllCollectionsGrid = ({ product }) => {
  console.log(product);
  return (
    <Col xs={6} lg={3} className="pb-3 pb-lg-5">
      <Link className="text-dark" style={{ textDecoration: "none" }} to={"/collections/" + product.collectionid + "/" + product._id}>
        <Image
          fluid={true}
          src={product.color1Img1}
          alt={product.name}
          className="d-block mx-auto"
        />
        <div className="fw-bold fs-3">{product.name}</div>
        <div>{product.price} €</div>
      </Link>
    </Col>
  );
};

export default AllCollectionsGrid;
