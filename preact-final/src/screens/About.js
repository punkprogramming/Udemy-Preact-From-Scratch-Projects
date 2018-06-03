import {h, Component} from "preact";
import {Player, BigPlayButton} from "video-react";

import "video-react/dist/video-react.css";
import "../styles/about.css";

import {infoBody} from "../data/about-text";

class About extends Component {
    componentDidMount() {
        document.title = "About Me";
    }
    render() {
        return (
            <div class="container lesser-container">
                <h1 class="lesser-heading">ABOUT</h1>
                <hr className="lesser-line"/>
                <div className="about-flex">
                    <div className="video-box">
                      <Player 
                        playsInLine
                        width={100}
                        poster="https://dl.dropboxusercontent.com/s/0w9l4aal86mrr94/video-poster.png?dl=0"
                        src="https://dl.dropboxusercontent.com/s/4tpjbhq0kno3kjs/video-intro.mp4?dl=0"
                      > 
                        <BigPlayButton position="center" />
                      </Player> 
                    </div>
                    <div className="info-box">
                        <h1 className="info-heading">INFO</h1>
                        <pre className="info-body">{infoBody}</pre>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;