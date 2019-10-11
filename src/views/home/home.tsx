import React, { Suspense, lazy } from "react";
import { loadingUI } from "../../containers/default-layouts/default-layouts";

const Films = lazy(() => import("../../components/films"));

function Home(props) {
  return (
    <div className="w-full min-h-full flex justify-center">
      <Suspense fallback={loadingUI()}>
        <Films />
      </Suspense>
    </div>
  );
}

export default Home;
