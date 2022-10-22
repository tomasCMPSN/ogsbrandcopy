import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { validateCollectionName, validateColor, validatePrice, validateURL } from "../../helpers/ValidateFields";
import { StyledForm } from "../collectionsCreate/StyledForm";

const CollectionsProductUpdate = ({ URLProducts, getAPI }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  const productNameRef = useRef("");
  const productPriceRef = useRef("");
  const productColorsRef = useRef("");
  const productColor1Img1Ref = useRef("");
  const productColor1Img2Ref = useRef("");
  const productColor1Img3Ref = useRef("");
  const productColor1Img4Ref = useRef("");
  const productColor1Img5Ref = useRef("");
  const productColor2Img1Ref = useRef("");
  const productColor2Img2Ref = useRef("");
  const productColor2Img3Ref = useRef("");
  const productColor2Img4Ref = useRef("");
  const productColor2Img5Ref = useRef("");
  const productColor3Img1Ref = useRef("");
  const productColor3Img2Ref = useRef("");
  const productColor3Img3Ref = useRef("");
  const productColor3Img4Ref = useRef("");
  const productColor3Img5Ref = useRef("");

  console.log(product);
  console.log(product.collectionid);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${URLProducts}${id}/get`);
        const productApi = await res.json();
        setProduct(productApi);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !validateCollectionName(productNameRef.current.value) ||
      !validatePrice(productPriceRef.current.value) ||
      !validateColor(productColorsRef.current.value) ||
      !validateURL(productColor1Img1Ref.current.value)
    ) {
      Swal.fire("Oops...", "Something went wrong!", "error")
    }

    const productUpdated = {
      name: productNameRef.current.value,
      price: productPriceRef.current.value,
      colors: productColorsRef.current.value,
      color1Img1: productColor1Img1Ref.current.value,
      color1Img2: productColor1Img2Ref.current.value,
      color1Img3: productColor1Img3Ref.current.value,
      color1Img4: productColor1Img4Ref.current.value,
      color1Img5: productColor1Img5Ref.current.value,
      color2Img1: productColor2Img1Ref.current.value,
      color2Img2: productColor2Img2Ref.current.value,
      color2Img3: productColor2Img3Ref.current.value,
      color2Img4: productColor2Img4Ref.current.value,
      color2Img5: productColor2Img5Ref.current.value,
      color3Img1: productColor3Img1Ref.current.value,
      color3Img2: productColor3Img2Ref.current.value,
      color3Img3: productColor3Img3Ref.current.value,
      color3Img4: productColor3Img4Ref.current.value,
      color3Img5: productColor3Img5Ref.current.value,
      collectionid: product.collectionid
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
          const res = await fetch(`${URLProducts}${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(productUpdated)
          });
          if(res.status === 200) {
            Swal.fire(
              'Updated!',
              'Your product has been updated.',
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
        <h1>Edit product {product.name}</h1>
      </div>
      <StyledForm onSubmit={handleSubmit} className="mb-3">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="fw-bold fs-3">NAME*</Form.Label>
          <Form.Control
            type="text"
            defaultValue={product.name}
            required={true}
            ref={productNameRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label className="fw-bold fs-3">PRICE*</Form.Label>
          <Form.Control
            type="number"
            defaultValue={product.price}
            required={true}
            ref={productPriceRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColors">
          <Form.Label className="fw-bold fs-3">COLORS*</Form.Label>
          <Form.Control
            type="number"
            defaultValue={product.colors}
            required={true}
            ref={productColorsRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Img1">
          <Form.Label className="fw-bold fs-3">COLOR 1 IMG 1*</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color1Img1}
            required={true}
            ref={productColor1Img1Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Img2">
          <Form.Label className="fw-bold fs-3">COLOR 1 IMG 2</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color1Img2}
            ref={productColor1Img2Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Img3">
          <Form.Label className="fw-bold fs-3">COLOR 1 IMG 3</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color1Img3}
            ref={productColor1Img3Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Img4">
          <Form.Label className="fw-bold fs-3">COLOR 1 IMG 4</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color1Img4}
            ref={productColor1Img4Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor1Img5">
          <Form.Label className="fw-bold fs-3">COLOR 1 IMG 5</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color1Img5}
            ref={productColor1Img5Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Img1">
          <Form.Label className="fw-bold fs-3">COLOR 2 IMG 1</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color2Img1}
            ref={productColor2Img1Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Img2">
          <Form.Label className="fw-bold fs-3">COLOR 2 IMG 2</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color2Img2}
            ref={productColor2Img2Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Img3">
          <Form.Label className="fw-bold fs-3">COLOR 2 IMG 3</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color2Img3}
            ref={productColor2Img3Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Img4">
          <Form.Label className="fw-bold fs-3">COLOR 2 IMG 4</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color2Img4}
            ref={productColor2Img4Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor2Img5">
          <Form.Label className="fw-bold fs-3">COLOR 2 IMG 5</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color2Img5}
            ref={productColor2Img5Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img1">
          <Form.Label className="fw-bold fs-3">COLOR 3 IMG 1</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color3Img1}
            ref={productColor3Img1Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img2">
          <Form.Label className="fw-bold fs-3">COLOR 3 IMG 2</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color3Img2}
            ref={productColor3Img2Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img3">
          <Form.Label className="fw-bold fs-3">COLOR 3 IMG 3</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color3Img3}
            ref={productColor3Img3Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img4">
          <Form.Label className="fw-bold fs-3">COLOR 3 IMG 4</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color3Img4}
            ref={productColor3Img4Ref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColor3Img5">
          <Form.Label className="fw-bold fs-3">COLOR 3 IMG 5</Form.Label>
          <Form.Control
            type="url"
            defaultValue={product.color3Img5}
            ref={productColor3Img5Ref}
          />
        </Form.Group>
        <div>
          <Button type="submit" variant="info w-100">UPDATE</Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default CollectionsProductUpdate;
