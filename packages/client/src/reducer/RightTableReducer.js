import { MOVIE_RIGHT, MOVIE_RIGHT_FAILURE,  MOVIE_RIGHT_SUCCESS } from '../action/constants';

export const movieAnalysiedReducer = ( curState = 
    {   movies: {}, isLoading: false, error: null }, action ) => {
    let newState;
    switch( action.type ) {
        case MOVIE_RIGHT:
            newState = { ...curState, isLoading: MOVIE_RIGHT };
            break;
        case MOVIE_RIGHT_SUCCESS:
            newState = { ...curState, isLoading: MOVIE_RIGHT_SUCCESS, movies: action.payload.movies };
            break;
        case MOVIE_RIGHT_FAILURE:
            newState = { ...curState, isLoading: MOVIE_RIGHT_FAILURE, error: action.payload.error };
            break;
        default:
            newState = curState;
    }

    return newState;
}