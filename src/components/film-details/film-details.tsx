import React, { useEffect, useState, Suspense, lazy } from "react";
import { loadingUI } from "../../containers/default-layouts/default-layouts";
import { useParams } from "react-router-dom";
import FilmController from "../../services/film-controller";

const OpeningCrawl = lazy(() => import("./crawl"));
const Characters = lazy(() => import("./characters"));

const DetailsView = props => {

  return props.film ? (
    <>
      <div className="mb-6">
        <h3>{props.film.title}</h3>

        <div className="movie-info">
          <div>
            <h5>Release Date</h5>
            <span className="text-xs font-bold text-light-grey">
              {props.film.release_date}
            </span>
          </div>
          <div>
            <h5>Director</h5>
            <span className="text-xs font-bold text-light-grey">
              {props.film.director}
            </span>
          </div>
          <div>
            <h5>Producer</h5>
            <span className="text-xs font-bold text-light-grey">
              {props.film.producer}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex-col">
        <Suspense fallback={loadingUI()}>
          <OpeningCrawl film={props.film} />
          <Characters characters={props.film.characters} />
        </Suspense>
      </div>
      <div className="w-1/3 pl-8 pr-6 mt-8"></div>
    </>
  ) : null;
};

function FilmDetails(props) {
  let { slug } = useParams();

  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await new FilmController().getFilm(slug);
      setLoading(false);
      if (res && res.data) setFilm(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full bg-black p-6">
      {loading ? loadingUI() : <DetailsView film={film} />}
    </div>
  );
}

export default FilmDetails;
