import React from "react";
import "./anime.css";
import { Carousel, Banner } from "../../components";
const Anime = () => {

  return (
    <div>
      <div className="featured__anime">
        <Banner isAnime={true} category="movie" movieStatus="popular" />
        <Carousel
          isAnime={true} 
          category="movie"
          movieStatus="popular"
          page="1"
        />
        <Carousel
          isAnime={true} 
          category="movie"
          movieStatus="top_rated"
          page="1"
        />
        <Carousel
          isAnime={true} 
          category="movie"
          movieStatus="now_playing"
          page="1"
        />
        <Carousel
          isAnime={true} 
          category="movie"
          movieStatus="upcoming"
          page="2"
        />
      </div>
    </div>
  );
};

export default Anime;
