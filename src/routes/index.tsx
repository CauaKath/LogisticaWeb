import React from "react";
import { Switch } from "react-router";

import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Cadastro from "../pages/Cadastro";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />

        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/cadastro" component={Cadastro} isPrivate />
    </Switch>
);

export default Routes;