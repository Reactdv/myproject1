import React from "react";
import axios from "axios";
import "./carousel.css";
import Youtube from "react-youtube";

const imgPath = "https://image.tmdb.org/t/p/original";

const Carousel = ({ movieStatus, page }) => {
  const [carousel, setCarousel] = React.useState([]);

  React.useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      const fetchData = async () => {
        return await axios
          .get(
            `https://api.themoviedb.org/3/movie/${movieStatus}?api_key=6db570f91afb8be515fb7e766b64e53c&page={page}`
          )

          .then((res) => setCarousel(Object.values(res.data.results)))
          .catch((e) => console.log(e));
      };
      fetchData();
    }

    return () => (subscribe = false);
  }, []);

  return (
    <div className="carousel__container">
      <h1 className="carousel-title">{movieStatus.replace("_", " ")}</h1>
      <div className="carousel-content">
        {carousel.map((movie, index) => (
          <>
            <img
              className="carousel__img"
              key={index}
              src={`${imgPath}${movie?.poster_path}`}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
