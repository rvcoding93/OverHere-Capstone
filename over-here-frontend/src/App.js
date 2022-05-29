import "./App.css";
import { Route, Routes, Router,Link } from "react-router-dom";
import React from "react";
import About from "./components/about";
import LandingPage from "./components/landing-page";
import Home from "./components/home";
import UploadPage from "./components/upload-page";
import ErrorPage from "./components/ErrorPage"




function App() {
  return (
    <div>
    <Router>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/upload-page">Contact</Link>
      </nav>
      <Routes>
        
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/upload-page" element={<UploadPage/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
