import React from "react";
import "./home.css";
import {
  Navbar,
  FeaturedMovie,
  MovieCarousels,
  GetStarted,
} from "../../components";

const Home = () => {
  return (
    <div className="home__container">
      <FeaturedMovie />
      <MovieCarousels />
      <GetStarted />
    </div>
  );
};

export default Home;
