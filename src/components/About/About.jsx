import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100 "
      >
        <p className="aboutTitle">ABOUT US</p>
        <h2 className="">WHO AM I?</h2>
        <p className="aboutText">
          Hi <strong> Im Anas </strong> On her way she met a copy. The copy
          warned the Little Blind Text, that where it came from it would have
          been rewritten a thousand times and everything that was left from its
          origin would be the word (and) and the Little Blind Text should turn
          around and return to its own, safe country.
        </p>
        <p className="aboutText">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        <div className="row ">
          <div className="col-md-3 col-sm-12 col-12">
            <div className="services color1">
              <span className="icon2">
                <i className="fa-regular fa-lightbulb fa-2x"></i>
              </span>
              <h3>Graphic Design</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-12">
            <div className="services color2">
              <span className="icon2">
                <i className="fa-solid fa-earth-africa fa-2x"></i>
              </span>
              <h3>Web Design</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-12">
            <div className="services color3">
              <span className="icon2">
                <i className="fa-solid fa-database fa-2x"></i>
              </span>
              <h3>Software</h3>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-12">
            <div className="services color4">
              <span className="icon2">
                <i className="fa-solid fa-mobile-screen-button fa-2x"></i>
              </span>
              <h3>Application</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
