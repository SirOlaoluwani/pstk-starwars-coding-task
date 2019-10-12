import React, { Suspense, lazy } from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import { clientRoutes } from "../../routes/routes.client";
import { useNetworkStatus } from "the-platform";

const { Content } = Layout;
const Header = lazy(() => import("./default-header"));

export const loadingUI = () => (
  <div className="text-light-grey m-10">Loading...</div>
);

export default function DefaultLayout() {
  const { isOnline } = useNetworkStatus();
  return (
    <Layout className="bg-black-light">
      <Suspense fallback={loadingUI()}>
        <Header />
      </Suspense>
      <Content className="content-container">
        <Suspense fallback={loadingUI()}>
          {!isOnline ? (
            <section className="bg-yellow text-center p-3 font-bold uppercase">
              Your internet connection is offline!
            </section>
          ) : null}
          <Switch>
            {clientRoutes.map((route, index) => {
              return route.component ? (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
                />
              ) : null;
            })}
          </Switch>
        </Suspense>
      </Content>
    </Layout>
  );
}
