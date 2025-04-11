import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = { name, description, category, amount, date };
    setExpenses([...expenses, newExpense]);

    setName("");
    setDescription("");
    setCategory("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <div className="main-content">
        <ExpenseForm
          name={name}
          description={description}
          category={category}
          amount={amount}
          date={date}
          setName={setName}
          setDescription={setDescription}
          setCategory={setCategory}
          setAmount={setAmount}
          setDate={setDate}
          handleSubmit={handleSubmit}
        />
        <ExpenseTable
          expenses={expenses}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
    </div>
  );
}

export default App;
