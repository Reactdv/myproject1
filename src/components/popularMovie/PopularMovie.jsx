import React from "react";
import "./popularMovie.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../utils/redux/actions/actions";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const imgPath = "https://image.tmdb.org/t/p/original";

const PopularMovie = () => {
  const movie = getMovies("popular");
  const [slider, setSlider] = React.useState(0);
  const [isSlide, setIsSlide] = React.useState(false);
  const popularMovies = useSelector((state) => state.movies.results);

  console.log(movie);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let subscribe = true;
    console.log(subscribe);

    if (subscribe) {
      dispatch(movie);
    }

    return () => (subscribe = false);
  }, [dispatch]);

  if (popularMovies === undefined) return <h1>no data</h1>;
  console.log(isSlide, slider, popularMovies.length - 1);

  const chevronLeft = () => {
    setIsSlide(true);

    setSlider((state) => state - 1);

    if (slider <= 0) {
      setSlider((state) => (state = popularMovies.length - 6));
    }
  };

  const chevronRight = () => {
    setIsSlide(false);

    setSlider((state) => state + 1);

    if (slider >= popularMovies.length - 5) {
      setSlider(0);
    }
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <h2 style={{ color: "white", marginLeft: "4rem" }}> Popular</h2>
      <div className="popularMovie__container">
        <div className="popularMovie-left__container">
          <FaChevronLeft
            className="popularMovie-left__icon"
            onClick={chevronLeft}
          />
        </div>
        <div className="popularMovie-center__container">
          {popularMovies.map((item, index) => (
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

export default PopularMovie;
