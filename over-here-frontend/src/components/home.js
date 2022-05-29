import React from 'react'
import './home.css'

function Home () {
    return (
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
          <div class="submission-page inter-normal-black-32px">submission page</div>
          <div class="search-results-button"></div>
          <div class="search-results inter-normal-black-32px">search results</div>
          <div class="contact-box"></div>
          <div class="about-project-container"></div>
          <div class="hero-image-container"></div>
          <div class="hero-image-box inter-normal-black-32px">Hero Image Box</div>
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
          <div class="about-the-project inter-normal-black-32px">Abput the project</div>
          <div class="about-the-dev-box"></div>
          <div class="about-the-dev inter-normal-black-32px">About the Dev</div>
        </div>
      </div>
    </div>
    );
  }

export default Home