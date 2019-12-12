import { MOVIE_LEFT, MOVIE_LEFT_SUCCESS,  MOVIE_LEFT_FAILURE } from '../action/constants';

export const movieListReducer = ( curState = 
    {   movies: {}, isLoading: false, error: null }, action ) => {
    let newState;
    switch( action.type ) {
        case MOVIE_LEFT:
            newState = { ...curState, error: null, isLoading: MOVIE_LEFT };
            break;
        case MOVIE_LEFT_SUCCESS:
            newState = { ...curState, isLoading: MOVIE_LEFT_SUCCESS, movies: action.payload.movies };
            break;
        case MOVIE_LEFT_FAILURE:
            newState = { ...curState, isLoading: MOVIE_LEFT_FAILURE, error: action.payload.error };
            break;
        default:
            newState = curState;
    }

    return newState;
}