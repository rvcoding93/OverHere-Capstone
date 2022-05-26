import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import React from "react";
import About from "./components/about";
import LandingPage from "./components/landing-page";
import Home from "./components/home";
import UploadPage from "./components/upload-page";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:path(|about)">
          <About />
        </Route>
        <Route path="/landing-page">
          <LandingPage
          />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/upload-page">
          <UploadPage />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
