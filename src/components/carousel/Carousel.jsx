import React from "react";
import axios from "axios";
import "./carousel.css";
import jikanjs from "jikanjs";
import ReactPlayer from "react-player";

const imgPath = "https://image.tmdb.org/t/p/original";

const Carousel = ({ movieStatus, category, page, isAnime }) => {
  const [carousel, setCarousel] = React.useState([]);
  const [isFiltered, setIsFiltered] = React.useState(false);
  const [animeData, setAnimeData] = React.useState([]);
  const filteredCarousel = carousel.filter(
    (item) => item.original_language === "ja"
  );
  console.log(animeData);
  const fetchAnimeData = async () => {
    return await axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((res) => setAnimeData(res.data.data))
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    fetchAnimeData();
  }, []);

  const a = () => {
    return animeData.map((item) => item);
  };

  React.useEffect(() => {
    let subscribe = true;

    if (subscribe) {
      const fetchData = async () => {
        return await axios
          .get(
            `https://api.themoviedb.org/3/${category}/${movieStatus}?api_key=6db570f91afb8be515fb7e766b64e53c&page={page}`
          )

          .then((res) => setCarousel(Object.values(res.data.results)))
          .catch((e) => console.log(e));
      };
      fetchData();
    }

    return () => (subscribe = false);
  }, []);

  const renderCarousel = () => {
    return carousel.map((movie, index) => (
      <>
        <img
          className="carousel__img"
          key={index}
          src={`${imgPath}${movie?.poster_path}`}
        />
      </>
    ));
  };

  const renderAnimeCarousel = () => {
    return animeData.map((item) => (
      <>
        <img className="carousel__img" src={item?.images.jpg.large_image_url} />
      </>
    ));
  };
  const renderPage = () => {
    if (isAnime) {
      return renderAnimeCarousel();
    } else {
      return renderCarousel();
    }
  };

  console.log(renderPage());
  return (
    <div className="carousel__container">
      <h1 className="carousel-title">{movieStatus.replace("_", " ")}</h1>
      <div className="carousel-content">{renderPage()}</div>
    </div>
  );
};

export default Carousel;
