import React from "react";
import "./subscriptions.css";
import mastercard from "../../assets/mastercard.png";

const Subscriptions = () => {
  return (
    <div className="subscriptions__container">
      <div className="subscriptions__wrapper">
        <div className="subscriptions-heading">
          <h1> Subscriptions </h1>
          <h5>Manage your subscriptions</h5>
        </div>
        <div className="subscriptions-content">
          <div className="subscriptions-content__wrapper">
            <div className="subscriptions-title">
              <h1> Payment method </h1>
              <h5>update your billing address</h5>
            </div>
            <div className="subscriptions-card__details">
              <h4>Card details</h4>
              <div className="subscriptions-card__content">
                <div className="nameOnCard__wrapper">
                  <span>
                    <h4>Name on Card</h4>
                    <input placeholder="lorem ipsum" type="text" />
                  </span>
                  <span>
                    <h4>Expiry</h4>
                    <input type="month" max="2023-06" name="" id="" />
                  </span>
                </div>
                <div className="cardAndCv__wrapper">
                  <span style={{ position: "relative",overflow: "hidden" }}>
                    <h4>Card number</h4>

                    <input
                      className="mastercard"
                      type="tel"
                      inputmode="numeric"
                      pattern="[0-9\s]{13,19}"
                      autocomplete="cc-number"
                      maxlength="19"
                      placeholder="xxxx xxxx xxxx xxxx"
                    />
                    <img className="mastercard__icon" src={mastercard} alt="" />
                  </span>
                  <span>
                    <h4>CVV</h4>
                    <input
                      style={{
                        width: "70px",
                      }}
                      maxLength="3"
                      type="password"
                      name=""
                      id=""
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
