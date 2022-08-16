import React from "react";
import "./plans.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate, Link } from "react-router-dom";
const plansData = [
  {
    name: "Basic Plan",
    txt: "Monthly price  ₱99",
    txt2: "Resolution 480p",
    txt3: "2 accounts",
    txt4: "Mobile and Tablet",
  },
  {
    name: "Premium Plan",
    txt: "Monthly price  ₱499",
    txt2: "Resolution 4k HD",
    txt3: "8 accounts",
    txt4: "All device",
  },
  {
    name: "Standard",
    txt: "Monthly price  ₱149",
    txt2: "Resolution 720p",
    txt3: "4 accounts",
    txt4: "All device",
  },
];

const Plans = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isSubs, setIsSubs] = React.useState(false);

  const handleSubscribe = async () => {
    if (elements == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
      className="plans__container"
    >
      <div className="plans-content">
        {plansData.map((plan, index) => (
          <div
            onClick={() => {
              if (index === 0) {
                window.location.replace(
                  "https://buy.stripe.com/test_28o6r06h50O5g484gi",
                  {
                    replace: true,
                  }
                );
              }
              if (index === 1) {
                window.location.replace(
                  "https://buy.stripe.com/test_dR63eOfRFaoF19e4gg",
                  {
                    replace: true,
                  }
                );
              }
              if (index === 2) {
                window.location.replace(
                  "https://buy.stripe.com/test_aEU16G6h5cwN05abIJ",
                  {
                    replace: true,
                  }
                );
              }
            }}
            key={index}
            className="plans"
          >
            <h1>{plan.name}</h1>
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
              <p>{plan.txt}</p>
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
              <p> {plan.txt2} </p>
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
              <p>{plan.txt3} </p>
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
              <p>{plan.txt4} </p>
            </span>
          </div>
        ))}
      </div>
      {/* <alig
      nItemms className="dadad" classanime /> */}
    </div>
  );
};

export default Plans;
