import React from "react";
import "./tv.css";
import { Banner, Carousel } from "../../components";

const TV = () => {
  return (
    <div className="tv__container">
      <div className="tv-content">
        <Banner category="tv" movieStatus="popular" />
        <Carousel category="movie" movieStatus="popular" page="1" />
        <Carousel category="movie" movieStatus="top_rated" page="1" />
        <Carousel category="movie" movieStatus="now_playing" page="1" />
        <Carousel category="movie" movieStatus="upcoming" page="2" />
      </div>
    </div>
  );
};

export default TV;
