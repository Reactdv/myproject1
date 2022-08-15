import React from "react";
import { Banner, Carousel } from "../../components";

const Series = () => {
  return (
    <div className="series__container">
      <div className="series-content">
        <Banner isAnime={false} category="movie" movieStatus="popular" />
        <Carousel
          isAnime={false}
          category="movie"
          movieStatus="popular"
          page="1"
        />
        <Carousel
          isAnime={false}
          category="movie"
          movieStatus="top_rated"
          page="1"
        />
        <Carousel
          isAnime={false}
          category="movie"
          movieStatus="now_playing"
          page="1"
        />
        <Carousel
          isAnime={false}
          category="movie"
          movieStatus="upcoming"
          page="2"
        />
      </div>
    </div>
  );
};

export default Series;
