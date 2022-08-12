import * as api from "../../apis";
import { FETCH_MOVIES,NOW_PLAYING_MOVIE,ISAUTH } from "../actionTypes/actionTypes";

export const getMovies = (movieStatus) => 
  async (dispatch) => {
    try {
      const { data } = await api.fetchMovies(movieStatus);
    
      dispatch({
        type: FETCH_MOVIES,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getNowPlaying = (movieStatus) => 
  async (dispatch) => {
    try {
      const { data } = await api.fetchNowPlaying(movieStatus);
    
      dispatch({
        type: NOW_PLAYING_MOVIE,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };


  export const isAuth =(boolean) => (
    {
      type: ISAUTH,
       payload: boolean
    }
  )

