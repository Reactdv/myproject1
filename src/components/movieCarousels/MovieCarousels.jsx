import React from "react";
import "./movieCarousels.css";
import { PopularSeries, PopularMovie } from "../index";
import { getMovies } from "../../utils/redux/actions/actions";
import { useDispatch } from "react-redux";

const MovieCarousels = () => {

  return (
    <div className="movieCarousels__container">
      <PopularMovie movie='squid game'/>
      <PopularMovie movie='avengers'/>
      <PopularMovie movie='money heist'/>
      <PopularSeries movie='orphan'/>
    </div>
  );
};

export default MovieCarousels;
