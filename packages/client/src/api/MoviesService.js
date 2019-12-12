import axios from 'axios';
const baseUrl = `http://localhost:3100/movies`;

const axiosOptions = {
    timeout: 10000
};

const getAxiosAuthenticatedEnpointOptions = () => ({
    ...axiosOptions
});

export function getMoviesList(query) {
    return axios.get( `${baseUrl}${query}`, getAxiosAuthenticatedEnpointOptions() )
        .then( response => response.data )
};