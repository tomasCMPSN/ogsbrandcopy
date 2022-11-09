import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { validateURL } from "../../../helpers/ValidateFields";
import { StyledForm } from "../collectionsCreate/StyledForm";

const HomeDataUpdate = ({ URLCollections, URLHomeData, getAPI, collections }) => {
  const [homeData, setHomeData] = useState({});
  const [homeDataName, setHomeDataName] = useState("")
  const { id } = useParams();

  const homeDataimgURLRef = useRef("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${URLHomeData}${id}`);
        const homeDataAPI = await res.json();
        setHomeData(homeDataAPI);
        console.log(homeDataAPI);
        const resCollection = await fetch(`${URLCollections}`);
        const collectionApi = await resCollection.json();
        setHomeDataName(collectionApi[0].title);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(homeDataName);
    const findCollection = collections.find(({ title })  => title === homeDataName)
    console.log(findCollection._id);

    if(!validateURL(homeDataimgURLRef.current.value)){
      Swal.fire("Something went wrong", "Bad URL.", "error");
      return
    }

    const homeDataUpdated = {
      title: findCollection.title,
      imgURL: homeDataimgURLRef.current.value,
      collectionid: findCollection._id
    }

    console.log(homeDataUpdated);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Update'
    }).then( async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URLHomeData}${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(homeDataUpdated)
          });
          if(res.status === 200) {
            Swal.fire(
              'Updated!',
              'Your home data has been updated.',
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
        <h1>Edit home for {homeData.title}</h1>
      </div>
      <StyledForm onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold fs-3" htmlFor="SelectCollection">
            SELECT COLLECTION*
          </Form.Label>
          <Form.Select
          onChange={({ target }) => {
            setHomeDataName(target.value)
            console.log(target.value);
          }}  required={true} id="SelectCollection">
            {collections.map((collection) => (
              <option key={collection._id}>{collection.title}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img5">
          <Form.Label className="fw-bold fs-3">IMAGE URL*</Form.Label>
          <Form.Control
            defaultValue={homeData.imgURL}
            ref={homeDataimgURLRef}
            required={true}
            type="url"
            placeholder="Enter image URL."
          />
        </Form.Group>
        <div>
          <Button type="submit" variant="info fw-bold w-100">
            UPDATE
          </Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default HomeDataUpdate;
