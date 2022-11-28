import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartItemsMap = ({ item, onRemove, handleClose }) => {
  return (
    <Row>
      <Col xs={3} lg={3}>
        <Link
          onClick={() => {
            handleClose();
          }}
          to={"/collections/" + item.collectionid + "/" + item._id}
        >
          <Image
            fluid={true}
            src={item.imageSelected}
            alt={item.name}
            className="d-block mx-auto"
          />
        </Link>
      </Col>
      <Col xs={9} lg={9}>
        <div className="d-flex justify-content-between">
          <div>
            <Link
              onClick={() => {
                handleClose();
              }}
              className="text-decoration-none text-dark fw-bold"
              to={"/collections/" + item.collectionid + "/" + item._id}
            >
              <div>
                {item.name}({item.colorSelected} / {item.sizeSelected})
              </div>
            </Link>
            <div>
              <div>{item.weight} Kg</div>
            </div>
          </div>
          <div>
            <AiOutlineClose onClick={() => onRemove(item)} />
          </div>
        </div>
        <div className="d-flex justify-content-between py-4">
          <div>Quantity: {item.qty}</div>
          <div>{item.qty * item.price} €</div>
        </div>
        <div className="px-2 my-4"></div>
      </Col>
      <hr />
    </Row>
  );
};

export default CartItemsMap;
