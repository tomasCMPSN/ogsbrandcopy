import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { StyledForm } from "../collectionsCreate/StyledForm";
import { validateCollectionName } from "../../../helpers/ValidateFields";
import Swal from "sweetalert2";

const CollectionsUpdate = ({ URLCollections, getAPI }) => {
  const [collection, setCollection] = useState({});
  const { id } = useParams();
  const collectionTitleRef = useRef("");
  console.log(collection.products);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${URLCollections}${id}`);
        const collectionApi = await res.json();
        setCollection(collectionApi);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateCollectionName(collectionTitleRef.current.value)) {
      Swal.fire("Something went wrong", "Empty title field.", "error");
      console.log(collectionTitleRef.current.value);
      return
    }

    const collectionTitleUpdated = {
      title: collectionTitleRef.current.value
    }
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Update'
    }).then( async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URLCollections}${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(collectionTitleUpdated)
          });
          if(res.status === 200) {
            Swal.fire(
              'Updated!',
              'Your collection has been updated.',
              'success'
            )
            getAPI();
            navigate("/admin")
          }
        } catch (error) {
          console.log(error);
        }
      }
    })
  }

  return (
    <Container style={{ marginTop: "16vh" }}>
      <div className="text-center">
        <h1>Edit title</h1>
      </div>
      <StyledForm onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label className="fw-bold fs-3">TITLE</Form.Label>
          <Form.Control type="text" required={true} defaultValue={collection.title} ref={collectionTitleRef} />
        </Form.Group>
        <div>
          <Button type="submit" variant="info fw-bold w-100">UPDATE</Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default CollectionsUpdate;
