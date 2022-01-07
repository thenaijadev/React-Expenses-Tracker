import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//useState should be called inside the root component function.Note that use state is a function
//usetate returns an array.
//when you distructure the array, the first argument is the variable that hold the initial value of what you want to change ,the secont argument is a function you call to change the value of the initial variable.
//State is seperated on a per component basis.
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price"> {props.amount} </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
