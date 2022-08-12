import React from "react";
import "./auth.css";
import { Login, Signup } from "../../components";
import { Link, Route } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Auth = () => {
  const isAuth = useSelector((state) => state.auth);
  console.log(isAuth);
  return (
    <div className="auth__container">
      <div className="auth-content">
        {isAuth === true ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default Auth;
