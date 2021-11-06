import React, { Component } from "react";
import ProductCard from "./ProductCard";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }  
  render() {
    return (      
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
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