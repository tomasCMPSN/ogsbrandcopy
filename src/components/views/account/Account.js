import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { StyledContainer } from "../auth/StyledContainer";
import { StyledButton } from "../product/StyledButton";
import { useAuthContext } from "../../../context/useAuthContext";
import { useLogout } from "../auth/useLogout";

const Account = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  
  const navigate = useNavigate()

  const handleClick = () => {
    logout()
    navigate("/")
  };

  return (
    <Container style={{ marginTop: "16vh" }}>
      <h1 className="fw-bold text-center text-uppercase text-break">
        HI, {user ? user.email : ""}
      </h1>
      <StyledContainer>
        <Link className="text-decoration-none text-dark">
          <p className="fw-bold fs-4">My orders</p>
          <p>Track your orders here.</p>
        </Link>
        <hr />
        <Link className="text-decoration-none text-dark">
          <p className="fw-bold fs-4">Personal Details</p>
          <p>
            Edit your personal details such as email address and password here.
          </p>
        </Link>
        <hr />
        <Link className="text-decoration-none text-dark">
          <p className="fw-bold fs-4">Change Password</p>
          <p>Change your password here.</p>
        </Link>
        <hr />
        <StyledButton onClick={handleClick} variant="warning" className="w-100 fw-bold fs-5 py-3">
          Logout
        </StyledButton>
      </StyledContainer>
    </Container>
  );
};

export default Account;
