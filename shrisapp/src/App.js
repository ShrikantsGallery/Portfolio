import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
      {/* <h1>Welcome to Shris Gallery</h1>
      <p> magic happens here :)</p> */}
    </>
  );
}
export default App;
