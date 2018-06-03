import React from "react";

const TourItem = (props) => {
    return (
        <div className="tour-item-box">
            <p className="tour-date-info">{props.info}</p>
            {props.includeButton &&
                <button 
                    className="add-tour-btn"
                    onClick={() => props.addDateFunc(props.info)}
                >
                Going
                </button>
            }
        </div>
    )
}

export default TourItem;