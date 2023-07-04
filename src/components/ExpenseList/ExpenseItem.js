import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

import ExpenseDetails from "./ExpenseDetails";

import Card from "../UI/Card";

const ExpenseItems = (props) => {
  const deleteButton = (e) => {
    let item = e.target.parentElement;
    item.remove();
  };
  // const [name, setName] = useState(props.name);
  // const editName = (e) => {
  //   setName("updated");
  //   console.log(name);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{props.name}</h2>

        <ExpenseDetails
          LocationOfExpenditure={props.LocationOfExpenditure}
          amount={props.amount}
        ></ExpenseDetails>
      </div>
      <button onClick={deleteButton}>Delete Expense</button>
      {/* <button onClick={editName}>Edit Name</button> */}
    </Card>
  );
};

export default ExpenseItems;
