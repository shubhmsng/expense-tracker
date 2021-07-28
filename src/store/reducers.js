import { ADD_EXPENSE, ADD_TRANSACTION, REMOVE_EXPENSE } from "./CONSTANTS";

const balance = (state = { amount: 0}, action) => {
    switch(action.type) {
        case ADD_EXPENSE: 
            state.amount += action.payload;
            return state;
        case REMOVE_EXPENSE: 
            state.amount -= action.payload;
            return state;
        default: 
            return state;
    }
}

const transactions = (state = [], action) => {
    switch(action.type) {
        case ADD_TRANSACTION:
            state.push(action.payload);
            return state;
        default:
            return state;
    }
}

export {
    balance,
    transactions
}