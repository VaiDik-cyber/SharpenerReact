import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <ExpenseDetails
          amount={props.item.amount}
          location={props.item.LocationOfExpenditure}
          title={props.item.title}
        />
      </div>
    </div>
  );
}
export default ExpenseItem;
