import * as api from "../../apis";

import { FETCH_MOVIES } from "../actionTypes/actionTypes";

export const getMovies = (q) => 
  async (dispatch) => {
    try {
      const { data } = await api.fetchMovies(q);
       console.log(data)
      dispatch({
        type: FETCH_MOVIES,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };

