import React, { Suspense, lazy } from "react";
import { HashRouter, Route } from "react-router-dom";
import { loadingUI } from "../containers/default-layouts/default-layouts";

const DefaultLayout = lazy(() =>
  import("../containers/default-layouts")
);

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loadingUI()}>
        <Route path="/" name="Home" component={DefaultLayout} />
      </Suspense>
    </HashRouter>
  );
}

export default App;
