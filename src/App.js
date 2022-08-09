import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Home, NotFound } from "./pages";
import { useDispatch } from "react-redux";
import { getMovies } from "./utils/redux/actions/actions";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const a = 'suicied squad'
    dispatch(getMovies(a));
  }, [dispatch]);
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
