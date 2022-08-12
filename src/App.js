import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { Home, NotFound, Auth } from "./pages";
import { useDispatch } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
