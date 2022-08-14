import React from "react";
import { Banner, Carousel } from "../../components";

const Series = () => {
  return (
    <div className="series__container">
      <div className="series-content">
        <Banner movieStatus="popular" />
        <Carousel movieStatus="popular" page="1" />
        <Carousel movieStatus="top_rated" page="1" />
        <Carousel movieStatus="now_playing" page="1" />
        <Carousel movieStatus="upcoming" page="2" />
      </div>
    </div>
  );
};

export default Series;
