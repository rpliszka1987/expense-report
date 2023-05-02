import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>
        <div>Day</div>
        <div>Month</div>
        <div>year</div>
      </div>
      <div>
        <h2>Expense Name</h2>
      </div>
      <div>Expense Amount $</div>
    </div>
  );
}

export default ExpenseItem;
