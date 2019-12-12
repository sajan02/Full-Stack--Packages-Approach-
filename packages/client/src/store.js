import { createStore, combineReducers, applyMiddleware } from 'redux';
import { movieListReducer } from './reducer/LeftTableReducer';
import { movieAnalysiedReducer } from './reducer/RightTableReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { movieAnalysisDataReducer } from './reducer/BarChart';

// create store
export const store = createStore(
    combineReducers({
        movieList : movieListReducer,
        analysiedMovieList : movieAnalysiedReducer,
        movieAnalysisDataReducer : movieAnalysisDataReducer
    }),
    {
        analysiedMovieList   :   {   movies: {}, isLoading: false, error: null },
        movieList   :   {   movies: {}, isLoading: false, error: null },
        movieAnalysisDataReducer : { movies: {}, isLoading: false, error: null }
    },
    composeWithDevTools( applyMiddleware( logger, thunk ) )
);