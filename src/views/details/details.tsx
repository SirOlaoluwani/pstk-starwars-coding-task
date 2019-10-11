import React, { Suspense, lazy } from "react";
import { loadingUI } from "../../containers/default-layouts/default-layouts";

const FilmDetails = lazy(() => import("../../components/film-details"));

function MovieDetails(props) {
  return (
    <div className="w-full min-h-full flex justify-center">
      <Suspense fallback={loadingUI()}>
        <FilmDetails />
      </Suspense>
    </div>
  );
}

export default MovieDetails;
