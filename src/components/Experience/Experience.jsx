import React from "react";
import "./experience.css";

export default function Experience() {
  return (
    <>
      <div
        id="about"
        className="container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100 "
      >
        <p className="aboutTitle">EXPERIENCE</p>
        <h2 className="">WORK EXPERIENCE</h2>
        <ul className="timeline">
          <li>
            <div className="timeline-badge">
              <i class="fa-solid fa-pencil"></i>
            </div>
            <div className="timeline-panel">
              <h2>
                <a href="#">Full Stack Developer</a>
                <span>2017-2018</span>
              </h2>
              <p>
                Tolerably earnestly middleton extremely distrusts she boy now
                not. Add and offered prepare how cordial two promise. Greatly
                who affixed suppose but enquire compact prepare all put. Added
                forth chief trees but rooms think may.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-badge danger">
              <i class="fa-solid fa-pencil"></i>
            </div>
            <div className="timeline-panel">
              <h2>
                <a href="#">Front End Developer at Google Company</a>
                <span>2017-2018</span>
              </h2>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </li>
          <li>
            <div className="timeline-badge warning">
              <i class="fa-solid fa-pencil"></i>
            </div>
            <div className="timeline-panel">
              <h2>
                <a href="#">System Analyst</a>
                <span>2017-2018</span>
              </h2>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
