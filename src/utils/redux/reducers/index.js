import { combineReducers } from "redux";
import movies,{ auth } from "./reducers";


export default combineReducers({
  movies,
  auth
});
