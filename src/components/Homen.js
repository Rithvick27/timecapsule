import React from "react";
import { Link } from "react-router-dom";

export default function Homen() {
  return (
    <div className="bg-slate-600">
      <div className="text-center">
        <h1 className="arvo-bold large night ">TIMECAP</h1>
        <h3 className="arvo-regular night ">A Message for Future you</h3>
        {!localStorage.getItem("item") ? (
          <div>
            <Link to="/login" className="btn btn-light btn-lg my-5">
              Login
            </Link>
            <Link to="/signup" className="btn btn-light btn-lg mx-4">
              Sign up
            </Link>
          </div>
        ) : (
          <div>
            <h2 className="arvo-regular night my-5">WELCOME TO TIMECAP</h2>
            <h1 className="arvo-regular-italic night ">
              {localStorage.getItem("name")}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
