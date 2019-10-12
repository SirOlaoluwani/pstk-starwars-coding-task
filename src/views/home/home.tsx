import React, { Suspense, lazy } from "react";
import { loadingUI } from "../../containers/default-layouts/default-layouts";
import ErrorBoundary from "../../components/error-boundaries";

const Films = lazy(() => import("../../components/films"));

function Home() {
  return (
    <div className="w-full h-screen flex justify-center">
      <ErrorBoundary>
        <Suspense fallback={loadingUI()}>
          <Films />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Home;
