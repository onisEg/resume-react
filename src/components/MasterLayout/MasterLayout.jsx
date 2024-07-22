import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MasterLayout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 navigation">
            <Navbar />
          </div>
          <div className="col-md-9 px-0 body">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
