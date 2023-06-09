
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "01",
      expenseName: "Rent",
      date: new Date(2023, 0, 2),
      amount: "1,250",
    },
    {
      id: "02",
      expenseName: "Car Payment",
      date: new Date(2023, 0, 6),
      amount: "650",
    },
  ];
  return (
    <div>
      <div className="homepage-header">
        <h1>Expense Report</h1>
      </div>
      <ExpenseItem
        name={expenses[0].expenseName}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        name={expenses[1].expenseName}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
    </div>
  );
}

export default App;
