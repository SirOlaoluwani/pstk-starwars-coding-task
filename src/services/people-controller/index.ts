/* eslint-disable react-hooks/rules-of-hooks */
import { useAPIFetch, responseHandler } from "../api-service";
import { APIRoutes } from "../../routes/routes.api";

export default function PeopleController() {
  this.endpoint = APIRoutes.filmAPI;
  this.method = "get";

  this.getPeople = (peopleURLS: string[]) => {
    return Promise.all(
      peopleURLS.map(url => {
        return useAPIFetch({ method: this.method, endpoint: url }).then(
          response =>
            new Promise(resolve => {
              resolve(response.data.data);
            })
        );
      })
    );
  };

  this.getPerson = (id: string) => {
    return useAPIFetch({
      method: this.method,
      endpoint: `${this.endpoint}/${id}`
    }).then(responseHandler);
  };
}
