import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <div className="homepage-header">
        <h1>Expense Report</h1>
      </div>
      <ExpenseItem />
    </div>
  );
}

export default App;
