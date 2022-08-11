import React from "react";
import axios from "axios";
import "./movieCarousels.css";
import {
  PopularSeries,
  PopularMovie,
  NowPlayingMovie,
  TopRatedMovie,
  LatestMovie,
} from "../index";

const MovieCarousels = () => {
  return (
    <div className="movieCarousels__container">
      <PopularMovie />
      <NowPlayingMovie />
      <TopRatedMovie />
      <LatestMovie />
    </div>
  );
};

export default MovieCarousels;
