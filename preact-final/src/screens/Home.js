import {h, Component} from "preact";
import {Link} from "preact-router";

import "../styles/home.css";

import NavItem from "../components/NavItem";

class Home extends Component {
    state = {
        showLinks1: false,
        showLinks2: false
    }
    handleShowLinks = (stateKey) => {
        this.setState({[stateKey]: !this.state[stateKey]});
        console.log(this.state);
    }
    componentDidMount() {
        document.title = "Big Time Music Site";
    }
    render() {
        return (
            <div class="container home-container">
                <div class="home-grid">
                    <div 
                        class="heading-box heading-box-1"
                        onClick={() => this.handleShowLinks("showLinks2")}
                    >
                        <h1 class="heading">MR.</h1>
                    </div>
                    <div class="heading-box heading-box-2">
                        {this.state.showLinks1 &&
                            <NavItem />
                        }
                    </div>
                    <div class="heading-box heading-box-3">
                        {this.state.showLinks2 &&
                            <NavItem double />
                        }
                    </div>
                    <div 
                        class="heading-box heading-box-4"
                        onClick={() => this.handleShowLinks("showLinks1")}
                    >
                        <h1 class="heading">PUNK</h1>
                    </div>
                </div>
                <div class="line-box">
                    <hr class="line"/>
                </div>
            </div>
        )
    }
}

export default Home;