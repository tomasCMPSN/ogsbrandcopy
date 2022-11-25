import React, { useEffect, useState } from "react";
import { Badge, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { AiOutlineShopping } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md"
import { NavLink, useLocation } from "react-router-dom";
import { ImgNavbar } from "./ImgNavbar";
import { StyledLinkNavbar } from "./StyledLinkNavbar";
import { StyledNavbar } from "./StyledNavbar";
import { StyledOffcanvasHeader } from "./StyledOffcanvasHeader";
import "./Navigation.css";
import NavigationCollectionMap from "./NavigationCollectionMap";

const Navigation = ({ countCartItems, collections }) => {
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
                      <NavigationCollectionMap key={collection._id} collection={collection} url={url} />
                    ))}
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
            <NavLink to="/admin">
              <MdAdminPanelSettings className="fs-4 text-dark mx-2" />
            </NavLink>
            <StyledLinkNavbar className="me-5" to="/admin">
              Admin
            </StyledLinkNavbar>
            <NavLink to="/shop/cart">
              <AiOutlineShopping className="fs-4 text-dark mx-2" />
            </NavLink>
            <StyledLinkNavbar className="me-5" to="/shop/cart">
              Cart
              {countCartItems ? ( <Badge className="ms-1"  bg="danger">{countCartItems}</Badge> ) : ("")}
            </StyledLinkNavbar>
          </div>
        </Container>
      </StyledNavbar>
    </div>
  );
};

export default Navigation;
