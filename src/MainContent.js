import React, { Component } from "react";
import Customers from "./Customers";

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
        <Customers />  
      </React.Fragment>  
    ) 
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: this.state.customersCount + 1
    })
  }
  
}

export default MainContent;