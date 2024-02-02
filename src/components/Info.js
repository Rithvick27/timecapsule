import React from "react";

export default function Nodata() {
  var curr=new Date();
  return (
    <div className="container d-flex justify-content-center ">
      <h2 className={curr.getHours()>=6 && curr.getHours()<=17 ?"position-absolute top-50 start-50 translate-middle arvo-regular":"position-absolute top-50 start-50 translate-middle arvo-regular night"}>
        Login or Signup to enter your first message
      </h2>
    </div>
  );
}
