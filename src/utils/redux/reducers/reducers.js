import { fetchNowPlaying } from '../../apis'
import { FETCH_MOVIES,NOW_PLAYING_MOVIE } from '../actionTypes/actionTypes'


const reducer =(movies = [] ,action)=>{
    switch(action.type){
        case FETCH_MOVIES:
            return action.payload      
        case fetchNowPlaying:
            return action.payload    
            default:
                return movies
    }
}


export default reducer