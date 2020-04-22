import {
    INCREMENT,
    DECREMENT
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
        default:
            return state;
    }
}