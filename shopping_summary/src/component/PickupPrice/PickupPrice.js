import React from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

let styles = {
  pickupPrice: {
    fontWeight: 800,
    color: 'red'
  },
  pickupText: {
    textDecoration: 'underline'
  }
}
const PickupPrice = (props) => {
    const toolTip =
      <Tooltip id="tooltip">
        <p>Pick from the store can save your total cost.</p>
      </Tooltip>
    return (
      <div>
        <Row className="share-grid">
          
          <OverlayTrigger placement="bottom" overlay={toolTip}>
            <Col md={6} style={styles.pickupText}> Pickup Price </Col>
          </OverlayTrigger>

          <Col md={6} style={styles.pickupPrice}> {`$${props.pickupPrice}`}</Col>
        </Row>
      </div>
    )
};
export default PickupPrice