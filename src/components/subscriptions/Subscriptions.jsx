import React from "react";
import "./subscriptions.css";
import mastercard from "../../assets/mastercard.png";
import { AiOutlineMail } from "react-icons/ai";

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
                  <span style={{ position: "relative", overflow: "hidden" }}>
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
            <div className="subscription-address">
              <div className="email__wrapper">
                <div className="subscriptions-heading">
                  <h1> Email Address </h1>
                  <h5>Payment receipt will be sent to this address</h5>
                </div>
                <div className="emailAddress__wrapper">
                  <input
                    className="emailAdd"
                    type="email"
                    placeholder="youremail@gmail.com"
                  />
                  <AiOutlineMail className="subscriptions-email__icon" />
                </div>
              </div>
              <div className="streetAdd__container">
                <h4>Street Address</h4>
                <input
                  placeholder="100 ipsum street"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="city__container">
                <h4>City </h4>
                <input placeholder="ipsum city" type="text" name="" id="" />
              </div>
              <div className="stateProvince__container">
                <h4>State / Province </h4>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "30px",
                  }}
                >
                  <input placeholder="lorem" type="text" name="" id="" />
                  <input placeholder="ipsum" type="text" name="" id="" />
                </span>
              </div>
              <div className="country__container">
                <h4>Country</h4>
                <select className="countries">
                  <option value="US">US</option>
                  <option value="PH">Philippines</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Japan">Japan</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
