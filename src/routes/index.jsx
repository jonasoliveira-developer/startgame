import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import Payment from "../pages/Payment";

export const Routes = () => {
    return (
        <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Payment} path="/payment/:id" />
        </Switch>
    )
}