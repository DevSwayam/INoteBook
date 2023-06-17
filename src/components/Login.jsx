import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email:"", password:""})


    const handleSubmit = async(e)=>{
        e.preventDefault();
            const response = await fetch(`https://notebook-mongodb-api.onrender.com/api/auth/login`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({email:credentials.email, password:credentials.password})
        });
        const json= await response.json();
        
        if(json.success){
            console.log(json.success)
            localStorage.setItem('token', json.authToken);
            navigate("/")
            props.showAlert("Welcome Again to NoteBook", "success")
        }else{
            props.showAlert("Wrong Credentials", "danger")
        }
    }
    const onChange=(e)=>{
        setCredentials({...credentials , [e.target.name]: e.target.value})
    }

  return (
<div className='container'>
<h2 className='mt-3'>Login To Continue to NoteBook</h2>
    <form  onSubmit={handleSubmit}>
        <div className="mb-3" >
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" onChange={onChange} value={credentials.email} name="email" id="email" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={onChange} value={credentials.password} name="password" id="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  )
}

export default Login