import React, { Component } from 'react'
import Dashboard from './pages/dashboard/Dashboard'
import LoginSignin from './pages/loginsignin/LoginSignin'
import ShoppingBag from './pages/shoppingBag/ShoppingBag'
import ProductOverview from './pages/productOverview/ProductOverview'

class App extends Component {

  render() {
    return (
      <div>
        {/* <Dashboard/> */}
        {/* <LoginSignin/> */}
        {/* <ShoppingBag/> */}
        <ProductOverview/>
      </div>
    );
  }
}

export default App;
