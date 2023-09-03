import React, { Component, useEffect, useState } from "react";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="auth-wrapper">
      <div id='user-data' className="auth-inner">
        <div className="home">          
          Logged as: <h1>{userData.nickname}</h1>
          <br />
          <button onClick={logOut} className="btn btn-danger">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}