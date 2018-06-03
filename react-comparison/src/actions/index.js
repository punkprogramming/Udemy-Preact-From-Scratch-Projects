export const ADD_MY_TOUR_DATE = "addmytourdate";

export const addMyTourDate = (date) => {
    return {
        type: ADD_MY_TOUR_DATE,
        instructions: date
    }
}