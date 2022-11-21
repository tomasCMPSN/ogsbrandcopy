import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ProductTable from "./ProductTable";

const AdminTable = ({collection, URLCollections, URLProducts, getAPI}) => {
  const [products, setProducts] = useState([]);
  console.log(collection._id);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${URLProducts}${collection._id}`);
        const productsAPI = await res.json();
        console.log(productsAPI);
        setProducts(productsAPI);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, []);

  console.log(products);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URLCollections}${_id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.status === 200) {
            Swal.fire("Deleted!", "Your collection has been deleted.", "success");
            getAPI();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      <div className="text-center">
        <h1>{collection.title}</h1>
      </div>
      <div className="text-center mb-3">
        <Button as={ Link } to={`/admin/update/${collection._id}`} className="fw-bold me-2" variant="info">UPDATE TITLE</Button>
        <Button onClick={() => handleDelete(collection._id)} className="fw-bold" variant="danger">DELETE</Button>
      </div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th className="text-nowrap">Price €</th>
            <th>Colors</th>
            <th>Description</th>
            <th>Weight</th>
            <th>Sizes</th>
            <th className="text-nowrap">Color 1 Name</th>
            <th>C1I1</th>
            <th>C1I2</th>
            <th>C1I3</th>
            <th>C1I4</th>
            <th>C1I5</th>
            <th className="text-nowrap">Color 2 Name</th>
            <th>C2I1</th>
            <th>C2I2</th>
            <th>C2I3</th>
            <th>C2I4</th>
            <th>C2I5</th>
            <th className="text-nowrap">Color 3 Name</th>
            <th>C3I1</th>
            <th>C3I2</th>
            <th>C3I3</th>
            <th>C3I4</th>
            <th>C3I5</th>
          </tr>
        </thead>
        <tbody>
            {products.map((product) => (
              <ProductTable product={product} key={product._id} URLCollections={URLCollections} URLProducts={URLProducts} getAPI={getAPI}/>
            ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center mb-2 mt-2">
        <Button as={ Link } to={`/admin/${collection._id}/create`} variant="success">Add Product To {collection.title}</Button>
      </div>
    </div>
  );
};

export default AdminTable;
