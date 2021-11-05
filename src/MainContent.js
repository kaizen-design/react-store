import React, { Component } from "react";
//import Customers from "./Customers";
import ShoppingCart from "./ShoppingCart";

class MainContent extends Component {

  constructor() {
    super();
    this.state = {
      pageTitle: 'Customers',
      customersCount: 5
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {/* <h1 className="">
          {this.state.pageTitle}
          <span className="badge bg-secondary ms-2">{this.state.customersCount}</span>
          <button 
            type="button" 
            className="btn btn-primary ms-2" 
            onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h1> */}
        <div className="bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <ShoppingCart />  
          </div>
        </div>        
      </React.Fragment>  
    ) 
  }

  /* onRefreshClick = () => {
    this.setState({
      customersCount: this.state.customersCount + 1
    })
  } */
  
}

export default MainContent;