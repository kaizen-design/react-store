import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Navbar';
import Login from "./Login";
import Customers from "./Customers";
import ShoppingCart from "./ShoppingCart";

export default function App() {  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="customers" element={<Customers />} />
            <Route path="cart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </div>  
    </BrowserRouter>    
  )
}