import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NaviBar from "./Components/Navibar";
import Home from "./Home";
import Users from "./Users";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
