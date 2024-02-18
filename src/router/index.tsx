import { RouterConfig } from "./config";
import { Home, Layout, Login } from "../pages";
import { Switch, Route } from "react-router-dom";

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

export default () => (
  <Switch>
    <Layout authorized={authorized}>
      {!authorized && (
        <>
          <DynamicRouter exact path={RouterConfig.home.path} component={Home} />
          <DynamicRouter
            exact
            path={RouterConfig.login.path}
            component={Login}
          />
        </>
      )}
    </Layout>
  </Switch>
);
