import { Constants } from "../constants/action-types";

export function loadFilms(payload: object) {
  return { type: Constants.LOAD_FILMS, payload };
}

export function selectFilm(payload:object) {
  return { type: Constants.SELECT_FILM, payload };
}

export function getFilmDetails(payload:object) {
  return { type: Constants.GET_FILM_DETAILS };
}