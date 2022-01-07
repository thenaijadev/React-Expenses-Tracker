import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const INITIAL = [];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      //the line of code below shows that items is the same with the expenses
      array
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
