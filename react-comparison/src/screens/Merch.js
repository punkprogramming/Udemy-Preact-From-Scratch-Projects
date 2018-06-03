import React from "react";

import "../styles/merch.css";

const Merch = () => {

    document.title = "Merch Stuff";

    return (
        <div className="container lesser-container merch-container">
            <h1 className="lesser-heading">MERCH</h1>
            <hr className="lesser-line"/>
            <div className="art-box">
                <h3 className="art-title">PRETENTIOUS ART PIECE</h3>
                <div className="art-img-box">
                    <img src="https://dl.dropboxusercontent.com/s/olybx7rtyx30gzo/song-img3.png?dl=0" alt="pretentious art piece"/>
                </div>
                <p className="art-price">$24.95</p>
            </div>
        </div>
    )
}

export default Merch;