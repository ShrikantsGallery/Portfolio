import React from "react";
import './App.css';
										 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Messages from './pages/Messages';

function App() {
  return (
    
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/messages' component={Messages} />
        </Routes>
      </Router>
      {/* <h1>Welcome to Shris Gallery</h1>
      <p> magic happens here :)</p> */}
    </>
  );
}

export default App;
