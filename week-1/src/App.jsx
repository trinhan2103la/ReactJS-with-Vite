/* eslint-disable no-unused-vars */

/* eslint-disable react/no-unknown-property */

import React from "react";

import Nav from "./components/nav/Nav";
import AuthButtons from "./components/author/AuthButtons";
import Header from "./components/header/Header";

import "./App.css";
import Treniding from "./components/trending/Trending";

export default function App() {
  return (
    <div className="grid md:grid-cols-5">
      <Nav />
      <main className=" py-6 px-12 md:col-span-4 bg-cyan-200">
        <AuthButtons />
        <Header />
        <Treniding />
      </main>
    </div>
  );
}
