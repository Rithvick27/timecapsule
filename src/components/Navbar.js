import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav=useNavigate();
  let location = useLocation();
  useEffect(() => {}, [location]);
  function handlelogout()
  {
    localStorage.removeItem("item");
    nav("/login");

  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="/">
          TIMECAP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/capsules" ? "active" : ""
                }`}
                aria-current="page"
                to="/capsules"
              >
                My Capsules
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("item")?<form className="d-flex" role="search">
          <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
          <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
      </form>:<button className="btn btn-primary mx-2 " onClick={handlelogout}>Logout</button>}
        </div>
      </div>
    </nav>
  );
}
