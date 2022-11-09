import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { validateCollectionName, validateURL } from "../../../helpers/ValidateFields";
import { StyledForm } from "../collectionsCreate/StyledForm";

const HomeDataCreate = ({ URLCollections, collections, URLHomeData, getAPI }) => {
  const [homeDataTitle, setHomeDataTitle] = useState("");
  const [imgURL, setImgURL] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${URLCollections}`);
        const collectionApi = await res.json();
        setHomeDataTitle(collectionApi[0].title);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(homeDataTitle);
    console.log(imgURL);
    const findCollection = collections.find(({ title })  => title === homeDataTitle)
    console.log(findCollection._id);

    if (
      !validateCollectionName(homeDataTitle) ||
      !validateURL(imgURL)
    ) {
      Swal.fire("Oops...", "Something went wrong!", "error")
    }

    const newHomeData ={
      title: homeDataTitle,
      imgURL,
      collectionid: findCollection._id
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
          const res = await fetch(URLHomeData, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newHomeData)
          });
          if(res.status === 201){
            Swal.fire("Created!", "Your new home data has been created.", "success");
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
        <h1>Add home data</h1>
      </div>
      <StyledForm onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold fs-3" htmlFor="SelectCollection">
            SELECT COLLECTION*
          </Form.Label>
          <Form.Select
            onChange={({ target }) => {
              setHomeDataTitle(target.value);
              console.log(target.value);
            }}
            required={true}
            id="SelectCollection"
          >
            {collections.map((collection) => (
              <option key={collection._id}>{collection.title}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img5">
          <Form.Label className="fw-bold fs-3">IMAGE URL*</Form.Label>
          <Form.Control
            required={true}
            type="url"
            placeholder="Enter image URL."
            onChange={(e) => setImgURL(e.target.value)}
          />
        </Form.Group>
        <div>
          <Button type="submit" variant="success w-100">
            CREATE
          </Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default HomeDataCreate;
