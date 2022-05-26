import React from "react";
import Button from '@mui/material/Button';


function LandingPage() {
    return (
        <body >
        {/* style="margin: 0; background: #ffffff" --- this styling came from the BODY tab*/}
    <input type="hidden" id="anPageName" name="page" value="landing-page" />
    <div class="container-center-horizontal">
      <div class="landing-page screen">
        <div class="overlap-group">
          <div class="rectangle-15"></div>
          <img class="flag_of_-ukraine-1" src="img/flag-of-ukraine-1@2x.png" alt="" />
          <Button id="enter-here-button" variant="outlined">Enter Here</Button>
        </div>
      </div>
    </div>
  </body>
    );
  }

export default LandingPage