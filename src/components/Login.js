import React,{ useState}from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const navigate=useNavigate();

    const [cred,setcred] = useState({
        email:"",
        password:""
    })
    async function handlesub(e)
    {
       e.preventDefault();
       const response = await fetch('http://localhost:5000/api/auth/loginuser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         
        },
  
        body: JSON.stringify({ email:cred.Email,password:cred.Password }), // body data type must match "Content-Type" header
      });
      const json=await response.json()
      console.log(json);
      if(json.success)
      {
       localStorage.setItem("item",json.atoken);
        navigate("/");
        props.showalert("Logged in sucessfully","success");

      }
      else{
        props.showalert("Invalid credentials","danger");
      }
      
    }
    function onchange(e){
       setcred({...cred,[e.target.name]:e.target.value})
    }
  return (
    <div className="container">
      <form onSubmit={handlesub}>
        <div class="mb-3">
          <label htmlFor="Emai" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            name="Email"
            onChange={onchange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="Password"
            name="Password"
            onChange={onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
}