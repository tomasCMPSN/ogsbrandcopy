import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CollectionsGrid from "../CollectionsGrid";
import  useData  from "../useData"

const Collection = ({ URLProducts, URLCollections }) => {
  const { id } = useParams();
  const [dataCollections] = useData(URLCollections, id)
  const [dataProducts] = useData(URLProducts, id)

  console.log(dataCollections);
  console.log(dataProducts);

  useEffect(() => {
  }, [id]);

  return (
    <Container style={{ marginTop: "16vh" }}>
      <div className="text-center pt-lg-5 pb-4">
        <h1 className="fw-bold">{dataCollections.title}</h1>
      </div>
      <Row className="mx-1 mx-lg-5">
        {dataProducts.map((product) => (
          <CollectionsGrid product={product} key={product._id} />
        ))}
      </Row>
    </Container>
  );
};

export default Collection;
