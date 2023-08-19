import "./App.css";
import React, { Component } from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignInPage from "./pages/signin";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
