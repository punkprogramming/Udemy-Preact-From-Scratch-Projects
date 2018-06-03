import {h} from "preact";
import {Link} from "preact-router";

const NavItem = (props) => {
    if(props.double) {
        return (
            <div class="sub-box">
                <Link href="/tour/dates">TOUR</Link>
                <Link href="/store/merch">MERCH</Link>
            </div>
        )
    } else {
        return (
            <div class="sub-box">
                <Link href="/about">ABOUT</Link>
            </div>
        )
    }
}

export default NavItem;