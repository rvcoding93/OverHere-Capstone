import React from "react";
import {render} from 'react-dom'

function UploadPage () {
    return (
      render (
        <body >
        {/* style="margin: 0; background: #ffffff" --- this styling came from the BODY tab*/}
        <input type="hidden" id="anPageName" name="page" value="upload-page" />
        <div class="container-center-horizontal">
          <div class="upload-page screen">
            <div class="overlap-group">
              <div class="rectangle-31"></div>
              <div class="rectangle-32"></div>
              <div class="overlap-group-container">
                <div class="overlap-group1">
                  <div class="rectangle-36"></div>
                  <div class="rectangle-38"></div>
                </div>
                <div class="overlap-group2">
                  <div class="rectangle-39"></div>
                </div>
              </div>
              <div class="flex-row">
                <div class="rectangle-37"></div>
                <div class="rectangle-35"></div>
              </div>
            </div>
          </div>
        </div>
      </body>
      )
    );
  }

export default UploadPage