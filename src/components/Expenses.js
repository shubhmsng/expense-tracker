import { useState } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { addExpense, addTransaction, removeExpense } from "../store/actions";
import Transactions from "./Transactions";

const Expenses = () => {
    const balance = useSelector(state => state.balance.amount);
    const [ amount, setAmount ] = useState(0);

    const dispatch = useDispatch();

    const addExpenseAmount = () => {
        if(amount) {
            const transaction = {
                amount,
                type: 'Add',
                time: new Date().toISOString()
            }
            batch(() => {
                dispatch(addTransaction(transaction));
                dispatch(addExpense(+amount));
            });
        }
    }

    const removeExpenseAmount = () => {        
        if(amount) {
            const transaction = {
                amount,
                type: 'Remove',
                time: new Date().toISOString()
            }
            batch(() => {
                dispatch(addTransaction(transaction));
                dispatch(removeExpense(+amount));
            });
        }
    }

    return(
        <div>
            <h2>{"Balance: " + balance}</h2>
            <input type="number" id="amount" onChange={e => setAmount(e.target.value)}/>
            <div>
                <button type="button" onClick={addExpenseAmount}>Add</button>
                <button type="button" onClick={removeExpenseAmount}>Remove</button>
            </div>
            <Transactions/>
        </div>
    );
}

export default Expenses;