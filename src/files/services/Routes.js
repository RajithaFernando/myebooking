import React from "react";
import { Redirect, Switch } from "react-router-dom";
import RouteFunction from "./RouteFunction";

import SignIn from "../pages/SignIn";

import Dashboard from "../pages/Main";
import Main from "../pages/Main";


import RegisterBuisness from "../pages/LoginRegistor/RegisterBuisness"
import RegisterBuisnessAccount from "../pages/LoginRegistor/RegisterBuisnessAccount";
import LoginUser from "../pages/LoginRegistor/LoginUser";
import RegisterUser from "../pages/LoginRegistor/RegisterUser"

export default function Routes() {
    return (
        <Switch>
            <RouteFunction path="/" exact component={Main} />
            <RouteFunction path="/Home" exact component={Main} />
            {/* <RouteFunction path="/register" component={SignUp} /> */}

            
            <RouteFunction path="/RegisterBuisnessAccount" component={RegisterBuisnessAccount} />
            <RouteFunction path="/RegisterBuisness" component={RegisterBuisness} />
            <RouteFunction path="/dashboard" component={Dashboard} isPrivate />
            

            <RouteFunction path="/Register" component={RegisterUser} />
            <RouteFunction path="/Login" component={LoginUser} />
            
            <Redirect  to="/RegisterBuisnessAccount" exact/>
            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            {/* <RouteFunction component={SignIn} /> */}
        </Switch>
    );
}
