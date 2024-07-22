import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="profile-img">
              <img src="/public/man.avif" className="img-fluid" alt="" />
            </div>
            <div className="username">
              <h1>Anas Abdo</h1>
            </div>
            <div className="userInfo">
              <p>UI/UX/DESIGNER</p>
            </div>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  about
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/skills">
                  skills
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/experience">
                  experience
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/work">
                  work
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
