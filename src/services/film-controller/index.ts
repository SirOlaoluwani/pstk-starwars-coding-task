/* eslint-disable react-hooks/rules-of-hooks */
import {useAPIFetch, responseHandler} from "../api-service";
import { APIRoutes } from "../../routes/routes.api";

export default function FilmController() {
  this.endpoint = APIRoutes.filmAPI;
  this.method = "get";

  this.getFilms = () => {
    return useAPIFetch({method: this.method, endpoint: this.endpoint}).then(responseHandler);
  }

  this.getFilm = (id: string) => {
      this.endpoint = `${this.endpoint}/${id}`;
      return useAPIFetch({method: this.method, endpoint: this.endpoint}).then(responseHandler);
  };
}