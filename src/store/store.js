import { transactions, balance } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    transactions,
    balance
});

export default rootReducer;