import React, { Component } from "react";
import Navbar from './Navbar';
import MainContent from './MainContent';

class App extends Component {
  render() {
    return (
      <React.Fragment>        
        <Navbar />
        <MainContent />
      </React.Fragment>  
    )      
  }
}

export default App;