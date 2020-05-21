import {
    INCREMENT,
    DECREMENT,
    CLEAR
} from "../actions/types";

const initialState = {
    count: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            if (state.count > 0) {
                return {
                    count: state.count - 1
                };
            } else return state;
        case CLEAR:
            return {
                count: 0
            };
        default:
            return state;
    }
}