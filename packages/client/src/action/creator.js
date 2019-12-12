import * as Constants from './constants';
import { getMoviesList } from '../api/MoviesService';
import { identifier } from '@babel/types';

function getMovies() {
    return {
        type: Constants.MOVIE_LEFT
    }
}

function getMoviesSuccess( movies ) {
    return {
        type: Constants.MOVIE_LEFT_SUCCESS,
        payload: {
            movies: movies
        }
    }
}

function getMoviesFailure( error ) {
    return {
        type: Constants.MOVIE_LEFT_FAILURE,
        payload: {
            error: error
        }
    };
}

function getMoviesThunk(query) {
    console.log("Calling MovieThunk 1");
    
    return function( dispatch ) {
        dispatch( getMovies() );

        getMoviesList(query)
            .then( movies => dispatch( getMoviesSuccess( movies ) ) )
            .catch( error => dispatch( getMoviesFailure( error ) ) );
    }
}

function getMovieForAnalysis() {
    return {
        type: Constants.MOVIE_ANALYSIS
    }
}

function getMovieForAnalysisSuccess( movies ) {
    return {
        type: Constants.MOVIE_ANALYSIS_SUCCESS,
        payload: {
            movies: movies
        }
    }
}

function getMovieForAnalysisFailure( error ) {
    return {
        type: Constants.MOVIE_ANALYSIS_FAILURE,
        payload: {
            error: error
        }
    };
}

function setDataToCompute(data){
    var unique = [];
    var uniqueGenre = [];
    var genreCount = [];
    var updateGenreCount = [];
    data.response.forEach(function (content) {
        if(!unique.includes(Number(content.Rating))){
            unique.push(Number(content.Rating))
        }
        content.Genre.forEach(genreType=>{
            if(!uniqueGenre.includes(genreType) && genreType!==''){
                uniqueGenre.push(genreType)
                genreCount.push({
                    [genreType] : 1
                })
            }
            else if(genreType!==''){
                let index = uniqueGenre.indexOf(genreType);
                genreCount[index][genreType] =  genreCount[index][genreType]+1;
            }
        })
    })
    
    genreCount.map(el=>{
        el[Object.keys(el)[0]] = (el[Object.keys(el)[0]]/data.totalCount)*100
        updateGenreCount.push({
            y : el[Object.keys(el)[0]],
            label : Object.keys(el)[0]
        })
    })
    return {...data,ratings : unique, uniqueGenre : uniqueGenre, genreCount : updateGenreCount};
}
function setDataToAnalyseThunk(query){
    console.log("Calling MovieThunk 1");
    
    return function( dispatch ) {
        dispatch( getMovieForAnalysis() );

        getMoviesList(query)
            .then( movies => {
                let resp = setDataToCompute(movies)
                dispatch( getMovieForAnalysisSuccess( resp ) )} )
            .catch( error => dispatch( getMovieForAnalysisFailure( error ) ) );
    }
}

function getAnalysiedMovies() {
    return {
        type: Constants.MOVIE_RIGHT
    }
}

function getAnalysiedMoviesSuccess( movies ) {
    return {
        type: Constants.MOVIE_RIGHT_SUCCESS,
        payload: {
            movies: movies
        }
    }
}

function getAnalysiedMoviesFailure( error ) {
    return {
        type: Constants.MOVIE_RIGHT_FAILURE,
        payload: {
            error: error
        }
    };
}

function getAnalysiedMoviesThunk(query) {
    return function( dispatch ) {
        dispatch( getAnalysiedMovies() );

        getMoviesList(query)
            .then( movies => dispatch( getAnalysiedMoviesSuccess( movies ) ) )
            .catch( error => dispatch( getAnalysiedMoviesFailure( error ) ) );
    }
}

export {
    getMoviesThunk,
    getAnalysiedMoviesThunk,
    setDataToAnalyseThunk
}
