/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { CartProvider } from "react-use-cart";
import Header from "./components/header/Header";
import Content from "./components/content/Content";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Content />
      </CartProvider>
    </>
  );
}

export default App;
