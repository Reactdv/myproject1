import React from "react";
import "./movieCarousels.css";
import { PopularSeries, PopularMovie } from "../index";
import { rapidApi } from "../../utils/apis";
import axios from "axios";
import { useSelector } from "react-redux";

const MovieCarousels = () => {
  const popularMovies = useSelector((state) => state.movies.d);
  console.log(popularMovies);

  return (
    <div className="movieCarousels__container">
      <PopularMovie />
      <PopularSeries />
      {popularMovies.map((item, index) => (
        <div key={index}>
          <h1>{item.l}</h1>
          <img src={item.i.imageUrl} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MovieCarousels;
