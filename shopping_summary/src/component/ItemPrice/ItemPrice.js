import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ItemPrice = (props) => {
  return (
    <div>
      <Row className="share-grid">
        <Col md={6}>Total Price</Col>
        <Col md={6}>{`$${props.price}`}</Col>
      </Row>
    </div>
  )
};

export default ItemPrice;
