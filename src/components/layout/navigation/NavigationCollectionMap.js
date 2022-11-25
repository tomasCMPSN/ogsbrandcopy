import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationCollectionMap = ({ collection, url }) => {
  return (
    <Nav.Link
      as={NavLink}
      to={"/collections/" + (collection._id)}
      href={"/collections/" + (collection._id)}
      className={
        "text-dark hoverLink" +
        (url === "/collections/the-brotherhood-collection"
          ? " text-decoration-underline"
          : "")
      }
    >
      {collection.title}
    </Nav.Link>
  );
};

export default NavigationCollectionMap;
