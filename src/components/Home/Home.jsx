import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div id="carouselExample" className="carousel slide full-screen-carousel">
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img
              src="../../../public/slider1.jpg"
              className="d-block w-100 object-fit-cover "
              alt="..."
            />
            <div className="overlay">
              <div className="container text-center text-md-start caption">
                <h1 className="text-lg-start text-center">
                  Hi <br /> I'm Anas
                </h1>
                <p className="text-lg-start text-center">
                  100% html5 bootstrap templates Made <br /> By{" "}
                  <strong>Anas</strong>
                </p>
                <button>
                  Download Cv <i class="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item position-relative">
            <img
              src="../../../public/slider2.jpg"
              className="d-block w-100 object-fit-cover"
              alt="..."
            />
            <div className="overlay">
              <div className="container text-center text-md-start caption">
                <h1 className="text-lg-start text-center">
                  I am <br /> a Designer
                </h1>
                <p className="text-lg-start text-center ">
                  100% html5 bootstrap templates Made <br /> By{" "}
                  <strong>Anas</strong>
                </p>
                <button className="">
                  view portfilio <i class="fa-solid fa-briefcase"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
