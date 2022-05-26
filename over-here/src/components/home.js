import React from 'react'
import './home.css'

function Home () {
    return (
      <body >
      {/* style="margin: 0; background: #ffffff" --- this styling came from the BODY tab*/}
    <input type="hidden" id="anPageName" name="page" value="home" />
    <div class="container-center-horizontal">
      <div class="home screen">
        <div class="overlap-group">
          <div class="rectangle-31"></div>
          <div class="rectangle-41"></div>
          <div class="rectangle-42"></div>
          <div class="rectangle-43"></div>
        </div>
      </div>
    </div>
  </body>
    );
  }

export default Home