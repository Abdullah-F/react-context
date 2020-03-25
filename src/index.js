import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./hooks-store/products-store";
//import { Provider } from 'react-redux';
//import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
//import productReducer from "./store/reducers/products";

//const rootReducer = combineReducers({
//  shop: productReducer
//});
//
//const store = createStore(rootReducer);

configureStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
