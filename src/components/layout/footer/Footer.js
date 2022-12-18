import React from "react";
import { Link } from "react-router-dom";
import { StyledFooter } from "./StyledFooter";

const Footer = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "4rem",
      }}
    >
      <StyledFooter className="d-flex flex-column  flex-xl-row text-center justify-content-between">
        <p className="my-1">&copy;2022. All rights reserved</p>
        <Link
          to="/shippingPolicy"
          className="text-dark text-decoration-none my-1"
        >
          SHIPPING POLICY
        </Link>
        <Link to="/contact" className="text-dark text-decoration-none my-1">
          CONTACT
        </Link>
        <Link
          to="/purchaseConditions"
          className="text-dark text-decoration-none my-1"
        >
          PURCHASE CONDITIONS
        </Link>
        <Link
          to="/termsOfService"
          className="text-dark text-decoration-none my-1"
        >
          TERMS OF SERVICE
        </Link>
        <Link
          to="/privacyPolicy"
          className="text-dark text-decoration-none my-1"
        >
          PRIVACY POLICY
        </Link>
        <Link
          to="/cookiesPolicy"
          className="text-dark text-decoration-none my-1"
        >
          COOKIES POLICY
        </Link>
        <Link to="/legal" className="text-dark text-decoration-none my-1">
          LEGAL
        </Link>
        <Link to="/sizes" className="text-dark text-decoration-none my-1">
          SIZES
        </Link>
        <Link
          to="/careRecommendations"
          className="text-dark text-decoration-none my-1"
        >
          CARE RECOMMENDATIONS
        </Link>
      </StyledFooter>
    </div>
  );
};

export default Footer;
