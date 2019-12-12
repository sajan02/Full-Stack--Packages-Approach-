import { MOVIE_ANALYSIS, MOVIE_ANALYSIS_FAILURE, MOVIE_ANALYSIS_SUCCESS } from '../action/constants';

export const movieAnalysisDataReducer = ( curState = 
    {   movies: {}, isLoading: false, error: null }, action ) => {
    let newState;
    switch( action.type ) {
        case MOVIE_ANALYSIS:
            newState = { ...curState, error: null, isLoading: MOVIE_ANALYSIS };
            break;
        case MOVIE_ANALYSIS_SUCCESS:
            newState = { ...curState, isLoading: MOVIE_ANALYSIS_SUCCESS, movies: action.payload.movies };
            break;
        case MOVIE_ANALYSIS_FAILURE:
            newState = { ...curState, isLoading: MOVIE_ANALYSIS_FAILURE, error: action.payload.error };
            break;
        default:
            newState = curState;
    }

    return newState;
}