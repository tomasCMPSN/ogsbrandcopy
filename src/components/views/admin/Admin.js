import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminHomeTable from "./AdminHomeTable";
import AdminTable from "./AdminTable";

const Admin = ({
  collections,
  homeData,
  URLHomeData,
  URLCollections,
  URLProducts,
  getAPI,
}) => {
  console.log(collections);
  return (
    <Container style={{ marginTop: "16vh" }}>
      <div className="text-center">
        <h1>EDIT HOME</h1>
      </div>
      {homeData.length !== 5 && (
        <div className="d-flex justify-content-center mb-2">
          <Button as={Link} to="/admin/create/homedata" variant="success">
            Add home data
          </Button>
        </div>
      )}
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Actions</th>
            <th className="text-nowrap">Collection Name</th>
            <th>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {homeData.map((data) => (
            <AdminHomeTable
              data={data}
              key={data._id}
              URLHomeData={URLHomeData}
            />
          ))}
        </tbody>
      </Table>
      <div className="text-center">
        <h1>COLLECTIONS TABLE</h1>
      </div>
      <div className="d-flex justify-content-center mb-2">
        <Button as={Link} to="/admin/create" variant="success">
          Add Collection
        </Button>
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
