import {combineReducers} from "redux";

import TourDatesReducer from "./tour-dates-reducer";

export default combineReducers({
    myTourDates: TourDatesReducer
})