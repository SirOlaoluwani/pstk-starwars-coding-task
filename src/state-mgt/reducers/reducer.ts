import { Constants } from './../constants/action-types';

const initialState = {
  films: [],
  selectedFilm: null,
  filmDetails: null,
  film: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload
      });

    case Constants.SELECT_FILM:
      return Object.assign({}, state, {
        selectedFilm: action.payload
      });

    case Constants.GET_FILM_DETAILS:
      return Object.assign({}, state, {
        filmDetails: action.payload
      });
    default:
      break;
  }
  return state;
}

export default rootReducer;
