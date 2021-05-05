import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [displayedContent, setDisplayContent] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayContent(false);
  };

  const cancelNewExpenseHandler = (event) => {
    event.preventDefault();
    setDisplayContent(false);
  };

  const clickHandler = () => {
    setDisplayContent(true);
  };

  let initialDisplay = <button onClick={clickHandler}>Add New Expense</button>;
  if (displayedContent) {
    initialDisplay = (
      <ExpenseForm
        onCancel={cancelNewExpenseHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{initialDisplay}</div>;
};

export default NewExpense;
