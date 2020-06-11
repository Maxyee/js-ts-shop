import React, { Component } from 'react'
import Dashboard from './pages/dashboard/Dashboard'
import LoginSignin from './pages/loginsignin/LoginSignin'
import ShoppingBag from './pages/shoppingBag/ShoppingBag'
import ProductOverview from './pages/productOverview/ProductOverview'
import Checkout from './pages/checkout/Checkout'
import CheckoutSuccess from './pages/checkoutSuccess/CheckoutSuccess'

class App extends Component {

  render() {
    return (
      <div>
        {/* <Dashboard/> */}
        {/* <LoginSignin/> */}
        {/* <ShoppingBag/> */}
        {/* <ProductOverview/> */}
        {/* <Checkout/> */}
        <CheckoutSuccess/>
      </div>
    );
  }
}

export default App;
