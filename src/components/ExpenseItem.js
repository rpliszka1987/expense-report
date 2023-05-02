import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <div>Day</div>
        <div>Month</div>
        <div>year</div>
      </div>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>$ {props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
