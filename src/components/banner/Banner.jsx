import React from "react";
import "./banner.css";
import axios from "axios";
import ReactPlayer from "react-player";
import { BsFillPlayFill } from "react-icons/bs";
const baseUrl = "https://api.themoviedb.org/3/movie/";
const imgPath = "https://image.tmdb.org/t/p/original";

const Banner = ({ movieStatus, category }) => {
  const [movies, setMovies] = React.useState([]);
  const [trailer, setTrailer] = React.useState([]);
  const [movieId, setMovieId] = React.useState(0);
  const [genresId, setGenresId] = React.useState([]);
  const [genre, setGenre] = React.useState();
  const [isTrailerPlay, setIsTrailerPlay] = React.useState(false);
  // const filteredMovies = () => {
  //   const a = Object.entries(movies).filter(
  //     (movie) => movie.original_language === "ja"
  //   );
  //   return a;
  // };

  // console.log(filteredMovies());
  console.log(movieId);
  console.log(trailer?.key);
  console.log(genre);
  console.log(movies);
  console.log(category);

  React.useEffect(() => {
    setGenresId(movies.genre_ids);
  }, [movies]);
  React.useEffect(() => {
    setMovieId(movies.id);
  }, [movies]);
  React.useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      const fetchData = async () => {
        await axios
          .get(
            `https://api.themoviedb.org/3/${category}/${movieStatus}?api_key=6db570f91afb8be515fb7e766b64e53c&page=3`
          )
          .then((res) => {
            setMovies(
              res.data.results[
                Math.floor(Math.random() * res.data.results.length - 1)
              ]
            );
          })
          .catch((e) => console(e));

        return setMovies;
      };
      fetchData();
    }
    return () => (subscribe = false);
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${category}/${movieId}/videos?api_key=6db570f91afb8be515fb7e766b64e53c&append_to_response=videos`
      )
      .then((res) => {
        setTrailer(res.data.results[2]);
      })
      .catch((e) => console.log(e));
  }, [movieId]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${category}/list?api_key=6db570f91afb8be515fb7e766b64e53c&language=en-US`
      )
      .then((res) => {
        setGenre(res.data.genres.find((genre) => genre.id == genresId[0]));
      })
      .catch((e) => console.log(e));
  }, [movieId]);

  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (
        isTrailerPlay &&
        videoRef.current &&
        !videoRef.current.contains(e.target)
      ) {
        setIsTrailerPlay(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickOutside);

    return () =>
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickOutside);
  }, [isTrailerPlay]);

  const renderTrailer = () => {
    if (isTrailerPlay)
      return (
        <div className="player__wrapper banner__trailer" ref={videoRef}>
          <ReactPlayer
            controls
            playing={true}
            loop={true}
            className="trailer__video"
            url={`https://www.youtube.com/watch?v=${trailer?.key}`}
          />
        </div>
      );
  };
  return (
    <div className="banner__container">
      {renderTrailer()}
      <div className="banner-content">
        <img
          className="banner-img"
          src={`${imgPath}${movies?.backdrop_path || movies?.poster_path}`}
          alt=""
        />
        <div>
          <h1>
            {movies?.title || movies?.original_title || movies?.original_name}
          </h1>
          {/* <p>{truncate(movies?.overview, 90)}</p> */}
          <p>{movies?.overview}</p>
          <span className="banner-ratings">
            <p>Ratings :</p>
            <p>{movies?.vote_average}</p>
          </span>
          <h5>{genre?.name}</h5>
          <span>
            <button
              onClick={() => setIsTrailerPlay(true)}
              className="banner__btn"
            >
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
