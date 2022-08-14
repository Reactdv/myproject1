import { combineReducers } from "redux";
import movies,{ auth,bannerMovieId } from "./reducers";


export default combineReducers({
  movies,
  auth,
  bannerMovieId
});
