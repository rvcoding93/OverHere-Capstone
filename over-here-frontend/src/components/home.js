import React from 'react';
import './home.css';
import Button from '@mui/material/Button'; 


// import Navibar from './Navibar'



function Home () {
    return (
      <>
      {/* <Navibar/> */}
      <div class="container-center-horizontal">
      <div class="home screen">
        <div class="overlap-group">
          <div class="background-container"></div>
          <div class="nav-bar-container"></div>
          <div class="logo-container"></div>
          <h1 class="title inter-normal-black-32px">logo box</h1>
          <div class="nav-bar-buttons-container"></div>
          <div class="about-box"></div>
          <div class="submission-page-button"></div>
          <Button class="submission-page inter-normal-black-32px" id='submissionPageButton'>submission page</Button>
          <div class="search-results-button"></div>
          <Button variant="contained" class="search-results inter-normal-black-32px" id='searchResultsButton'>search results</Button>
          <div class="contact-box"></div>
          <div class="about-project-container"></div>
          <div class="hero-image-container"></div>
          {/* <div class="hero-image-box inter-normal-black-32px">Hero Image Box</div> */}
          <div class="footer-container"></div>
          <div class="footer">Footer
            {/* <ul>
            <ul>hi</ul>
            <ul>dj</ul>
            <ul>dj</ul>
            <ul>dj</ul>
            </ul> */}
          </div>
          <div class="about-this-project-container"></div>
          <div class="about-the-project inter-normal-black-32px">
            <h2>About the project</h2>
            <br/>
            <p> The purpose of this app was to develop software that could aid in reconnecting refugee families that may have been separated during the war. </p>
          </div>
          <div class="about-the-dev-box"></div>
          <div class="about-the-dev inter-normal-black-32px">About the Dev
          <p></p>
          </div>
        </div>
      </div>
    </div>
    </>
    );
  }


export default Home