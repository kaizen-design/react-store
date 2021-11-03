import React, { Component } from "react";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }
  componentWillMount() {
    fetch('https://randomuser.me/api/?results=10')
    .then(results => {
      return results.json()
    })
    .then(data => {      
      const customers = data.results.map(customer => {
        return (
          <tr key={customer.login.username}>
            <th scope="row">{customer.login.username}</th>
            <td><img src={customer.picture.thumbnail} className="img-fluid" alt={`${customer.name.first} ${customer.name.last}`} /></td>
            <td>{`${customer.name.first} ${customer.name.last}`}</td>
            <td>{customer.phone}</td>              
          </tr>
        )
      })
      this.setState({customers: customers})
      console.log(this.state.customers);
    })
  }
  render() {
    return (      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Phone</th>              
          </tr>
        </thead>
        <tbody>
          {this.state.customers}        
        </tbody>    
      </table>
    )
  }
}

export default Customers;