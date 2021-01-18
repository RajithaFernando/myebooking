import React from "react";
import { Redirect, Switch } from "react-router-dom";
import RouteFunction from "./RouteFunction";

import SignIn from "../pages/SignIn";

import Dashboard from "../pages/Main";
import Main from "../pages/Main";


import RegisterBusiness from "../pages/LoginRegistor/RegisterBusiness"
import RegisterBusinessAccount from "../pages/LoginRegistor/RegisterBuisnessAccount";
import LoginUser from "../pages/LoginRegistor/LoginUser";
import RegisterUser from "../pages/LoginRegistor/RegisterUser"
import AddOpenHours from "../pages/Business/AddOpenHours"
import AddEmployees from "../pages/Business/AddEmployees"

export default function Routes() {
    return (
        <Switch>
            <RouteFunction path="/" exact component={Main} />
            <RouteFunction path="/Home" exact component={Main} />
            {/* <RouteFunction path="/register" component={SignUp} /> */}


            <RouteFunction path="/RegisterBuisnessAccount" component={RegisterBusinessAccount} />
            <RouteFunction path="/RegisterBuisness" component={RegisterBusiness} />
            <RouteFunction path="/dashboard" component={Dashboard} isPrivate />
            <RouteFunction path="/biz/configure/open-hours" component={AddOpenHours} />
            <RouteFunction path="/biz/configure/add-employees" component={AddEmployees} />
            
            <RouteFunction path="/Register" component={RegisterUser} />
            <RouteFunction path="/Login" component={LoginUser} />

            <Redirect to="/RegisterBuisnessAccount" />
            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <RouteFunction component={SignIn} />
        </Switch>
    );
}
