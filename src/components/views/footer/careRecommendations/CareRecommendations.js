import React from "react";
import { Container } from "react-bootstrap";
import { StyledContainer } from "../../auth/StyledContainer";

const CareRecommendations = () => {
  return (
    <Container style={{ marginTop: "16vh" }}>
      <StyledContainer>
        <div>
          <h1 className="fw-bold pt-5">CARE RECOMMENDATIONS</h1>
        </div>
        <div className="py-4">
          <p>
            To make your garments and prints last as long as possible, we
            recommend:
          </p>
          <ul>
            <li>Machine wash at 40º maximum - Preferably in cold water</li>
            <li>Do not dry clean</li>
            <li>Do not use bleach</li>
            <li>Washing and hanging inside out</li>
            <li>Do not use dryer</li>
            <li>Do not iron on the print</li>
          </ul>
        </div>
      </StyledContainer>
    </Container>
  );
};

export default CareRecommendations;
