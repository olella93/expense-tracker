import React, { useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <div className="main-content">
        {/* Left Side: Expense Form */}
        <div className="expense-form">
          <h2>Add Expense</h2>
          <form>
            <input type="text" placeholder="Expense Name" />
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Category" />
            <input type="number" placeholder="Amount" />
            <input type="date" />
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
