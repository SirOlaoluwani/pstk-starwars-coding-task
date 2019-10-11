import React, { Suspense, lazy } from "react";
import { loadingUI } from "../../containers/default-layouts/default-layouts";
import { romanize } from "../../lib/romanize";
const LogoIcon = lazy(() => import("../../assets/images/icons/Logo"));

export default function Crawl(props) {
  const {film} = props;
  return (
      <div className="w-full mb-8">
        <h5 className="mb-4">Opening Crawl</h5>
        <div className="bg-grey h-56 border border-yellow opening-crawl-container p-2">
          <div className="fade"></div>
          <div className="star-wars">
            <div className="crawl">
              <div className="title">
                <Suspense fallback={loadingUI()}>
                  <h1><LogoIcon className="m-auto" width="500px" height="300px" /></h1>
                </Suspense>
                <p>Episode { romanize(film.episode_id )}</p>
                <h1>{ film.title }</h1>
              </div>
              <p>
                { film.opening_crawl }
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
