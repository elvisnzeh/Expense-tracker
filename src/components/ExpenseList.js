import React from "react";

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  return (
    <ul className="space-y-2 mt-4">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="flex justify-between items-center bg-gray-100 p-2 rounded"
        >
          <div className="flex space-x-10 px-2">
            <span>{expense.name}</span>
            <span className="ml-4 text-gray-500">${expense.amount.toFixed(2)}</span>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => onEditExpense(expense.id)}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteExpense(expense.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;

