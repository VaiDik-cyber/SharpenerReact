import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // let expenseContent = (
  //   <p style={{ color: "whitesmoke" }}>No exepense found.</p>
  // );
  // let filteritem = filteredExpenses.map((expense) => (
  //   <ExpenseItem
  //     key={expense.id}
  //     name={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
  //   ></ExpenseItem>
  // ));
  // if (filteredExpenses.length > 1) {
  //   expenseContent = { filteritem };
  // } else if (filteredExpenses.length === 1) {
  //   expenseContent = (
  //     <>
  //       {filteritem}
  //       <p style={{ color: "whitesmoke" }}>
  //         Only single Expense here. Please add more...
  //       </p>
  //     </>
  //   );
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
