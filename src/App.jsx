import React, { useState } from "react";
import "./App.css";

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

  const newExpense = {
    name,
    description,
    category,
    amount,
    date,
  };

  // Add new expense to the list
  setExpenses([...expenses, newExpense]);

  // Clear form
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
        {/* Left Side: Expense Form */}
        <div className="expense-form">
          <h2>Add Expense</h2>
          <form>
          <input
  type="text"
  placeholder="Expense Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<input
  type="text"
  placeholder="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
<input
  type="text"
  placeholder="Category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
/>
<input
  type="number"
  placeholder="Amount"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>
<input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Right Side: Expense Table */}
        <div className="expense-table">
          <input
            type="text"
            placeholder="Search expenses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Expense</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{expense.description}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
