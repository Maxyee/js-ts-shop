//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardContainer from './pages/DashboardContainer';



class App extends Component{
  render(){
    return(
      <div>
        <DashboardContainer/>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

export default App;
