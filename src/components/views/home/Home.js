import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledResponsiveTitle } from "../../layout/navigation/StyledResponsiveTitle";
import { StyledContainerImage } from "./StyledContainerImage";

const Home = ({ homeData }) => {
  if (homeData.length !== 5) {
    return <p className="fw-bold display-1" style={{ marginTop: "16vh" }}>Loading.</p>;
  }

  return (
    <Container fluid={true}>
      <Row className="mx-1 mx-lg-5" style={{ marginTop: "16vh" }}>
        <Col xs={12} lg={6}>
          <Link style={{ textDecoration: "none" }} to={"/collections/" + homeData[0].collectionid}>
            <StyledContainerImage>
              <Image
                fluid={true}
                src={homeData[0].imgURL}
                alt={homeData[0].title}
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  {homeData[0].title}
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 mb-3 fs-5">
              {homeData[0].title}
            </StyledResponsiveTitle>
          </Link>
        </Col>
        <Col xs={12} lg={6}>
          <Link style={{ textDecoration: "none" }} to={"/collections/" + homeData[1].collectionid}>
            <StyledContainerImage>
              <Image
                fluid={true}
                src={homeData[1].imgURL}
                alt={homeData[1].title}
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  {homeData[1].title}
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 fs-5">
              {homeData[1].title}
            </StyledResponsiveTitle>
          </Link>
        </Col>
        <Col className="mt-4" xs={12} lg={3}>
          <Link
            style={{ textDecoration: "none" }}
            to={"/collections/" + homeData[2].collectionid}
          >
            <StyledContainerImage>
              <Image
                fluid={true}
                src={homeData[2].imgURL}
                alt={homeData[2].title}
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  {homeData[2].title}
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 fs-5">
              {homeData[2].title}
            </StyledResponsiveTitle>
          </Link>
        </Col>
        <Col className="mt-4" xs={12} lg={3}>
          <Link
            style={{ textDecoration: "none" }}
            to={"/collections/" + homeData[3].collectionid}
          >
            <StyledContainerImage>
              <Image
                fluid={true}
                src={homeData[3].imgURL}
                alt={homeData[3].title}
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  {homeData[3].title}
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 fs-5">
              {homeData[3].title}
            </StyledResponsiveTitle>
          </Link>
        </Col>
        <Col className="mt-4" xs={12} lg={3}>
          <Link style={{ textDecoration: "none" }} to={"/collections/" + homeData[4].collectionid}>
            <StyledContainerImage>
              <Image
                fluid={true}
                src={homeData[4].imgURL}
                alt={homeData[4].title}
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  {homeData[4].title}
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 fs-5">
              {homeData[4].title}
            </StyledResponsiveTitle>
          </Link>
        </Col>
        <Col className="mt-4" xs={12} lg={3}>
          <Link style={{ textDecoration: "none" }} to="/collections">
            <StyledContainerImage>
              <Image
                fluid={true}
                src="https://ogsbrand.storage.googleapis.com/media/images/brand.ogs_247523086_397034392.2e16d0ba.fill-700x930-c100.jpg"
                alt="BROWSE ALL"
                className="d-block mx-auto"
              />
              <StyledContainerImage className="overlay justify-content-center align-items-center d-flex">
                <div className="fw-bold text-center text-dark fs-2">
                  BROWSE ALL
                </div>
              </StyledContainerImage>
            </StyledContainerImage>
            <StyledResponsiveTitle className="mt-4 fs-5">
              BROWSE ALL
            </StyledResponsiveTitle>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
