import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  const addExpense = (expense) => {
    if (editingExpense) {
      setExpenses((prevExpenses) =>
        prevExpenses.map((exp) =>
          exp.id === editingExpense.id ? { ...exp, ...expense } : exp
        )
      );
      setEditingExpense(null);
    } else {
      setExpenses([...expenses, { ...expense, id: Date.now() }]);
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const editExpense = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    setEditingExpense(expenseToEdit);
  };

  const total = expenses.reduce((acc, expen) => acc + expen.amount, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <div className=" mx-auto bg-white shadow-md rounded-lg p-4 w-1/3">
        <h1 className="text-2xl font-bold text-center mb-4">Expense Tracker</h1>

        <ExpenseForm
          onAddExpense={addExpense}
          editingExpense={editingExpense}
        />

        <ExpenseList
          expenses={expenses}
          onDeleteExpense={deleteExpense}
          onEditExpense={editExpense}
        />

        <div className="text-right font-bold text-lg mt-4">
          Total: ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default App;
