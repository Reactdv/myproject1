import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { Home, NotFound, Auth, Series, Anime, TV } from "./pages";
import { useDispatch } from "react-redux";
import {
  Login,
  Signup,
  Navbar,
  Account,
  Subscriptions,
  Plans,
} from "./components";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="anime" element={<Anime />} />
        <Route path="tv" element={<TV />} />

        <Route path="plans" element={<Plans />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
