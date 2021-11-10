import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './routes/Login';
import Customers from './routes/Customers';

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="customers" element={<Customers />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>, 
  rootElement
);
