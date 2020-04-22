/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Col, Row, Collapse, Button, Media } from 'react-bootstrap';
// import EstimatedTotal from '../EstimatedTotal/EstimatedTotal';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      quantity: 1,
      show: true,
      max:5,
      min:0
    }
  }

  IncrementItem = () => {
    if(this.state.quantity > 9) {

    }else {
        this.setState({
            quantity: this.state.quantity + 1 
        });
    }
  }
  DecreaseItem = () => {
    if(this.state.quantity <= 1) {

    }else {
        this.setState({ quantity: this.state.quantity - 1 });
    }
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  UpdateValue = (e) => {
    this.setState({ quantity: e.target.value });
  };

  render() {
    return (
      
      <div>
         <EstimatedTotal myProp={this.state.quantity} price={this.props.estimatedTotal} />
        <Button
          bsStyle="link"
          onClick={() => this.setState({open: !this.state.open})}
        >
          {this.state.open === false ? `Show` : `Hide`} item detail 
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
             <img
                width={100}
                height={100}
                alt="image id item"
                src="https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/JBNEWTRD_newton_student_chair_red.jpg/resize?size=706&auth=MjA5OTcwODkwMg__"
              />

              <Media.Body>
                <p>This is awesome Red color chair. Most comfortable too. </p>
                <Row>
                  <Col>{`$${(this.props.estimatedTotal) * (this.state.quantity)}`}</Col>
                  <Col>
                    {/* <label>Qty: {this.state.Qty}</label> */}
                    <button onClick={this.IncrementItem}>+</button>
                    <input className="inputne" value={this.state.quantity} onChange={this.UpdateValue} />
                    <button onClick={this.DecreaseItem}>-</button>
                    
                    
                  </Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
       
      </div>
    )
  }
}



const EstimatedTotal = (props) => {
  return (
    <div>
      <Row>
        <Col md={6}><strong>Estimated Total</strong></Col>
        <Col md={6}><strong>{`$${(props.price) * (props.myProp)}`} </strong>
          
        </Col>
        <Col md={6}>Quantity:  </Col>
        <Col md={6}>{props.myProp}</Col>
      </Row>
    </div>
  )
};
export default ItemDetail;