import React from "react";
import "./auth.css";
import { Login, Signup } from "../../components";
import { Link, Route } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth__container">
      <div className="auth-content">
        {/* <Login /> */}
        <Signup />
      </div>
    </div>
  );
};

export default Auth;
