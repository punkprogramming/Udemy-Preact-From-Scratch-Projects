import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "../screens/Home";
import About from "../screens/About";
import Merch from "../screens/Merch";
import Tour from "../screens/Tour";
import Error404 from "../screens/Error404";

const MyRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={(props) => {
                    return <Home {...props} />
                }} />
                <Route exact path="/about" render={(props) => {
                    return <About {...props} />
                }} />
                <Route exact path="/store/merch" render={(props) => {
                    return <Merch {...props} />
                }} />
                <Route exact path="/tour/dates" render={(props) => {
                    return <Tour {...props} />
                }} />
                <Route path="/*" render={(props) => {
                    return <Error404 {...props} />
                }} />
            </Switch>
        </Router>
    )
}

export default MyRoutes;