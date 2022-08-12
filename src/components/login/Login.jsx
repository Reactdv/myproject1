import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className="login__container">
      <div className="login__content">
        <h1>Login</h1>
        <input placeholder="username" type="text" className="login__username" />
        <input
          placeholder="password"
          type="password"
          className="login__password"
        />
        <button className="login__btn">Login</button>
        <div className="login__newToNetflix">
          <h5>New to Netflix?</h5>
          <Link to="/auth/signup"> Signup</Link>
        </div>
        <p>This page is protected by reCAPTCHA <br/>to ensure your not a robot Learn more</p>
      </div>
    </div>
  );
};

export default login;
