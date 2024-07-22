import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <>
      <div
        id="about"
        className="container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100 "
      >
        <p className="aboutTitle">MY SPECIALTY</p>
        <h2 className="">MY SKILLS</h2>
        <p className="aboutText">
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>

        <div className="row">
          <div className="col-md-6">
            <div>
              <h3 className="mb-2 progressTitle">photoshop</h3>
              <div
                className="proColor1 progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 progressTitle">HTML5</h3>
              <div
                className="proColor2  progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 progressTitle">WordPress</h3>
              <div
                className="proColor3  progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h3 className="mb-2 progressTitle">jQuery</h3>
              <div
                className="proColor4 progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 progressTitle">CSS3</h3>
              <div
                className="proColor5  progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 progressTitle">SEO</h3>
              <div
                className="proColor6  progress"
                role="progressbar"
                aria-label="Example with label"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
