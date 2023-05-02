import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>$ {props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
