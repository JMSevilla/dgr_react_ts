import { RouterConfig } from "./config";
import { Home } from '../pages'
import { Switch, Route } from 'react-router-dom'

type DynamicRouterProps = {
    component: any
    exact: boolean
    path: string
}

const DynamicRouter = ({ component: Component, ...rest }: DynamicRouterProps) => {
    return (
        <Route 
            {...rest}
            render={(props) => (
                <Component {...props} />
            )}
        />
    )
}

export default () => (
    <Switch>
        <DynamicRouter exact path={RouterConfig.home.path} component={Home}  />
    </Switch>
)