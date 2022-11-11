import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CollectionsGrid from "../CollectionsGrid";

const Collection = ({ URLProducts, URLCollections}) => {
  const [collection, setCollection] = useState({})
  const [products, setProducts] = useState([])
  const { id } = useParams();

  console.log(products)
  console.log(collection);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const resCollections = await fetch(`${URLCollections}${id}`);
        const collectionApi = await resCollections.json();
        setCollection(collectionApi);
        const resProducts = await fetch(`${URLProducts}${id}`);
        const productsApi = await resProducts.json();
        setProducts(productsApi);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container style={{ marginTop: "16vh" }}>
      <div className="text-center pt-lg-5 pb-4">
        <h1 className="fw-bold">{collection.title}</h1>
      </div>
      <Row className="mx-1 mx-lg-5">
        {products.map((product) => (
          <CollectionsGrid product={product} key={product._id} /> 
        ))}
      </Row>
    </Container>
  );
};

export default Collection;
