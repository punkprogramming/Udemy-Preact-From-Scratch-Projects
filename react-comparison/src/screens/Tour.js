import React from "react";
import {connect} from "react-redux";

import {tourDatesArr} from "../data/tour-dates";
import {addMyTourDate} from "../actions";

import TourItem from "../components/TourItem";

import "../styles/tour.css";

class Tour extends React.Component {
    state = {
        tourDatesArr
    }
    updateGoingArr = (date) => {
        if(!this.props.myTourDates.includes(date)) {
            this.props.addMyTourDate(date);
        }
    }
    renderMyTourDates = () => {
        if(this.props.myTourDates.length < 1) {
            return (
                <h6 className="no-tours-text">No Dates Selected :( Click Below To Make Your Life Amazing</h6>
            )
        } else {
            return this.props.myTourDates.map((event) => {
                return (
                    <TourItem 
                        key={event}
                        info={event}
                    />
                )
            })
        }
    }
    renderAllTourDates = () => {
        return this.state.tourDatesArr.map((event) => {
            return (
                <TourItem 
                    key={event}
                    info={event}
                    includeButton
                    addDateFunc={this.updateGoingArr}
                />
            )
        })
    }
    componentDidMount() {
        document.title = "Tour Dates";
    }
    render() {
        return (
            <div className="container lesser-container">
                <h1 className="lesser-heading">TOUR</h1>
                <hr className="lesser-line"/>
                <div className="tour-box">
                    <div className="my-dates-box">
                        <h3 className="dates-box-header">Going To See: </h3>
                        {this.renderMyTourDates()}
                    </div>
                    <div className="all-dates-box">
                        <h3 className="dates-box-header">All Tour Dates: </h3>
                        {this.renderAllTourDates()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myTourDates: state.myTourDates
    }
}

export default connect(mapStateToProps, {addMyTourDate})(Tour);