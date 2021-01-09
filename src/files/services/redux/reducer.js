// const { act } = require("react-dom/test-utils");

const initialState = {
    userDetails: null,
    buisnessCategory: null,
    otherdetails: null,
    buisnessDetails: null,
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "USER_LOGIN":
            return {
                ...state,
                userDetails: action.payload.userDetails
            };
        case "USER_LOGOUT":
            break;

        case "SELECT_BUISNESS_CATEGORY":
            return {
                ...state,
                buisnessCategory: action.payload.buisnessCategory
            };
        case "SELECT_BUISNESS":
            return {
                ...state,
                buisnessDetails: action.payload.buisnessDetails
            }
        default:
            return state;
    }
}