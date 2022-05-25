import { Button } from "@mui/material";
import React from "react";
import {render} from 'react-dom'
import './upload-page.css'

function UploadPage () {
    return (
      render (
        <body >
          {/* style="margin: 0; background: #ffffff" */}
        <input type="hidden" id="anPageName" name="page" value="upload-page" />
        <div class="container-center-horizontal">
          <div class="upload-page screen">
            <div class="overlap-group">
              <div class="overlap-group1">
                <div class="rectangle-49"></div>
                <div class="overlap-group4">
                  <div class="rectangle-5"></div>
                  <div class="rectangle-5-1"></div>
                  <div class="rectangle-5"></div>
                  <div class="rectangle-5-1"></div>
                </div>
              </div>
              <div class="rectangle-32"> Submission Page </div>
              <div class="overlap-group-container">
                <div class="overlap-group2">
                  <div class="rectangle-36"></div>
                  <div class="rectangle-38">
                  <Button>
                      Upload container 1
                    </Button>
                  </div>
                </div>
                <div class="overlap-group3">
                  <div class="rectangle-39">
                    <Button>
                      Upload container 2
                    </Button>
                  </div>
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