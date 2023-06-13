import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({name:"",email:"", password:"", cpassword:""})
  const onChange=(e)=>{
    setCredentials({...credentials , [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
      if(credentials.password!==credentials.cpassword){
        props.showAlert("Please Check Your Password", "danger")
        navigate("/signup");
      }else{
        const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email, password:credentials.password})
    });
    const json= await response.json();
    
    if(json.success){
        console.log(json.success)
        props.showAlert("Account Created You can Use Your Account", "success")
        localStorage.setItem('token', json.authToken);
        navigate("/")
    }else{
        props.showAlert("Person with this Email Already Exists", "danger")
    }
      }
        
}

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            onChange={onChange}
            value={credentials.name}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
          name="email"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            value={credentials.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
          name="password"
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            value={credentials.password}
            minLength={8}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
          name="cpassword"
            type="password"
            className="form-control"
            id="cpassword"
            onChange={onChange}
            value={credentials.cpassword}
            minLength={8}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
