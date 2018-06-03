import React from "react";
import {Link} from "react-router-dom";

const NavItem = (props) => {
    if(props.double) {
        return (
            <div className="sub-box">
                <Link to="/tour/dates">TOUR</Link>
                <Link to="/store/merch">MERCH</Link>
            </div>
        )
    } else {
        return (
            <div className="sub-box">
                <Link to="/about">ABOUT</Link>
            </div>
        )
    }
}

export default NavItem;