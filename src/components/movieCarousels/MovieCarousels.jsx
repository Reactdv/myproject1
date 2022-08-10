import React from "react";
import "./movieCarousels.css";
import { PopularSeries, PopularMovie } from "../index";
import { getMovies } from "../../utils/redux/actions/actions";
import { useDispatch } from "react-redux";

const MovieCarousels = () => {

  return (
    <div className="movieCarousels__container">
      <PopularMovie />
      <PopularSeries />
    </div>
  );
};

export default MovieCarousels;
