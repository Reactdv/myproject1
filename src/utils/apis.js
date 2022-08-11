import axios from "axios";

// const rapidApi = (q) => {
//   const options = {
//     method: "GET",
//     url: "https://online-movie-database.p.rapidapi.com/auto-complete",
//     params: { q: q },
//     headers: {
//       "X-RapidAPI-Key": "81ee9ae9camshbedb6efba891bc1p1ecb2ajsn54d6e5ef148b",
//       "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
//     },
//   };
//   return options;
// };

// export const fetchMovies = (q) => axios.request(rapidApi(q));

const API_KEY = "6db570f91afb8be515fb7e766b64e53c";

const tmdb_api =
  "https://api.themoviedb.org/3/movie/popular?api_key=6db570f91afb8be515fb7e766b64e53c";

export const fetchMovies = (movieStatus) =>
  axios.get(
    `    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=3
`
  );

export const fetchNowPlaying = (movieStatus) =>
  axios.get(
    `    https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1
`
  );
