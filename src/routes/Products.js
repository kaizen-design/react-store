import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import ProductCard from "../ProductCard";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }  
  render() {
    return ( 
      <div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {this.state.products.map((product) => {
            return (
              <ProductCard 
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            )  
          })}        
        </div>
        <Outlet /> 
      </div>  
    )
  }
  componentDidMount() {
    fetch('https://fakestoreapi.com/products/')
      .then(results => results.json())
      .then(data => {
        this.setState({products: data})
        console.log(this.state.products);
      })
  }
}