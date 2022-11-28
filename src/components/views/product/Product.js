import React, { useEffect, useState } from "react";
import {
  Carousel,
  Col,
  Container,
  Image,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { StyledButton } from "./StyledButton";
import "./Product.css";
import CartItemsMap from "./CartItemsMap";

const Product = ({
  cartItems,
  URLProducts,
  onAdd,
  onRemove,
  subtotalPrice,
  taxPrice,
  totalPrice,
}) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const [sizesMapData, setSizesMapData] = useState("");

  const [colorSelected, setColorSelected] = useState("");
  const [colorImageSelected, setColorImageSelected] = useState("");

  function getCartId(max) {
    return Math.floor(Math.random() * max);
  }

  console.log(sizesMapData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imageIndex, setImageIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setImageIndex(selectedIndex);
  };

  console.log(imageIndex);

  const dataColor1 = [];
  const dataColor2 = [];
  const dataColor3 = [];

  if (product.color1Img1 !== "") {
    dataColor1.push(product.color1Img1);
  }
  if (product.color1Img2 !== "") {
    dataColor1.push(product.color1Img2);
  }
  if (product.color1Img3 !== "") {
    dataColor1.push(product.color1Img3);
  }
  if (product.color1Img4 !== "") {
    dataColor1.push(product.color1Img4);
  }
  if (product.color1Img5 !== "") {
    dataColor1.push(product.color1Img5);
  }
  if (product.color2Img1 !== "") {
    dataColor2.push(product.color2Img1);
  }
  if (product.color2Img2 !== "") {
    dataColor2.push(product.color2Img2);
  }
  if (product.color2Img3 !== "") {
    dataColor2.push(product.color2Img3);
  }
  if (product.color2Img4 !== "") {
    dataColor2.push(product.color2Img4);
  }
  if (product.color2Img5 !== "") {
    dataColor2.push(product.color2Img5);
  }
  if (product.color3Img1 !== "") {
    dataColor3.push(product.color3Img1);
  }
  if (product.color3Img2 !== "") {
    dataColor3.push(product.color3Img2);
  }
  if (product.color3Img3 !== "") {
    dataColor3.push(product.color3Img3);
  }
  if (product.color3Img4 !== "") {
    dataColor3.push(product.color3Img4);
  }
  if (product.color3Img5 !== "") {
    dataColor3.push(product.color3Img5);
  }

  const [dataColor, setDataColor] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${URLProducts}${id}/get`);
        const productApi = await res.json();
        setProduct(productApi);
        console.log(productApi);
        setSizesMapData(productApi.sizesData[0]);
        setColorSelected(productApi.color1Name);
        setColorImageSelected(productApi.color1Img1);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container style={{ marginTop: "16vh" }}>
      <Row>
        <Col xs={12} lg={9}>
          {dataColor === 3 && (
            <Carousel
              interval={null}
              variant="dark"
              activeIndex={imageIndex}
              onSelect={handleSelect}
            >
              {dataColor3.map((data, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={data} alt={data} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          {dataColor === 2 && (
            <Carousel
              interval={null}
              variant="dark"
              activeIndex={imageIndex}
              onSelect={handleSelect}
            >
              {dataColor2.map((data, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={data} alt={data} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
          {dataColor === 1 && (
            <Carousel
              interval={null}
              variant="dark"
              activeIndex={imageIndex}
              onSelect={handleSelect}
            >
              {dataColor1.map((data, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={data} alt={data} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Col>
        <Col className="mt-1 mt-lg-5" xs={12} lg={3}>
          <div className="mt-1 mt-lg-5">
            <p className="fs-2 fw-bold">{product.name}</p>
          </div>
          <div>
            <p>{product.price} €</p>
          </div>
          <Row>
            {product.colors !== 1 && (
              <Col xs={3} lg={3}>
                <Image
                  onClick={() => {
                    setDataColor(1);
                    setColorImageSelected(product.color1Img1);
                    setColorSelected(product.color1Name);
                    console.log(product.color1Name);
                    setImageIndex(0);
                  }}
                  fluid={true}
                  src={product.color1Img1}
                  alt={product.name}
                  className={
                    "d-block mx-auto" + (dataColor === 1 ? " opacity-50" : "")
                  }
                />
              </Col>
            )}
            {product.colors > 1 && (
              <Col xs={3} lg={3}>
                <Image
                  onClick={() => {
                    setDataColor(2);
                    setColorImageSelected(product.color2Img1);
                    setColorSelected(product.color2Name);
                    console.log(product.color2Name);
                    setImageIndex(0);
                  }}
                  fluid={true}
                  src={product.color2Img1}
                  alt={product.name}
                  className={
                    "d-block mx-auto" + (dataColor === 2 ? " opacity-50" : "")
                  }
                />
              </Col>
            )}
            {product.colors === 3 && (
              <Col xs={3} lg={3}>
                <Image
                  onClick={() => {
                    setDataColor(3);
                    setColorImageSelected(product.color3Img1);
                    setColorSelected(product.color3Name);
                    console.log(product.color3Name);
                    setImageIndex(0);
                  }}
                  fluid={true}
                  src={product.color3Img1}
                  alt={product.name}
                  className={
                    "d-block mx-auto" + (dataColor === 3 ? " opacity-50" : "")
                  }
                />
              </Col>
            )}
            <div className="d-flex flex-row mb-3 mt-3 justify-content-center justify-content-lg-start">
              {product.sizesData ? (
                product.sizesData.map((data) => (
                  <div
                    onClick={() => {
                      setSizesMapData(data);
                    }}
                    key={data}
                    className={
                      "p-2" + (sizesMapData === data ? " underlineYellow" : "")
                    }
                  >
                    {data}
                  </div>
                ))
              ) : (
                <p>Loading.</p>
              )}
            </div>
          </Row>
          <div>
            <StyledButton
              onClick={() => {
                handleShow();
                product.sizeSelected = sizesMapData;
                product.colorSelected = colorSelected;
                product.imageSelected = colorImageSelected;
                product.indexInternal = getCartId(3000);
                console.log(product);
                onAdd(product);
              }}
              variant="light"
              size="lg"
              className="w-100 my-3 fw-bold"
            >
              Add to cart
            </StyledButton>
          </div>
          <hr className="mb-5" />
          <div>
            <p>{product.description}</p>
          </div>
        </Col>
      </Row>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Body className="px-4">
          <div style={{ marginTop: "7vh" }}>
            <div className="fw-bold fs-4 mb-5">Your Cart</div>
            {cartItems.map((item, index) => (
              <CartItemsMap key={index} item={item} onRemove={onRemove} />
            ))}
            <div className="d-flex justify-content-between fw-bold my-3">
              <div>Subtotal</div>
              <div>{subtotalPrice.toFixed(2)} €</div>
            </div>
            <div className="d-flex justify-content-between my-3">
              <div>Tax (21%)</div>
              <div>{taxPrice.toFixed(2)} €</div>
            </div>
            <div className="d-flex justify-content-between my-3">
              <div>Total</div>
              <div>{totalPrice.toFixed(2)} €</div>
            </div>
          </div>
        </Offcanvas.Body>
        <div className="px-2 my-4">
          <StyledButton
            as={Link}
            to="/shop/cart"
            variant="light"
            size="lg"
            className="btn py-3 w-100 fw-bold"
          >
            View Cart
          </StyledButton>
        </div>
      </Offcanvas>
    </Container>
  );
};

export default Product;
