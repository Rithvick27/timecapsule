import React, { useState } from "react";
export default function Capsules(props) {
  const [time, settime] = useState(1);

  var curr = new Date();
  var show = new Date(`'${props.date.slice(0, 10)}'`);
  setInterval(() => {
    settime(time + 1);
    settime(1);
  }, 2000);

  if (curr.getTime() >= show.getTime()) {
    return (
      <div className="card w-50 container my-5">
        <div className="card-body">
          <h5 className="card-title">MESSAGE FOR {props.date.slice(0, 10)}</h5>
          <p className="card-text">{props.text}</p>
          <i
            className="fa-solid fa-trash cursor-pointer"
            onClick={() => {
              props.delete(props.id);
              props.showalert("Message deleted successfully","success");
            }}
          ></i>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card  w-50 container my-5 picture">
        <div className="card-body">
          <h5>locked till {props.date.slice(0, 10)}</h5>
          <i
            className="fa-solid fa-trash cursor-pointer"
            onClick={() => {
              props.delete(props.id);
            }}
          ></i>
        </div>
      </div>
    );
  }
}