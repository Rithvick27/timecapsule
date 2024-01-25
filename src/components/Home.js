import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="card h-auto w-25 position-absolute top-50 start-50 translate-middle"
      style={{ width: "18 rem" }}
    >
      <img src="images/logotc.jpeg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">TIMECAPSULE</h5>
        <p className="card-text">
          A Website where You can write a message for future you
        </p>
        {!localStorage.getItem("item") ? (
          <div>
            <Link to="/login" className="btn btn-primary ">
              login
            </Link>
            <Link to="/signup" className="btn btn-primary mx-2">
              Sign up
            </Link>
          </div>
        ) : (
          <div>
            <h5>WELCOME TO TIMECAPSULE</h5>
            <h4>{localStorage.getItem("name")}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
