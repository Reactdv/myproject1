import React from "react";
import { Banner, Carousel } from "../../components";

const Series = () => {
  return (
    <div className="series__container">
      <div className="series-content">
        <Banner category="movie" movieStatus="popular" />
        <Carousel category="movie" movieStatus="popular" page="1" />
        <Carousel category="movie" movieStatus="top_rated" page="1" />
        <Carousel category="movie" movieStatus="now_playing" page="1" />
        <Carousel category="movie" movieStatus="upcoming" page="2" />
      </div>
    </div>
  );
};

export default Series;
