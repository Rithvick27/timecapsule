import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const host = process.env.REACT_APP_host;
export default function Signup(props) {
  let navigate = useNavigate();
  const [cred, setcred] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  async function handlesubmit(e) {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: cred.name,
        email: cred.Email,
        password: cred.Password,
      }), // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("item", json.atoken);
      localStorage.setItem("name", json.name);
      navigate("/add");

      props.showalert("Account created successfully", "success");
    } else {
      props.showalert("Invalid ", "danger");
    }
    window.location.reload();
  }

  function onchange(e) {
    setcred({ ...cred, [e.target.name]: e.target.value });
  }
  return (
    <div className="container">
      <h2 className="arvo-bold"> Create your account</h2>
      <form className=" my-4" onSubmit={handlesubmit}>
        <div class="mb-3">
          <label htmlFor="Name" className="form-label arvo-regular">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            name="name"
            onChange={onchange}
            required
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="Email" className="form-label arvo-regular">
            Email address
          </label>
          <input
            type="email"
            className="form-control arvo-regular"
            id="Email"
            name="Email"
            onChange={onchange}
            required
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label arvo-regular">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="Password"
            name="Password"
            onChange={onchange}
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label arvo-regular">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="cPassword"
            name="cPassword"
            required
            onChange={onchange}
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
}
