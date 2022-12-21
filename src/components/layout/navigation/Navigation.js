import React, { useEffect, useState } from "react";
import { Badge, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { AiOutlineShopping } from "react-icons/ai";
import { MdAdminPanelSettings, MdOutlinePersonOutline } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { ImgNavbar } from "./ImgNavbar";
import { StyledLinkNavbar } from "./StyledLinkNavbar";
import { StyledNavbar } from "./StyledNavbar";
import { StyledOffcanvasHeader } from "./StyledOffcanvasHeader";
import "./Navigation.css";
import NavigationCollectionMap from "./NavigationCollectionMap";
import { useAuthContext } from "../../../context/useAuthContext";

const Navigation = ({ countCartItems, collections, adminStatus }) => {
  const { user } = useAuthContext();

  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location, user]);

  return (
    <div>
      <StyledNavbar expand={false} fixed="top" collapseOnSelect>
        <Container fluid>
          <Nav className="d-block">
            <Navbar.Toggle className="mx-3" />
            <Navbar.Offcanvas
              className="offcanvas"
              id="offcanvasNav"
              placement="start"
            >
              <StyledOffcanvasHeader closeButton></StyledOffcanvasHeader>
              <Offcanvas.Body style={{ backgroundColor: "#ffcc04" }}>
                <Nav className="justify-content-end flex-grow-1 pe-3 ms-4">
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    href="/"
                    className={
                      "text-dark fs-5 fw-bold mt-4 hoverLink" +
                      (url === "/" ? " text-decoration-underline" : "")
                    }
                  >
                    Home
                  </Nav.Link>
                  <div className="lh-1 mt-4">
                    {collections.map((collection) => (
                      <NavigationCollectionMap
                        key={collection._id}
                        collection={collection}
                        url={url}
                      />
                    ))}
                  </div>
                  <div className="mt-4">
                    <Nav.Link
                      as={NavLink}
                      to="/shop/cart"
                      href="/shop/cart"
                      className={
                        "text-dark fs-5 fw-bold hoverLink" +
                        (url === "/shop/cart"
                          ? " text-decoration-underline"
                          : "")
                      }
                    >
                      Cart
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to="/login"
                      href="/login"
                      className={
                        "text-dark fs-5 fw-bold hoverLink" +
                        (url === "/login" ? " text-decoration-underline" : "")
                      }
                    >
                      Login
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to="/signup"
                      href="/signup"
                      className={
                        "text-dark fs-5 fw-bold hoverLink" +
                        (url === "/signup" ? " text-decoration-underline" : "")
                      }
                    >
                      Register
                    </Nav.Link>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <NavLink to="/">
              <ImgNavbar
                src="https://www.ogsbrand.com/images/logo-black.png"
                alt="OG's logo"
              />
            </NavLink>
          </Nav>
          <div>
            {adminStatus === true && (
              <NavLink to="/admin">
                <MdAdminPanelSettings className="fs-4 text-dark mx-2" />
              </NavLink>
            )}
            {adminStatus === true && (
              <StyledLinkNavbar className="me-5" to="/admin">
                Admin
              </StyledLinkNavbar>
            )}
            {user === null ? (
              <NavLink to="/login">
                <MdOutlinePersonOutline className="fs-4 text-dark mx-2" />
              </NavLink>
            ) : (
              <NavLink to="/account">
                <MdOutlinePersonOutline className="fs-4 text-dark mx-2" />
              </NavLink>
            )}
            {user === null ? (
              <StyledLinkNavbar className="me-5" to="/login">
                Account
              </StyledLinkNavbar>
            ) : (
              <StyledLinkNavbar className="me-5" to="/account">
                {user.email}
              </StyledLinkNavbar>
            )}
            <NavLink to="/shop/cart">
              <AiOutlineShopping className="fs-4 text-dark mx-2" />
            </NavLink>
            <StyledLinkNavbar className="me-5" to="/shop/cart">
              Cart
              {countCartItems ? (
                <Badge className="ms-1" bg="danger">
                  {countCartItems}
                </Badge>
              ) : (
                ""
              )}
            </StyledLinkNavbar>
          </div>
        </Container>
      </StyledNavbar>
    </div>
  );
};

export default Navigation;
