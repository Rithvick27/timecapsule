import React from "react";
export default function Capsules(props) {
  

  var curr = new Date();
  var show = new Date(`'${props.date.slice(0, 10)}'`);
  

  return curr.getTime() >= show.getTime() ? (
    <div className="card w-50 container my-5 ">
      <div className="card-body">
        <h5 className="card-title arvo-bold">
          MESSAGE FOR {props.date.slice(0, 10)}
        </h5>
        <p className="card-text">{props.text}</p>
        <i
          className="fa-solid fa-trash cursor-pointer"
          onClick={() => {
            props.delete(props.id);
            props.showalert("Message deleted successfully", "success");
          }}
        ></i>
      </div>
    </div>
  ) : (
    <div className="card  w-50 container my-5 picture ">
      <div className="card-body">
        <h5 className="text-dark arvo-bold">
          Locked till {props.date.slice(0, 10)}
        </h5>
        <i
          className="fa-solid fa-trash cursor-pointer text-dark"
          onClick={() => {
            props.delete(props.id);
            props.showalert("Message deleted successfully", "success");
          }}
        ></i>
      </div>
    </div>
  );
}
