import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { validateCollectionName } from "../../helpers/ValidateFields";
import { StyledForm } from "./StyledForm";

const CollectionsCreate = ({ URLCollections, getAPI }) => {
  const [title, setTitle] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateCollectionName(title)) {
        Swal.fire("Something went wrong", "Empty title field.", "error");
        return
    }

    const newCollection = {
      title
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URLCollections, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newCollection)
          });
          if(res.status === 201){
            Swal.fire("Created!", "Your new collection has been created.", "success");
            getAPI();
            navigate("/admin")
          }
        } catch (error) {
          console.log(error);
        }
      }
    })
  };

  return (
    <Container style={{ marginTop: "16vh" }}>
      <div className="text-center">
        <h1>Add Collection</h1>
      </div>
      <StyledForm onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label className="fw-bold fs-3">TITLE</Form.Label>
          <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <div>
          <Button type="submit" variant="success w-100">CREATE</Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default CollectionsCreate;
