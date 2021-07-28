import { ADD_EXPENSE, ADD_TRANSACTION, REMOVE_EXPENSE } from './CONSTANTS';

export const addExpense = (amount) => {
    return {
        type: ADD_EXPENSE,
        payload: amount
    }
}

export const removeExpense = (amount) => {
    return {
        type: REMOVE_EXPENSE,
        payload: amount
    }
}

export const addTransaction = (transaction) => {
    return {
        type: ADD_TRANSACTION,
        payload: transaction
    }
}
