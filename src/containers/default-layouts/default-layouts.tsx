import React, { Suspense, lazy } from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import { clientRoutes } from "../../routes/routes.client";

const { Content } = Layout;
const Header = lazy(() => import("./default-header"));

export const loadingUI = () => <div className="text-light-grey m-10">Loading...</div>;

export default function DefaultLayout() {

  return (
    <Layout className="bg-black-light">
      <Suspense fallback={loadingUI()}>
        <Header />
      </Suspense>
      <Content className="h-screen pt-20 pl-10 pr-10 pb-20">
        <Suspense fallback={loadingUI()}>
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
      {/* <Suspense fallback={loadingUI()}>
        <Footer />
      </Suspense> */}
    </Layout>
  );
}
