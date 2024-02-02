import React from "react";

export default function Nodata() {
  var curr=new Date();
  return (
    <div className="container d-flex justify-content-center ">
      <h3 className={curr.getHours()>=6 && curr.getHours()<=17 ?"position-absolute top-50 start-50 translate-middle arvo-regular":"position-absolute top-50 start-50 translate-middle arvo-regular night"}>
        NO MESSAGE TO SHOW
      </h3>
    </div>
  );
}
