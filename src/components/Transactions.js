import { useSelector } from "react-redux";

const Transactions = () => {
    const transactions = useSelector(state => state.transactions);
    return (
        <div className="transactions">
            <h2>Transactions:</h2>
            {
                transactions.length > 0 && transactions.map(transaction => (
                        <div key={transaction.time}>{transaction.time + " - " + transaction.amount + " - " + transaction.type}</div>
                    )
                )
            }
        </div>
    );
}

export default Transactions;