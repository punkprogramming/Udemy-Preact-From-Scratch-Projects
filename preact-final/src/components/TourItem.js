import {h} from "preact";

const TourItem = (props) => {
    return (
        <div class="tour-item-box">
            <p class="tour-date-info">{props.info}</p>
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