import React from "react";
import "./getStarted.css";
import moviesBg from '../../assets/movies-bg.jpg'

const GetStarted = () => {
  return (
    <div className="getStarted__container">
     
      <div className="getStarted-content">
        <h1>Unlimited Movies, TV Shows, and more.</h1>
        <h3>Watch anywhere Cancel anytime</h3>
        <h5>Get Ready to watch?. Enter your email to create an account</h5>
        <div className="getStarted-input__container">
          <input type="email" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
