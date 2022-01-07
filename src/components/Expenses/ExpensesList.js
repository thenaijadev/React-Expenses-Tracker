import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  const renderExpenses = (expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  };

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  return <ul className="expenses-list"> {props.items.map(renderExpenses)}</ul>;
};

export default ExpensesList;
