import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './routes/Login';
import Products from './routes/Products';
import Product from './routes/Product';
import Customers from './routes/Customers';
import PageNotFound from './routes/PageNotFound';

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="products" element={<Products />} />            
          <Route path="products/:product" element={<Product />} />
          <Route path="customers" element={<Customers />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>, 
  rootElement
);
