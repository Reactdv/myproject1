import React from "react";
import "./auth.css";
import { Login,Signup } from "../../components"

const Auth = () => {
  return (
    <div className="auth__container">
      <div className="auth-content">
        <Login />
      </div>
    </div>
  );
};

export default Auth;
