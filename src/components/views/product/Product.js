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
import useDataProducts from "./useDataProducts";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

const Product = ({
  cartItems,
  URLProducts,
  onAdd,
  onRemove,
  subtotalPrice,
  taxPrice,
  totalPrice,
}) => {
  const { id } = useParams();
  const [dataProduct, sizesData, colorData, imageData] = useDataProducts(
    URLProducts,
    id
  );
  console.log(dataProduct);

  const [sizesMapData, setSizesMapData] = useState(sizesData);
  const [colorSelected, setColorSelected] = useState("");
  const [colorImageSelected, setColorImageSelected] = useState("");
  console.log(sizesMapData);

  function getCartId(max) {
    return Math.floor(Math.random() * max);
  }

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

  if (dataProduct.color1Img1 !== "") {
    dataColor1.push(dataProduct.color1Img1);
  }
  if (dataProduct.color1Img2 !== "") {
    dataColor1.push(dataProduct.color1Img2);
  }
  if (dataProduct.color1Img3 !== "") {
    dataColor1.push(dataProduct.color1Img3);
  }
  if (dataProduct.color1Img4 !== "") {
    dataColor1.push(dataProduct.color1Img4);
  }
  if (dataProduct.color1Img5 !== "") {
    dataColor1.push(dataProduct.color1Img5);
  }
  if (dataProduct.color2Img1 !== "") {
    dataColor2.push(dataProduct.color2Img1);
  }
  if (dataProduct.color2Img2 !== "") {
    dataColor2.push(dataProduct.color2Img2);
  }
  if (dataProduct.color2Img3 !== "") {
    dataColor2.push(dataProduct.color2Img3);
  }
  if (dataProduct.color2Img4 !== "") {
    dataColor2.push(dataProduct.color2Img4);
  }
  if (dataProduct.color2Img5 !== "") {
    dataColor2.push(dataProduct.color2Img5);
  }
  if (dataProduct.color3Img1 !== "") {
    dataColor3.push(dataProduct.color3Img1);
  }
  if (dataProduct.color3Img2 !== "") {
    dataColor3.push(dataProduct.color3Img2);
  }
  if (dataProduct.color3Img3 !== "") {
    dataColor3.push(dataProduct.color3Img3);
  }
  if (dataProduct.color3Img4 !== "") {
    dataColor3.push(dataProduct.color3Img4);
  }
  if (dataProduct.color3Img5 !== "") {
    dataColor3.push(dataProduct.color3Img5);
  }

  const [dataColor, setDataColor] = useState(1);

  useEffect(() => {
    function fetchData() {
      try {
        setSizesMapData(sizesData);
        setColorSelected(colorData);
        setColorImageSelected(imageData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id, sizesData, colorData, imageData]);

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
                  {/* <img className="d-block w-100" src={data} alt={data} /> */}
                  <div className="text-center d-block w-100">
                    <InnerImageZoom
                      zoomPreload={true}
                      height={1200}
                      width={1000}
                      hasSpacer={true}
                      hideCloseButton={true}
                      src={
                        data === undefined
                          ? "https://media.istockphoto.com/id/1335247217/vector/loading-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=jARr4Alv-d5U3bCa8eixuX2593e1rDiiWnvJLgHCkQM="
                          : data
                      }
                      hideHint={true}
                      zoomScale={3.5}
                      zoomType="hover"
                      zoomSrc={data}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Col>
        <Col className="mt-1 mt-lg-2" xs={12} lg={3}>
          <div className="mt-1 mt-lg-5">
            <p className="fs-2 fw-bold">{dataProduct.name}</p>
          </div>
          <div>
            <p>{dataProduct.price} €</p>
          </div>
          <Row>
            {dataProduct.colors !== 1 && (
              <Col xs={3} lg={3}>
                <Image
                  onClick={() => {
                    setDataColor(1);
                    setColorImageSelected(dataProduct.color1Img1);
                    setColorSelected(dataProduct.color1Name);
                    console.log(dataProduct.color1Name);
                    setImageIndex(0);
                  }}
                  fluid={true}
                  src={dataProduct.color1Img1}
                  alt={dataProduct.name}
                  className={
                    "d-block mx-auto" + (dataColor === 1 ? " opacity-50" : "")
                  }
                />
              </Col>
            )}
            {dataProduct.colors > 1 && (
              <Col xs={3} lg={3}>
                <Image
                  onClick={() => {
                    setDataColor(2);
                    setColorImageSelected(dataProduct.color2Img1);
                    setColorSelected(dataProduct.color2Name);
                    console.log(dataProduct.color2Name);
                    setImageIndex(0);
                  }}
                  fluid={true}
                  src={dataProduct.color2Img1}
                  alt={dataProduct.name}
                  className={
                    "d-block mx-auto" + (dataColor === 2 ? " opacity-50" : "")
                  }
                />
              </Col>
            )}
            {dataProduct.colors === 3 && (
              <Col xs={3} lg={3}>
                <Image
                  onClick={() => {
                    setDataColor(3);
                    setColorImageSelected(dataProduct.color3Img1);
                    setColorSelected(dataProduct.color3Name);
                    console.log(dataProduct.color3Name);
                    setImageIndex(0);
                  }}
                  fluid={true}
                  src={dataProduct.color3Img1}
                  alt={dataProduct.name}
                  className={
                    "d-block mx-auto" + (dataColor === 3 ? " opacity-50" : "")
                  }
                />
              </Col>
            )}
            <div className="d-flex flex-row mb-3 mt-3 justify-content-center justify-content-lg-start">
              {dataProduct.sizesData ? (
                dataProduct.sizesData.map((data) => (
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
                dataProduct.sizeSelected = sizesMapData;
                dataProduct.colorSelected = colorSelected;
                dataProduct.imageSelected = colorImageSelected;
                dataProduct.indexInternal = getCartId(3000);
                console.log(dataProduct);
                onAdd(dataProduct);
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
            <p>{dataProduct.description}</p>
          </div>
        </Col>
      </Row>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Body className="px-4">
          <div style={{ marginTop: "7vh" }}>
            <div className="fw-bold fs-4 mb-5">Your Cart</div>
            {cartItems.map((item, index) => (
              <CartItemsMap
                key={index}
                item={item}
                onRemove={onRemove}
                handleClose={handleClose}
              />
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
