import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validateCollectionName,
  validateColor,
  validatePrice,
  validateURL,
} from "../../../helpers/ValidateFields";
import { StyledForm } from "../collectionsCreate/StyledForm";

const CollectionsProductCreate = ({ URLCollections, URLProducts, getAPI }) => {
  const [collection, setCollection] = useState({});
  const { id } = useParams();

  console.log(collection._id);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [colors, setColors] = useState(0);
  const [description, setDescription] = useState("");
  const [sizeXS, setSizeXS] = useState(false)
  const [sizeS, setSizeS] = useState(false)
  const [sizeM, setSizeM] = useState(false)
  const [sizeL, setSizeL] = useState(false)
  const [sizeXL, setSizeXL] = useState(false)
  const [sizeXXL, setSizeXXL] = useState(false)
  const [size3XL, setSize3XL] = useState(false)
  const collectionid = collection._id;

  const [color1Name, setColor1Name] = useState("");
  const [color1Img1, setColor1Img1] = useState("");
  const [color1Img2, setColor1Img2] = useState("");
  const [color1Img3, setColor1Img3] = useState("");
  const [color1Img4, setColor1Img4] = useState("");
  const [color1Img5, setColor1Img5] = useState("");
  const [color2Name, setColor2Name] = useState("");
  const [color2Img1, setColor2Img1] = useState("");
  const [color2Img2, setColor2Img2] = useState("");
  const [color2Img3, setColor2Img3] = useState("");
  const [color2Img4, setColor2Img4] = useState("");
  const [color2Img5, setColor2Img5] = useState("");
  const [color3Name, setColor3Name] = useState("");
  const [color3Img1, setColor3Img1] = useState("");
  const [color3Img2, setColor3Img2] = useState("");
  const [color3Img3, setColor3Img3] = useState("");
  const [color3Img4, setColor3Img4] = useState("");
  const [color3Img5, setColor3Img5] = useState("");

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
    e.preventDefault();

    if (
      !validateCollectionName(name) ||
      !validatePrice(price) ||
      !validateColor(colors) ||
      !validateURL(color1Img1)
    ) {
      Swal.fire("Oops...", "Invalid validation.", "error");
      return;
    }

    if(colors === "2" && color2Name === "") {
      Swal.fire("Oops...", "Color 2 name for 2 colors", "error");
      return;
    }

    if (colors === "3" && color3Name === "") {
      Swal.fire(
        "Oops...",
        "Color 3 name  and color 2 name are necessary for 3 colors",
        "error"
      );
      return;
    }

    if (colors === "3" && color2Name === "") {
      Swal.fire(
        "Oops...",
        "Color 2 name is necessary too for 3 colors",
        "error"
      );
      return;
    }

    if (colors === "2" && color2Img1 === "") {
      Swal.fire("Oops...", "Color 2 image 1 for 2 colors", "error");
      return;
    }

    if (colors === "3" && color3Img1 === "") {
      Swal.fire(
        "Oops...",
        "Color 3 image 1  and color 2 image 1 are necessary for 3 colors",
        "error"
      );
      return;
    }

    if (colors === "3" && color2Img1 === "") {
      Swal.fire(
        "Oops...",
        "Color 2 image 1 is necessary too for 3 colors",
        "error"
      );
      return;
    }

    const sizesData = []

    if (sizeXS === true) {
      sizesData.push("XS")
    }
    if (sizeS === true) {
      sizesData.push("S")
    }
    if (sizeM === true) {
      sizesData.push("M")
    }
    if (sizeL === true) {
      sizesData.push("L")
    }
    if (sizeXL === true) {
      sizesData.push("XL")
    }
    if (sizeXXL === true) {
      sizesData.push("XXL")
    }
    if (size3XL === true) {
      sizesData.push("3XL")
    }

    const newProduct = {
      name,
      price,
      colors,
      description,
      sizesData,
      collectionid,
      color1Name,
      color1Img1,
      color1Img2,
      color1Img3,
      color1Img4,
      color1Img5,
      color2Name,
      color2Img1,
      color2Img2,
      color2Img3,
      color2Img4,
      color2Img5,
      color3Name,
      color3Img1,
      color3Img2,
      color3Img3,
      color3Img4,
      color3Img5,
    };

    console.log(newProduct);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URLProducts, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
          });
          if (res.status === 201) {
            Swal.fire(
              "Created!",
              "Your new product has been created.",
              "success"
            );
            getAPI();
            navigate("/admin");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <Container style={{ marginTop: "16vh" }}>
      <div className="text-center">
        <h1>Add Product To {collection.title}</h1>
      </div>
      <StyledForm onSubmit={handleSubmit} className="mb-3">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="fw-bold fs-3">NAME*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label className="fw-bold fs-3">PRICE*</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder="Enter price"
            required={true}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColors">
          <Form.Label className="fw-bold fs-3">COLORS*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter colors quantity. Max 3"
            required={true}
            onChange={(e) => setColors(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label className="fw-bold fs-3">DESCRIPTION*</Form.Label>
          <Form.Control
            placeholder="Product description."
            required={true}
            onChange={(e) => setDescription(e.target.value)}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group controlId="formSizes">
          <Form.Label className="fw-bold fs-3">SIZES</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSizeXS">
          <Form.Check onChange={(e) => {setSizeXS(e.target.checked)}} className="fw-bold" type="checkbox" label="XS" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSizeS">
          <Form.Check onChange={(e) => {setSizeS(e.target.checked)}} className="fw-bold" type="checkbox" label="S" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSizem">
          <Form.Check onChange={(e) => {setSizeM(e.target.checked)}} className="fw-bold" type="checkbox" label="M" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSizeL">
          <Form.Check onChange={(e) => {setSizeL(e.target.checked)}} className="fw-bold" type="checkbox" label="L" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSizeXL">
          <Form.Check onChange={(e) => {setSizeXL(e.target.checked)}} className="fw-bold" type="checkbox" label="XL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSizeXXL">
          <Form.Check onChange={(e) => {setSizeXXL(e.target.checked)}} className="fw-bold" type="checkbox" label="XXL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSize3XL">
          <Form.Check onChange={(e) => {setSize3XL(e.target.checked)}} className="fw-bold" type="checkbox" label="3XL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Name">
          <Form.Label className="fw-bold fs-3">COLOR 1 NAME*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter color name."
            required={true}
            onChange={(e) => setColor1Name(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Img1">
          <Form.Label className="fw-bold fs-3">COLOR 1 IMAGE 1*</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            required={true}
            onChange={(e) => setColor1Img1(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Img2">
          <Form.Label className="fw-bold fs-3">COLOR 1 IMAGE 2</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor1Img2(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Img3">
          <Form.Label className="fw-bold fs-3">COLOR 1 IMAGE 3</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor1Img3(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Img4">
          <Form.Label className="fw-bold fs-3">COLOR 1 IMAGE 4</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor1Img4(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Img5">
          <Form.Label className="fw-bold fs-3">COLOR 1 IMAGE 5</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor1Img5(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Name">
          <Form.Label className="fw-bold fs-3">COLOR 2 NAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter color 2 name"
            onChange={(e) => setColor2Name(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Img1">
          <Form.Label className="fw-bold fs-3">COLOR 2 IMAGE 1</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor2Img1(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Img2">
          <Form.Label className="fw-bold fs-3">COLOR 2 IMAGE 2</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor2Img2(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Img3">
          <Form.Label className="fw-bold fs-3">COLOR 2 IMAGE 3</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor2Img3(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Img4">
          <Form.Label className="fw-bold fs-3">COLOR 2 IMAGE 4</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor2Img4(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Img5">
          <Form.Label className="fw-bold fs-3">COLOR 2 IMAGE 5</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor2Img5(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Name">
          <Form.Label className="fw-bold fs-3">COLOR 3 NAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter color 3 name"
            onChange={(e) => setColor3Name(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img1">
          <Form.Label className="fw-bold fs-3">COLOR 3 IMAGE 1</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor3Img1(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img2">
          <Form.Label className="fw-bold fs-3">COLOR 3 IMAGE 2</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor3Img2(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img3">
          <Form.Label className="fw-bold fs-3">COLOR 3 IMAGE 3</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor3Img3(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img4">
          <Form.Label className="fw-bold fs-3">COLOR 3 IMAGE 4</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor3Img4(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img5">
          <Form.Label className="fw-bold fs-3">COLOR 3 IMAGE 5</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            onChange={(e) => setColor3Img5(e.target.value)}
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

export default CollectionsProductCreate;
