import {h} from "preact";

import "../styles/merch.css";

const Merch = () => {

    document.title = "Merch Stuff";

    return (
        <div class="container lesser-container merch-container">
            <h1 class="lesser-heading">MERCH</h1>
            <hr class="lesser-line"/>
            <div class="art-box">
                <h3 class="art-title">PRETENTIOUS ART PIECE</h3>
                <div class="art-img-box">
                    <img src="https://dl.dropboxusercontent.com/s/olybx7rtyx30gzo/song-img3.png?dl=0" alt="pretentious art piece"/>
                </div>
                <p class="art-price">$24.95</p>
            </div>
        </div>
    )
}

export default Merch;