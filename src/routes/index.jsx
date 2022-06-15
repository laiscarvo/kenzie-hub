import { Route, Switch } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Signup from '../pages/Signup'
import Login from "../pages/Login"

const Routes = () => {
    return (
        <Switch>
            <Route path='/Dashboard'>
                <Dashboard/>
            </Route>
            <Route exact path='/'>
                <Login/>
            </Route>
            <Route path='/Signup'>
                <Signup/>
            </Route>
        </Switch>
    )
}

export default Routes