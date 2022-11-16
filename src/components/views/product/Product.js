import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Product = ({ URLProducts }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const [colorIndex, setColorIndex] = useState(0);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  console.log(index);

  const dataArray = [];
  if (product.color1Img1 !== "") {
    dataArray.push(product.color1Img1);
  }
  if (product.color1Img2 !== "") {
    dataArray.push(product.color1Img2);
  }
  if (product.color1Img3 !== "") {
    dataArray.push(product.color1Img3);
  }
  if (product.color1Img4 !== "") {
    dataArray.push(product.color1Img4);
  }
  if (product.color1Img5 !== "") {
    dataArray.push(product.color1Img5);
  }
  if (product.color2Img1 !== "") {
    dataArray.push(product.color2Img1);
  }
  if (product.color2Img2 !== "") {
    dataArray.push(product.color2Img2);
  }
  if (product.color2Img3 !== "") {
    dataArray.push(product.color2Img3);
  }
  if (product.color2Img4 !== "") {
    dataArray.push(product.color2Img4);
  }
  if (product.color2Img5 !== "") {
    dataArray.push(product.color2Img5);
  }
  if (product.color3Img1 !== "") {
    dataArray.push(product.color3Img1);
  }
  if (product.color3Img2 !== "") {
    dataArray.push(product.color3Img2);
  }
  if (product.color3Img3 !== "") {
    dataArray.push(product.color3Img3);
  }
  if (product.color3Img4 !== "") {
    dataArray.push(product.color3Img4);
  }
  if (product.color3Img5 !== "") {
    dataArray.push(product.color3Img5);
  }

  console.log(dataArray);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${URLProducts}${id}/get`);
        const productApi = await res.json();
        setProduct(productApi);
        console.log(productApi);
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
          <Carousel
            interval={null}
            variant="dark"
            activeIndex={index}
            onSelect={handleSelect}
          >
            {dataArray.map((data, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={data} alt={data} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={12} lg={3}>
          <div>
            <p className="fs-2 fw-bold">{product.name}</p>
          </div>
          <div>
            <p>{product.price} €</p>
          </div>
          <div>
            {product.colors > 1 && 
              <div>
                <Button>
                  <Image
                    fluid={true}
                    src={product.color1Img1}
                    alt={product.name}
                    className="d-block mx-auto"
                  />
                </Button>
                <Button>
                  <Image
                    fluid={true}
                    src={product.color2Img1}
                    alt={product.name}
                    className="d-block mx-auto"
                  />
                </Button>
              </div>
            }
            {product.colors === 3 && 
                <Button>
                  <Image
                    fluid={true}
                    src={product.color3Img1}
                    alt={product.name}
                    className="d-block mx-auto"
                  />
                </Button>
            }
          </div>
          {/* {colorIndex === 0 && <p>1</p> }      
            {colorIndex === 1 && <p>2</p> }      
            {colorIndex === 2 && <p>3</p> }      
            <Button onClick={ () => { setColorIndex(0)} }>1</Button>
            <Button onClick={ () => { setColorIndex(1)} }>2</Button>
            <Button onClick={ () => { setColorIndex(2)} }>3</Button> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
