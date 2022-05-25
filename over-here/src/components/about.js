import React from "react";
import {render} from 'react-dom'
import './about.css'

function About () {
    return (
        render (
        <body> 
        {/* style="margin: 0; background: #ffffff" --- this styling came from the BODY tab*/}
        <input type="hidden" id="anPageName" name="page" value="about" />
        <div class="container-center-horizontal">
        <div class="about screen">
            <div class="overlap-group">
            <div class="rectangle-40"></div>
            <div class="flex-row">
                <div class="rectangle-45"></div>
                <div class="rectangle-48"></div>
            </div>
            <div class="rectangle-46"></div>
            <div class="rectangle-47"></div>
            </div>
        </div>
        </div>
    </body>
        )
    );
  }

export default About