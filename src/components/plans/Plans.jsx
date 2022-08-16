import React from "react";
import "./plans.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Plans = () => {
  return (
    <div className="plans__container">
      <div className="plans-content">
        <div className="plans">
          <h1>Basic Plans</h1>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <BsFillPatchCheckFill />
            <p>Monthly price ₱ 99</p>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              //   backgroundColor: "red"
            }}
          >
            <BsFillPatchCheckFill />
            <p> Resolution 480p </p>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              //   backgroundColor: "red"
            }}
          >
            <BsFillPatchCheckFill />
            <p> 2 accounts </p>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              //   backgroundColor: "red"
            }}
          >
            <BsFillPatchCheckFill />
            <p>Mobile and Tablet </p>
          </span>
        </div>
        <div className="plans">
          <h1>Standard Plans</h1>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <BsFillPatchCheckFill />
            <p>Monthly price ₱ 149</p>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              //   backgroundColor: "red"
            }}
          >
            <BsFillPatchCheckFill />
            <p> Resolution 720p </p>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              //   backgroundColor: "red"
            }}
          >
            <BsFillPatchCheckFill />
            <p> 5 accounts </p>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              //   backgroundColor: "red"
            }}
          >
            <BsFillPatchCheckFill />
            <p>Desktop </p>
          </span>
        </div>
        <div className="plans">
          <h1>Premium</h1>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <BsFillPatchCheckFill />
            <p>Monthly price ₱ 599</p>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              //   backgroundColor: "red"
            }}
          >
            <BsFillPatchCheckFill />
            <p> Resolution 4k HD </p>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              //   backgroundColor: "red"
            }}
          >
            <BsFillPatchCheckFill />
            <p> 8 accounts </p>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              //   backgroundColor: "red"
            }}
          >
            <BsFillPatchCheckFill />
            <p> All device </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Plans;
