import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminTable from "./AdminTable";

const Admin = ({collections, URLCollections, URLProducts, getAPI}) => {
    console.log(collections);
  return (
    <Container style={{ marginTop: "16vh" }}>
      <div className="text-center">
        <h1>COLLECTIONS TABLE</h1>
      </div>
      <div className="d-flex justify-content-center mb-2">
        <Button as={Link} to="/admin/create" variant="success">Add Collection</Button>
      </div>
      {collections.map((collection) => (
        <AdminTable
          collection={collection}
          key={collection._id}
          URLCollections={URLCollections}
          URLProducts={URLProducts}
          getAPI={getAPI}
        />
      ))}
    </Container>
  );
};

export default Admin;
