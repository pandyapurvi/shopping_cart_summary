import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Col, Row } from 'react-bootstrap';

const EstimatedTotal = (props) => {
  return (
    <div>
      <Row>
        <Col md={6}><strong>Estimated Total</strong></Col>
        <Col md={6}>
          {/* <strong> */}
          {/* {`$${props.estimatedTotal}`}</strong> */}
          {`$${(props.estimatedTotal) * (props.myProp)}`}
          <hr />
          {props.myProp}
        </Col>
        
      </Row>
    </div>
  )
};
export default EstimatedTotal;
