import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import logger from "redux-logger";
import { Provider } from "react-redux";
import reducers from "./utils/redux/reducers";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51LRsZVETUK4Gsmu7R2wwpzlmhqxfzBBR3IMyn2T9jUYk8oZhGxkOKZLt7X281dU6xDvvFsgiIjmu1NKgDMyKmBW500wR5tXQoc"
);

const store = createStore(reducers, compose(applyMiddleware(thunk, logger)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
