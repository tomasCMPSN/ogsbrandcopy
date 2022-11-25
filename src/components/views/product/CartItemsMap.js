import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';

const CartItemsMap = ({ item, onRemove }) => {
    return (
        <Row>
        <Col xs={3} lg={3}>
          <a
            href={"/collections/" + item.collectionid + "/" + item._id}
          >
            <Image
              fluid={true}
              src={item.imageSelected}
              alt={item.name}
              className="d-block mx-auto"
            />
          </a>
        </Col>
        <Col xs={9} lg={9}>
          <div className="d-flex justify-content-between">
            <div>
              <a
                className="text-decoration-none text-dark fw-bold"
                href={
                  "/collections/" + item.collectionid + "/" + item._id
                }
              >
                <div>
                  {item.name}({item.colorSelected} / {item.sizeSelected}
                  )
                </div>
              </a>
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
          <div className="px-2 my-4">
        </div>
        </Col>
        <hr />
      </Row>
    );
};

export default CartItemsMap;