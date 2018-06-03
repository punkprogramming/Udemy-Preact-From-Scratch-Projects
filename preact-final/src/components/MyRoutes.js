import {h} from "preact";
import {Router} from "preact-router";

import Home from "../screens/Home";
import About from "../screens/About";
import Merch from "../screens/Merch";
import Tour from "../screens/Tour";
import Error404 from "../screens/Error404";

const MyRoutes = () => {
    return (
        <Router>
            <Home path="/" />
            <About path="/about" />
            <Merch path="/store/merch" />
            <Tour path="/tour/dates" />
            <Error404 path="/:*" />
        </Router>
    )
}

export default MyRoutes;