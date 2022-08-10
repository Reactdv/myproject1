import React from "react";
import "./popularMovie.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../utils/redux/actions/actions";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PopularMovie = () => {
  const movie = getMovies("spiderman");
  const [slider, setSlider] = React.useState(0);
  const [isSlide, setIsSlide] = React.useState(false);
  const popularMovies = useSelector((state) => state.movies.d);

  console.log(isSlide);
  const dispatch = useDispatch();
  const ref = React.useRef();
  console.log(popularMovies);

  React.useEffect(() => {
    dispatch(movie);
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
  };

  return (
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
            ref={ref}
          >
            <img src={item?.i?.imageUrl} alt="img" />
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
  );
};

export default PopularMovie;
