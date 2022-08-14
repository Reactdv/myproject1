import React from "react";
import "./home.css";
import { useSelector } from "react-redux/es/exports";
import {
  Navbar,
  FeaturedMovie,
  MovieCarousels,
  GetStarted,
  Banner,
  Carousel,
} from "../../components";

const Home = () => {
  return (
    <div className="home__container">
      <Banner category="movie" movieStatus="popular" />
      <Carousel category="movie" movieStatus="popular" page="1" />
      <Carousel category="movie" movieStatus="top_rated" page="1" />
      <Carousel category="movie" movieStatus="now_playing" page="1" />
      <Carousel category="movie" movieStatus="upcoming" page="2" />
    </div>
  );
};

export default Home;
