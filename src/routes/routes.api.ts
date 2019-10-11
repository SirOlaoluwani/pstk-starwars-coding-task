export const CORsProxy = "https://cors-anywhere.herokuapp.com/";
export const BaseRoute = "https://swapi.co/api/";
export const BaseWithProxy = CORsProxy + BaseRoute;

export const APIRoutes = {
  filmAPI: BaseWithProxy + "films",
  peopleAPI: BaseWithProxy + "people"
};
