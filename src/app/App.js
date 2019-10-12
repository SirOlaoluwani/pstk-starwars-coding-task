import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { loadingUI } from "../containers/default-layouts/default-layouts";

const DefaultLayout = lazy(() =>
  import("../containers/default-layouts")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loadingUI()}>
        <Route path="/" name="Home" component={DefaultLayout} />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
