import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TaxFee = (props) => {
  return (
    <div>
      <Row className="share-grid">
        <Col md={6}>Tax</Col>
        <Col md={6}>{`$${props.tax}`}</Col>
      </Row>
    </div>
  )
};
export default TaxFee;
