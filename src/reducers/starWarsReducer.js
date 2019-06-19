/* [x] we need our action types here*/
import { FETCHING, SUCCESS, FAILURE } from '../actions';

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // [x] Array characters, 
  // [x] Boolean fetching, 
  // [x] null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // [x] Fill me in with the important reducers
    // [x] action types should be FETCHING, SUCCESS and FAILURE
    // [x] your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        error: '',
        fetching: true
      };
    
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload
      };

    case FAILURE:
      return {
        ...state, 
        fetching: false,
        error: `${action.payload}`
      };
    
      default:
      return state;
  }
};