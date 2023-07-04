// import ExpenseItems from "./components/ExpenseItems";when we use maps
// import React from 'react'; if we write code in react object

import { useState } from "react";
import Expenses from "./components/ExpenseList/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const dummyExpenses = [
    {
      id: "el",
      title: "Food",
      amount: 500,
      date: new Date(2022, 7, 15),
      // LocationOfExpenditure: "Restaurent Hyd",
    },
    {
      id: "bl",
      title: "Shopping",
      amount: 5000,
      date: new Date(2022, 10, 12),
      // LocationOfExpenditure: "Trends",
    },
    {
      id: "ml",
      title: "Movie",
      amount: 1000,
      date: new Date(2021, 6, 13),
      // LocationOfExpenditure: "Imax Hyd",
    },
    {
      id: "cl",
      title: "Tour",
      amount: 20000,
      date: new Date(2020, 4, 12),
      // LocationOfExpenditure: "goa trip",
    },
    {
      id: "xl",
      title: "Dinner",
      amount: 1200,
      date: new Date(2021, 8, 12),
    },
  ];
  const [expenseList, setExpenseList] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    console.log(expense, "in app.js new expenses");
    setExpenseList((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} />
    </div>
  );
};

export default App;
