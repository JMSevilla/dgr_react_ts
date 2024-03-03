import { RouterConfig } from "./config";
import { Home, Layout, Login } from "../pages";
import { Switch, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import store from "../core/redux/store";
import { Provider } from "react-redux";

type DynamicRouterProps = {
  component: any;
  exact: boolean;
  path: string;
};

const DynamicRouter = ({
  component: Component,
  ...rest
}: DynamicRouterProps) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const authorized = false;

const client = new QueryClient();

export default () => (
  <Switch>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Layout authorized={authorized}>
          {!authorized && (
            <>
              <DynamicRouter
                exact
                path={RouterConfig.home.path}
                component={Home}
              />
              <DynamicRouter
                exact
                path={RouterConfig.login.path}
                component={Login}
              />
            </>
          )}
        </Layout>
      </QueryClientProvider>
    </Provider>
  </Switch>
);
