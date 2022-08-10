import axios from "axios";

const rapidApi = (q) => {
  const options = {
    method: "GET",
    url: "https://online-movie-database.p.rapidapi.com/auto-complete",
    params: { q: q },
    headers: {
      "X-RapidAPI-Key": "81ee9ae9camshbedb6efba891bc1p1ecb2ajsn54d6e5ef148b",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  return options;
};

export const fetchMovies = (q) => axios.request(rapidApi(q));
