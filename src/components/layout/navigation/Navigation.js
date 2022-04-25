import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { AiOutlineShopping } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { ImgNavbar } from "./ImgNavbar";
import { StyledLinkNavbar } from "./StyledLinkNavbar";
import { StyledNavbar } from "./StyledNavbar";
import { StyledOffcanvasHeader } from "./StyledOffcanvasHeader";
import './Navigation.css'

const Navigation = () => {
  const location = useLocation();
  const [url, SetUrl] = useState(null);
  useEffect(() => {
    SetUrl(location.pathname);
  }, [location]);

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
              <Offcanvas.Body style={{backgroundColor: "#ffcc04"}}>
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
                    <Nav.Link
                      as={NavLink}
                      to="/collections/original-gangsters-collection"
                      href="/collections/original-gangsters-collection"
                      className={
                        "text-dark hoverLink" +
                        (url === "/collections/original-gangsters-collection"
                          ? " text-decoration-underline"
                          : "")
                      }
                    >
                      ORIGINAL GANGSTERS COLLECTION
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to="/collections/basado-collection/"
                      href="/collections/basado-collection/"
                      className={
                        "text-dark hoverLink" +
                        (url === "/collections/basado-collection/"
                          ? " text-decoration-underline"
                          : "")
                      }
                    >
                      BASADO COLLECTION
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to="/collections/ogs"
                      href="/collections/ogs"
                      className={
                        "text-dark hoverLink" +
                        (url === "/collections/ogs"
                          ? " text-decoration-underline"
                          : "")
                      }
                    >
                      GOLD
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to="/collections/originals"
                      href="/collections/originals"
                      className={
                        "text-dark hoverLink" +
                        (url === "/collections/originals"
                          ? " text-decoration-underline"
                          : "")
                      }
                    >
                      OG'S
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to="/collections/last-days"
                      href="/collections/last-days"
                      className={
                        "text-dark hoverLink" +
                        (url === "/collections/last-days"
                          ? " text-decoration-underline"
                          : "")
                      }
                    >
                      LAST DAYS!
                    </Nav.Link>
                    <Nav.Link
                      as={NavLink}
                      to="/collections/browse-all"
                      href="/collections/browse-all"
                      className={
                        "text-dark hoverLink" +
                        (url === "/collections/browse-all"
                          ? " text-decoration-underline"
                          : "")
                      }
                    >
                      BROWSE ALL
                    </Nav.Link>
                  </div>
                  <Nav.Link
                    as={NavLink}
                    to="/shop/cart"
                    href="/shop/cart"
                    className={
                      "text-dark fs-5 fw-bold mt-4 hoverLink" +
                      (url === "/shop/cart" ? " text-decoration-underline" : "")
                    }
                  >
                    Cart
                  </Nav.Link>
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
            <NavLink to="/shop/cart">
              <AiOutlineShopping className="fs-4 text-dark mx-2" />
            </NavLink>
            <StyledLinkNavbar className="me-5" to="/shop/cart">
              Cart
            </StyledLinkNavbar>
          </div>
        </Container>
      </StyledNavbar>
    </div>
  );
};

export default Navigation;
