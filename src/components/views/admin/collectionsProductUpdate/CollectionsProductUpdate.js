import React, { useEffect, useState } from "react";
import { useRef } from "react";
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

const CollectionsProductUpdate = ({ URLProducts, getAPI }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  const productNameRef = useRef("");
  const productPriceRef = useRef("");
  const productColorsRef = useRef("");
  const productDescriptionRef = useRef("");
  const productWeightRef = useRef("")
  const productSizeXSRef = useRef(null);
  const productSizeSRef = useRef(null);
  const productSizeMRef = useRef(null);
  const productSizeLRef = useRef(null);
  const productSizeXLRef = useRef(null);
  const productSizeXXLRef = useRef(null);
  const productSize3XLRef = useRef(null);
  const productColor1NameRef = useRef("");
  const productColor1Img1Ref = useRef("");
  const productColor1Img2Ref = useRef("");
  const productColor1Img3Ref = useRef("");
  const productColor1Img4Ref = useRef("");
  const productColor1Img5Ref = useRef("");
  const productColor2NameRef = useRef("");
  const productColor2Img1Ref = useRef("");
  const productColor2Img2Ref = useRef("");
  const productColor2Img3Ref = useRef("");
  const productColor2Img4Ref = useRef("");
  const productColor2Img5Ref = useRef("");
  const productColor3NameRef = useRef("");
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
    e.preventDefault();

    if (
      !validateCollectionName(productNameRef.current.value) ||
      !validatePrice(productPriceRef.current.value) ||
      !validateColor(productColorsRef.current.value) ||
      !validateURL(productColor1Img1Ref.current.value)
    ) {
      Swal.fire("Oops...", "Something went wrong!", "error");
    }

    const sizesData = [];

    if (productSizeXSRef.current.checked === true) {
      sizesData.push("XS");
    }
    if (productSizeSRef.current.checked === true) {
      sizesData.push("S");
    }
    if (productSizeMRef.current.checked === true) {
      sizesData.push("M");
    }
    if (productSizeLRef.current.checked === true) {
      sizesData.push("L");
    }
    if (productSizeXLRef.current.checked === true) {
      sizesData.push("XL");
    }
    if (productSizeXXLRef.current.checked === true) {
      sizesData.push("XXL");
    }
    if (productSize3XLRef.current.checked === true) {
      sizesData.push("3XL");
    }

    const productUpdated = {
      name: productNameRef.current.value,
      price: productPriceRef.current.value,
      colors: productColorsRef.current.value,
      description: productDescriptionRef.current.value,
      weight: productWeightRef.current.value,
      sizesData: sizesData,
      color1Name: productColor1NameRef.current.value,
      color1Img1: productColor1Img1Ref.current.value,
      color1Img2: productColor1Img2Ref.current.value,
      color1Img3: productColor1Img3Ref.current.value,
      color1Img4: productColor1Img4Ref.current.value,
      color1Img5: productColor1Img5Ref.current.value,
      color2Name: productColor2NameRef.current.value,
      color2Img1: productColor2Img1Ref.current.value,
      color2Img2: productColor2Img2Ref.current.value,
      color2Img3: productColor2Img3Ref.current.value,
      color2Img4: productColor2Img4Ref.current.value,
      color2Img5: productColor2Img5Ref.current.value,
      color3Name: productColor3NameRef.current.value,
      color3Img1: productColor3Img1Ref.current.value,
      color3Img2: productColor3Img2Ref.current.value,
      color3Img3: productColor3Img3Ref.current.value,
      color3Img4: productColor3Img4Ref.current.value,
      color3Img5: productColor3Img5Ref.current.value,
      collectionid: product.collectionid,
    };

    if(productUpdated.colors === "2" && productUpdated.color2Name === "") {
      Swal.fire("Oops...", "Color 2 name for 2 colors", "error");
      return;
    }

    if (productUpdated.colors === "3" && productUpdated.color3Name === "") {
      Swal.fire(
        "Oops...",
        "Color 3 name  and color 2 name are necessary for 3 colors",
        "error"
      );
      return;
    }

    if (productUpdated.colors === "3" && productUpdated.color2Name === "") {
      Swal.fire(
        "Oops...",
        "Color 2 name is necessary too for 3 colors",
        "error"
      );
      return;
    }

    if (productUpdated.colors === "2" && productUpdated.color2Img1 === "") {
      Swal.fire("Oops...", "Color 2 image 1 for 2 colors", "error");
      return;
    }

    if (productUpdated.colors === "3" && productUpdated.color3Img1 === "") {
      Swal.fire(
        "Oops...",
        "Color 3 image 1  and color 2 image 1 are necessary for 3 colors",
        "error"
      );
      return;
    }

    if (productUpdated.colors === "3" && productUpdated.color2Img1 === "") {
      Swal.fire(
        "Oops...",
        "Color 2 image 1 is necessary too for 3 colors",
        "error"
      );
      return;
    }

    console.log(productUpdated);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Update",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URLProducts}${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productUpdated),
          });
          if (res.status === 200) {
            Swal.fire("Updated!", "Your product has been updated.", "success");
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
            step="0.01"
            defaultValue={product.price}
            required={true}
            ref={productPriceRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColors">
          <Form.Label className="fw-bold fs-3">COLORS*</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="3"
            defaultValue={product.colors}
            required={true}
            ref={productColorsRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label className="fw-bold fs-3">DESCRIPTION*</Form.Label>
          <Form.Control
            placeholder="Product description."
            defaultValue={product.description}
            required={true}
            ref={productDescriptionRef}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formWeight">
          <Form.Label className="fw-bold fs-3">WEIGHT*</Form.Label>
          <Form.Control
            type="number"
            step="0.001"
            defaultValue={product.weight}
            required={true}
            ref={productWeightRef}
          />
        </Form.Group>
        <Form.Group controlId="formSizes">
          <Form.Label className="fw-bold fs-3">SIZES</Form.Label>
        </Form.Group>
        {product.sizesData ? (
          <Form.Group className="mb-3" controlId="formSizeXS">
            <Form.Check
              ref={productSizeXSRef}
              defaultChecked={
                product.sizesData.find((size) => size === "XS") ? true : false
              }
              className="fw-bold"
              type="checkbox"
              label="XS"
            />
          </Form.Group>
        ) : (
          <p>Loading.</p>
        )}
        {product.sizesData ? (
          <Form.Group className="mb-3" controlId="formSizeS">
            <Form.Check
              ref={productSizeSRef}
              defaultChecked={
                product.sizesData.find((size) => size === "S") ? true : false
              }
              className="fw-bold"
              type="checkbox"
              label="S"
            />
          </Form.Group>
        ) : (
          <p>Loading.</p>
        )}
        {product.sizesData ? (
          <Form.Group className="mb-3" controlId="formSizeM">
            <Form.Check
              ref={productSizeMRef}
              defaultChecked={
                product.sizesData.find((size) => size === "M") ? true : false
              }
              className="fw-bold"
              type="checkbox"
              label="M"
            />
          </Form.Group>
        ) : (
          <p>Loading.</p>
        )}
        {product.sizesData ? (
          <Form.Group className="mb-3" controlId="formSizeL">
            <Form.Check
              ref={productSizeLRef}
              defaultChecked={
                product.sizesData.find((size) => size === "L") ? true : false
              }
              className="fw-bold"
              type="checkbox"
              label="L"
            />
          </Form.Group>
        ) : (
          <p>Loading.</p>
        )}
        {product.sizesData ? (
          <Form.Group className="mb-3" controlId="formSizeXL">
            <Form.Check
              ref={productSizeXLRef}
              defaultChecked={
                product.sizesData.find((size) => size === "XL") ? true : false
              }
              className="fw-bold"
              type="checkbox"
              label="XL"
            />
          </Form.Group>
        ) : (
          <p>Loading.</p>
        )}
        {product.sizesData ? (
          <Form.Group className="mb-3" controlId="formSizeXXL">
            <Form.Check
              ref={productSizeXXLRef}
              defaultChecked={
                product.sizesData.find((size) => size === "XXL") ? true : false
              }
              className="fw-bold"
              type="checkbox"
              label="XXL"
            />
          </Form.Group>
        ) : (
          <p>Loading.</p>
        )}
        {product.sizesData ? (
          <Form.Group className="mb-3" controlId="formSize3XL">
            <Form.Check
              ref={productSize3XLRef}
              defaultChecked={
                product.sizesData.find((size) => size === "3XL") ? true : false
              }
              className="fw-bold"
              type="checkbox"
              label="3XL"
            />
          </Form.Group>
        ) : (
          <p>Loading.</p>
        )}
        <Form.Group className="mb-3" controlId="formColor1Name">
          <Form.Label className="fw-bold fs-3">COLOR 1 NAME*</Form.Label>
          <Form.Control
            type="text"
            defaultValue={product.color1Name}
            required={true}
            ref={productColor1NameRef}
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
        <Form.Group className="mb-3" controlId="formColor1Name">
          <Form.Label className="fw-bold fs-3">COLOR 2 NAME*</Form.Label>
          <Form.Control
            type="text"
            defaultValue={product.color2Name}
            ref={productColor2NameRef}
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
        <Form.Group className="mb-3" controlId="formColor1Name">
          <Form.Label className="fw-bold fs-3">COLOR 3 NAME*</Form.Label>
          <Form.Control
            type="text"
            defaultValue={product.color3Name}
            ref={productColor3NameRef}
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
          <Button type="submit" variant="info fw-bold w-100">
            UPDATE
          </Button>
        </div>
      </StyledForm>
    </Container>
  );
};

export default CollectionsProductUpdate;
