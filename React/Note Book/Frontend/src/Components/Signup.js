import React, { useState } from 'react';

export default function SignUp() {
  
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");  
  
    const handleSubmit = (submit) => {
        submit.preventDefault();
        
        fetch("http://localhost:3001/api/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          nickname,
          password,
        }),
      }).then((res) => res.json()).then((data) => {        
        if (data.status == 201) {          
          alert("Registration Successful");
          window.location.href = "./sign-in";
        }        
        else if (data.status == 401) {
          alert("User already exists");
        }
      });
    };



    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>    

        <div className="mb-3">
          <label>Nickname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  
}