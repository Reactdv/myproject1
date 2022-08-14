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
      <Banner movieStatus="popular" />
      <Carousel movieStatus="popular" page="1" />
      <Carousel movieStatus="top_rated" page="1" />
      <Carousel movieStatus="now_playing" page="1" />
      <Carousel movieStatus="upcoming" page="2" />
    </div>
  );
};

export default Home;
