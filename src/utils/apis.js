import axios from "axios";

const rapidApi = (q) => {
  const options = {
    method: "GET",
    url: "https://online-movie-database.p.rapidapi.com/auto-complete",
    params: { q:q },
    headers: {
      "X-RapidAPI-Key": "6e21db1665msh503d1c715335f99p1cb9a6jsnd8f1a257869c",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  return options;
};

export const fetchMovies = (q) => axios.request(rapidApi(q));
