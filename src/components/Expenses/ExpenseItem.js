// import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // let title = props.title;
  // const clickHandler = () => {
  //   // title = "updated";
  //   setTitle();
  // //   console.log(title);
  // };
  // const expenseDate = new Date();
  // const expenseTitle = "car insurance";
  // const expenseAmount = 295.98;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>change title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
