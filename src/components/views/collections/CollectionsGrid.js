import React from "react";
import { useState } from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const CollectionsGrid = ({ product }) => {
  const [image, setImage] = useState(product.color1Img1);

  return (
    <Col
      onMouseOver={() => {
        if (product.color1Img2 !== "") {
          setImage(product.color1Img2);
        }
      }}
      onMouseOut={() => {
        setImage(product.color1Img1);
      }}
      xs={6}
      lg={3}
      className="pb-3 pb-lg-5"
    >
      <Link
        className="text-dark"
        style={{ textDecoration: "none" }}
        to={"/collections/" + product.collectionid + "/" + product._id}
      >
        <Image
          fluid={true}
          src={
            image === undefined
              ? "https://media.istockphoto.com/id/1335247217/vector/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=jARr4Alv-d5U3bCa8eixuX2593e1rDiiWnvJLgHCkQM="
              : image
          }
          alt={product.name}
          className="d-block mx-auto"
        />
        <div className="fw-bold fs-3">{product.name}</div>
        <div>{product.price} €</div>
      </Link>
    </Col>
  );
};

export default CollectionsGrid;
