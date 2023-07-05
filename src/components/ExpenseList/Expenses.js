import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expenseContent = (
    <p style={{ color: "whitesmoke" }}>No exepense found.</p>
  );

  if (filteredExpenses.length > 1) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        name={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  } else if (filteredExpenses.length === 1) {
    expenseContent = (
      <div>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
        <p style={{ color: "whitesmoke" }}>
          Only single Expense here. Please add more...
        </p>
      </div>
    );
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
};
export default Expenses;
