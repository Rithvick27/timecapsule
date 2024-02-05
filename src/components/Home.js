import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="text-center">
        <h1 className="arvo-bold large">TIMECAP</h1>
        <h3 className="arvo-regular ">A Message for Future you</h3>
        {!localStorage.getItem("item") ? (
          <div>
            <Link to="/login" className="btn btn-dark btn-lg my-5">
              Login
            </Link>
            <Link to="/signup" className="btn btn-dark btn-lg mx-4">
              Sign up
            </Link>
          </div>
        ) : (
          <div>
            <h2 className="arvo-regular my-5">WELCOME TO TIMECAP</h2>
            <h1 className="arvo-regular-italic">
              {localStorage.getItem("name")}
            </h1>
          </div>
        )}
      </div>
    </div>

    //<div
    //   className="card h-auto w-25 position-absolute top-50 start-50 translate-middle"
    //   style={{ width: "18 rem" }}
    // >
    //   <img src="images/logotc.jpeg" className="card-img-top" alt="..." />
    //   <div className="card-body">
    //     <h5 className="card-title">TIMECAPSULE</h5>
    //     <p className="card-text">
    //       A Website where You can write a message for future you
    //     </p>
    //     {!localStorage.getItem("item") ? (
    //       <div>
    //         <Link to="/login" className="btn btn-primary ">
    //           login
    //         </Link>
    //         <Link to="/signup" className="btn btn-primary mx-2">
    //           Sign up
    //         </Link>
    //       </div>
    //     ) : (
    //       <div>
    //         <h5>WELCOME TO TIMECAPSULE</h5>
    //         <h4>{localStorage.getItem("name")}</h4>
    //       </div>
    //     )}
    //   </div>
    // </div>
    // <div className=" logo w-100 h-25 card text-bg-dark p-3 mb-2 bg-secondary text-white container-fluid position-relative bg-black">
    //   {/* <div className="m-auto">
    //     <img
    //       src="images/logotc.jpeg"
    //       className="figure-img opacity-75 img-fluid object-fit-contain border rounded m-auto"
    //       alt="timecapsule"
    //     />
    //   </div> */}

    //   <div className="card-img-overlay">
    //     <h1 className="card-title text-dark text-center display-1">
    //       TIMECAPSULE
    //     </h1>
    //     {/* <h1 className="card-text text-center blockquote fs-2 text-secondary-emphasis">
    //       A Website where You can write a message for future you
    //     </h1> */}
    //   </div>
    // </div>
  );
}
