import React from "react";

function ExpenseTable({ expenses, searchTerm, setSearchTerm }) {
  return (
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
          {expenses
            .filter((expense) => {
              const term = searchTerm.toLowerCase();
              return (
                expense.name.toLowerCase().includes(term) ||
                expense.description.toLowerCase().includes(term)
              );
            })
            .map((expense, index) => (
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
  );
}

export default ExpenseTable;
