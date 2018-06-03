import React from "react";

import "../styles/home.css";

import NavItem from "../components/NavItem";

class Home extends React.Component {
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
            <div className="container home-container">
                <div className="home-grid">
                    <div 
                        className="heading-box heading-box-1"
                        onClick={() => this.handleShowLinks("showLinks2")}
                    >
                        <h1 className="heading">MR.</h1>
                    </div>
                    <div className="heading-box heading-box-2">
                        {this.state.showLinks1 &&
                            <NavItem />
                        }
                    </div>
                    <div className="heading-box heading-box-3">
                        {this.state.showLinks2 &&
                            <NavItem double />
                        }
                    </div>
                    <div 
                        className="heading-box heading-box-4"
                        onClick={() => this.handleShowLinks("showLinks1")}
                    >
                        <h1 className="heading">PUNK</h1>
                    </div>
                </div>
                <div className="line-box">
                    <hr className="line"/>
                </div>
            </div>
        )
    }
}

export default Home;