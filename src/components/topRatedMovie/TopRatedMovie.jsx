import React from "react";
import "./topRatedMovie.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getNowPlaying } from "../../utils/redux/actions/actions";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const imgPath = "https://image.tmdb.org/t/p/original";

const TopRatedMovie = () => {
  const movie = getNowPlaying("top_rated");
  const [slider, setSlider] = React.useState(0);
  const [isSlide, setIsSlide] = React.useState(false);
  const [topRatedMovie, setTopRatedMovie] = React.useState([]);

  console.log(movie);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let subscribe = true;
    console.log(subscribe);

    if (subscribe) {
      const getData = async () => {
        return await axios
          .get(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=6db570f91afb8be515fb7e766b64e53c"
          )
          .then((res) => setTopRatedMovie(Object.values(res.data.results)));
      };
      getData();
    }

    return () => (subscribe = false);
  }, [dispatch]);

  if (topRatedMovie === undefined) return <h1>no data</h1>;
  console.log(isSlide, slider, topRatedMovie.length - 1);

  const chevronLeft = () => {
    setIsSlide(true);

    setSlider((state) => state - 1);

    if (slider <= 0) {
      setSlider((state) => (state = topRatedMovie.length - 6));
    }
  };

  const chevronRight = () => {
    setIsSlide(false);

    setSlider((state) => state + 1);

    if (slider >= topRatedMovie.length - 5) {
      setSlider(0);
    }
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <h2 style={{ color: "white", marginLeft: "4rem" }}> Top Rated</h2>
      <div className="popularMovie__container">
        <div className="popularMovie-left__container">
          <FaChevronLeft
            className="popularMovie-left__icon"
            onClick={chevronLeft}
          />
        </div>
        <div className="popularMovie-center__container">
          {topRatedMovie.map((item, index) => (
            <div
              style={{
                transform: `translate(-${slider * 100}%)`,
              }}
              key={index}
              className="popularMovie-content"
            >
              <img src={`${imgPath}${item?.poster_path}`} alt="img" />
            </div>
          ))}
        </div>
        <div className="popularMovie-right__container">
          <FaChevronRight
            className="popularMovie-right__icon"
            onClick={chevronRight}
          />
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovie;
