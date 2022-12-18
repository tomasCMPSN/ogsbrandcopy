import React from "react";
import { Container, Image } from "react-bootstrap";
import { StyledContainer } from "../../auth/StyledContainer";

const Sizes = () => {
  return (
    <Container style={{ marginTop: "16vh" }}>
      <StyledContainer>
        <h1 className="fw-bold pt-5">SIZES</h1>
      </StyledContainer>
      <Image
        fluid={true}
        src="https://ogsbrand.storage.googleapis.com/media/original_images/TALLAS_-_OGS.jpg"
        alt="Sizes for top"
      />
      <Image
        fluid={true}
        src="https://ogsbrand.storage.googleapis.com/media/original_images/TALLAS_-_OGS1.jpg"
        alt="Sizes for bottom"
      />
    </Container>
  );
};

export default Sizes;
