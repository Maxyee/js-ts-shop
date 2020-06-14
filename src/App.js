import React, { Component } from 'react'
//import Dashboard from './pages/dashboard/Dashboard'
import LoginSignin from './pages/loginsignin/LoginSignin'
import ShoppingBag from './pages/shoppingBag/ShoppingBag'
import ProductOverview from './pages/productOverview/ProductOverview'
import Checkout from './pages/checkout/Checkout'
import CheckoutSuccess from './pages/checkoutSuccess/CheckoutSuccess'
import DashboardContainer from './pages/dashboard/DashboardContainer'

class App extends Component {

  render() {
    return (
      <div>
        <DashboardContainer/>
        {/* <LoginSignin/> */}
        {/* <ShoppingBag/> */}
        {/* <ProductOverview/> */}
        {/* <Checkout/> */}
        {/* <CheckoutSuccess/> */}
      </div>
    );
  }
}

export default App;
