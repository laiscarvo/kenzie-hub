import { Route, Switch } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Signup from '../pages/Signup'
import Login from "../pages/Login"

import { useState, useEffect } from "react"

const Routes = () => {

    const [ auth, setAuth ] =  useState(false);

    useEffect(() => {
        const token = localStorage.getItem("@KenzieHub:token");

        if (token) {
            return setAuth(true);
        }
    }, []);

    return (
        <Switch>
            <Route exact path='/dashboard'>
                <Dashboard auth={auth} setAuth={setAuth}/>
            </Route>
            <Route exact path='/'>
                <Login auth={auth} setAuth={setAuth}/>
            </Route>
            <Route exact path='/signup'>
                <Signup/>
            </Route>
            
        </Switch>
    )
}

export default Routes