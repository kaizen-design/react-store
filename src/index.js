import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './routes/Login';
import Customers from './routes/Customers';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="customers" element={<Customers />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>, 
  rootElement
);
