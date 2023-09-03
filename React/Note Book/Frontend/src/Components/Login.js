import React, { useState } from 'react';
import { Redirect } from 'react-router';

export default function Login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");  
  
  
  const handleSubmit = (submit)=> {
    submit.preventDefault();    

    fetch("http://localhost:3001/api/login", {
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
      }),}).then((res) =>res.json()).then((data) => {
        if(data.status == 401){
          alert('User not found');        
          return;
        }        
        if (data.status == "ok") {
          alert("login successful");         
          window.localStorage.setItem("token", data.data);
          console.log(window.localStorage.getItem('token'));    
          window.localStorage.setItem("loggedIn", true);          
          window.location.href = "./Notes";          
        }
      });   
   
  }  
  
  
  
    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

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

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  
}