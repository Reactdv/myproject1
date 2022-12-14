import { fetchNowPlaying } from "../../apis";
import {
  FETCH_MOVIES,
  NOW_PLAYING_MOVIE,
  ISAUTH,
  MOVIEID,
} from "../actionTypes/actionTypes";

const reducer = (movies = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    case fetchNowPlaying:
      return action.payload;
    default:
      return movies;
  }
};

export default reducer;

export const auth = (isAuth = false, action) => {
  switch (action.type) {
    case ISAUTH:
      return action.payload;
    default:
      return auth;
  }
};

export const bannerMovieId = (movieId = "0", action) => {
  switch (action.type) {
    case MOVIEID:
      return action.payload;
    default:
      return movieId;
  }
};
