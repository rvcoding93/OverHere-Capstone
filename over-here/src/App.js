import "./App.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import About from "./components/about";
import LandingPage from "./components/landing-page";
import Home from "./components/home";
import UploadPage from "./components/upload-page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|about)">
          <About />
        </Route>
        <Route path="/landing-page">
          <LandingPage
            overlapGroup="/img/ukraine-by-theno7er-df0matk-250t-1@1x.png"
            flag_Of_Ukraine1="/img/flag-of-ukraine-1@2x.png"
            title="Enter Here"
          />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/upload-page">
          <UploadPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
