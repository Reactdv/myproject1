import React from "react";
import "./anime.css";
import axios from "axios";

const Anime = () => {
  const [anime, setAnime] = React.useState([]);
  console.log(anime);

  React.useEffect(() => {
    const options = {
      method: "GET",
      url: "https://anime-db.p.rapidapi.com/anime",
      params: {
        page: "1",
        size: "10",
        search: "Fullmetal",
        genres: "Fantasy,Drama",
        sortBy: "ranking",
        sortOrder: "asc",
      },
      headers: {
        "X-RapidAPI-Key": "00903c5fe4msh8df502acfd110eap1a2efdjsn5038f9b72fa1",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    const fetchAnime = async () => {
      await axios
        .request(options)
        .then(function (response) {
        return  setAnime(
            response.data.data[
              Math.floor(Math.random() * response.data.data.length - 1)
            ]
          );
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    fetchAnime();
  }, []);

  return (
    <div>
      <div className="featured__anime">
        <img className='featured__anime-img' src={anime.image}  alt="" />
      </div>
    </div>
  );
};

export default Anime;
