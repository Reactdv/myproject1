import React from "react";
import "./banner.css";
import axios from "axios";
import { BsFillPlayFill } from "react-icons/bs";
const baseUrl = "https://api.themoviedb.org/3/movie/";
const imgPath = "https://image.tmdb.org/t/p/original";

const Banner = ({ movieStatus }) => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      const fetchData = async () => {
        return await axios
          .get(
            `https://api.themoviedb.org/3/movie/${movieStatus}?api_key=6db570f91afb8be515fb7e766b64e53c&page=1`
          )
          .then((res) =>
            setMovies(
              res.data.results[
                Math.floor(Math.random() * res.data.results.length - 1)
              ]
            )
          );
      };
      fetchData();
    }
    return () => (subscribe = false);
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div className="banner__container">
      <div className="banner-content">
        <img
          className="banner-img"
          src={`${imgPath}${movies?.backdrop_path || movies?.poster_path}`}
          alt=""
        />
        <div>
          <h1>{movies?.title || movies?.original_title}</h1>
          <p>{truncate(movies?.overview, 90)}</p>
          <span className="banner-ratings">
            <p>Ratings :</p>
            <p>{movies.vote_average}</p>
          </span>
          <span>
            <button className="banner__btn">
              <BsFillPlayFill />
              <p>Play</p>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
