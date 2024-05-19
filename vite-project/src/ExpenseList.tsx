import React from 'react'

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

function ExpenseList({expenses,onDelete}: Props) {
  const totalAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  ).toFixed(2);
    if (expenses.length ==+0 )return null;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button className="btn btn-danger" onClick={() => onDelete(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>${totalAmount}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    );
}

export default ExpenseList
