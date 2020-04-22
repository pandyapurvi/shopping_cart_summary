import React from 'react';
import ItemPrice from './ItemPrice/ItemPrice';
import PickupPrice from './PickupPrice/PickupPrice';
import TaxFee from './TaxFee/TaxFee';
import ItemDetail from './ItemDetail/ItemDetail';
// import EstimatedTotal from './EstimatedTotal/EstimatedTotal';
import './App.css';

class App extends React.Component {

  state = {
    total: 100,
    pickupPrice: -3.85,
    tax: 0,
    estimatedPrice: 0,
    totalPrice: 0
  }

  componentDidMount() {
    this.setState({
      tax: (this.state.total + this.state.pickupPrice) * 0.0875
    },
      function () {
        this.setState({
          estimatedPrice: (this.state.total + this.state.pickupPrice + this.state.tax)
      })
      }
    );
   
  }

  render() {
    return (
      <div className="container">
        <div className="purchase-card">
          <ItemPrice price={this.state.total.toFixed(2)} />
          <PickupPrice pickupPrice={this.state.pickupPrice} />
          <TaxFee tax={this.state.tax.toFixed(2)} />
          
          {/* <EstimatedTotal estimatedTotal={this.state.estimatedPrice.toFixed(2)} /> */}
          <hr />
          <ItemDetail estimatedTotal={this.state.estimatedPrice.toFixed(2)} />
        </div>
        
      </div>
    )
  }
}
export default App;