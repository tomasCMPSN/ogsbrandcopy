import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledResponsiveTitle } from "../../layout/navigation/StyledResponsiveTitle";
import { StyledContainerImage } from "./StyledContainerImage";

const Home = () => {
  return (
    <Container fluid={true}>
      <Row className="mx-1 mx-lg-5" style={{ marginTop: "16vh" }}>
        <Col xs={12} lg={6}>
          <Link
            style={{ textDecoration: "none" }}
            to="/collections/the-brotherhood-collection"
          >
            <StyledContainerImage>
              <Image
                fluid={true}
                src="https://ogsbrand.storage.googleapis.com/media/images/Copy_of_OGS_Spring22_Web2.2e16d0ba.fill-700x930-c100.jpg"
                alt="THE BROTHERHOOD COLLECTION"
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  THE BROTHERHOOD COLLECTION
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 mb-3 fs-5">
              THE BROTHERHOOD COLLECTION
            </StyledResponsiveTitle>
          </Link>
        </Col>
        <Col xs={12} lg={6}>
          <Link
            style={{ textDecoration: "none" }}
            to="/collections/originals"
          >
            <StyledContainerImage>
              <Image
                fluid={true}
                src="https://ogsbrand.storage.googleapis.com/media/images/Clasica.2e16d0ba.fill-700x930-c100.jpg"
                alt="OG's"
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">OG's</div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 fs-5">
              OG's
            </StyledResponsiveTitle>
          </Link>
        </Col>
        <Col className="mt-4" xs={12} lg={3}>
          <Link style={{ textDecoration: "none" }} to="/collections/original-gangsters-collection">
            <StyledContainerImage>
              <Image
                fluid={true}
                src="https://ogsbrand.storage.googleapis.com/media/images/OGs_Original_Gangsters_WHITE_.2e16d0ba.fill-700x930-c100.png"
                alt="ORIGINAL GANGSTERS COLLECTION"
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  ORIGINAL GANGSTERS COLLECTION
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 fs-5">
              ORIGINAL GANGSTERS COLLECTION
            </StyledResponsiveTitle>
          </Link>
        </Col>
        <Col className="mt-4" xs={12} lg={3}>
          <Link style={{ textDecoration: "none" }} to="/collections/basado-collection">
            <StyledContainerImage>
              <Image
                fluid={true}
                src="https://ogsbrand.storage.googleapis.com/media/images/OGS_BasedDepartment_Ilustraci.2e16d0ba.fill-700x930-c100.png"
                alt="BASADO COLLECTION"
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  BASADO COLLECTION
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 fs-5">
              BASADO COLLECTION
            </StyledResponsiveTitle>
          </Link>
        </Col>
        <Col className="mt-4" xs={12} lg={3}>
          <Link
            style={{ textDecoration: "none" }}
            to="/collections/ogs"
          >
            <StyledContainerImage>
              <Image
                fluid={true}
                src="https://ogsbrand.storage.googleapis.com/media/images/Dorada.2e16d0ba.fill-700x930-c100.jpg"
                alt="GOLD - LAST DAYS!"
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  GOLD - LAST DAYS!
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 fs-5">
              GOLD - LAST DAYS!
            </StyledResponsiveTitle>
          </Link>
        </Col>
        <Col className="mt-4" xs={12} lg={3}>
          <Link style={{ textDecoration: "none" }} to="/collections/accessories">
            <StyledContainerImage>
              <Image
                fluid={true}
                src="https://ogsbrand.storage.googleapis.com/media/images/brand.ogs_247523086_397034392.2e16d0ba.fill-700x930-c100.jpg"
                alt="ACCESSORIES"
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  ACCESSORIES
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 fs-5">
              ACCESSORIES
            </StyledResponsiveTitle>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
