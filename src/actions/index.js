// [x] we'll need axios
import axios from 'axios';

// [x] we'll need to create 3 different action types here.
// [x] one for fetching, one for success and one for failure
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// [X] our action creator will be a function that returns a function
// [X] the url to fetch characters from is `https://swapi.co/api/people/`
// [X] remember that now we have controll over our thunk-based action creator

export const getCharacters = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get('https://swapi.co/api/people/')
        .then(res => {
            dispatch({ type: SUCCESS, payload: res.data.results });
        })
        .catch(err => dispatch({ type: FAILURE, error: err }));
};