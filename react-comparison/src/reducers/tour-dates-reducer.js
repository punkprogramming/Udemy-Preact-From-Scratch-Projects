import {ADD_MY_TOUR_DATE} from "../actions";

export default (state = [], action) => {
    switch(action.type) {
        case ADD_MY_TOUR_DATE:
            return [...state, action.instructions];
        default: return state;
    }
}