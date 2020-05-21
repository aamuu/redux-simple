import {
    INCREMENT,
    DECREMENT,
    CLEAR
} from "../actions/types";

export const increment = () => ({type: INCREMENT});

export const decrement = () => ({type: DECREMENT});

export const clear = () => ({type: CLEAR});