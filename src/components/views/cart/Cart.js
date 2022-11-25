import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineShopping } from "react-icons/ai";
import CartItemsMap from "../product/CartItemsMap";
import { StyledButton } from "../product/StyledButton";

const Cart = ({
  cartItems,
  onRemove,
  subtotalPrice,
  taxPrice,
  totalPrice,
  countCartItems,
}) => {
  return (
    <Container className="px-lg-5 px-4" style={{ marginTop: "16vh" }}>
      {countCartItems ? (
        <div>
          <h1 className="fw-bold pt-lg-5">YOUR CART</h1>
          <Row className="mt-3">
            <Col lg={8}>
              {cartItems.map((item, index) => (
                <CartItemsMap key={index} item={item} onRemove={onRemove} />
              ))}
            </Col>
            <Col className="ps-lg-5">
              <div>
                <div className="d-flex justify-content-between fw-bold my-3">
                  <div>Subtotal</div>
                  <div>{subtotalPrice.toFixed(2)} €</div>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div>Tax (21%)</div>
                  <div>{taxPrice.toFixed(2)} €</div>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div>Total</div>
                  <div>{totalPrice.toFixed(2)} €</div>
                </div>
                <StyledButton
                  variant="light"
                  size="lg"
                  className="btn py-3 w-100 fw-bold"
                >
                  Checkout
                </StyledButton>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="text-center pt-5">
            <p><AiOutlineShopping style={{ fontSize: "15vh" }} /></p>
            <h1>Your cart seems empty</h1>
            <p>Add items to your cart.</p>
            <StyledButton to="/shop/cart" variant="light" size="lg" className="py-3 px-5 fw-bold">
            Continue shopping
          </StyledButton>
        </div>
      )}
    </Container>
  );
};

export default Cart;
