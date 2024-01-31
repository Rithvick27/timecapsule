import React,{ useState}from "react";
import { useNavigate } from "react-router-dom";
const host=process.env.REACT_APP_host;
export default function Login(props) {
    const navigate=useNavigate();

    const [cred,setcred] = useState({
        email:"",
        password:""
    })
    async function handlesub(e)
    {
       e.preventDefault();
       const response = await fetch(`${host}/api/auth/loginuser`, {
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
       localStorage.setItem("name",json.name);
        navigate("/add");
        props.showalert("Logged in sucessfully","success");
        window.location.reload();

      }
      else{
        props.showalert("Invalid credentials","danger");
      }
      
    }
    function onchange(e){
       setcred({...cred,[e.target.name]:e.target.value})
    }
  return (
    <div className="container ">
      <h2>Login to your account</h2>
      <form className=" my-4" onSubmit={handlesub}>
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
