import React, { useState } from "react";
import Form from "./Form";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
interface Props {}

function App(props: Props) {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 100, category: "Food" },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 200,
      category: "Utilities",
    },
    { id: 3, description: "Internet Bill", amount: 150, category: "Utilities" },
    { id: 4, description: "Gym Membership", amount: 50, category: "Health" },
  ]);
const [selectedCategory, setSelectedCategory] = useState<string>("");

const handleDelete = (id: number) => {
  setExpenses(expenses.filter((expense) => expense.id !== id));
};

const handleCategoryChange = (category: string) => {
  setSelectedCategory(category);
};

const filteredExpenses = selectedCategory
  ? expenses.filter((expense) => expense.category === selectedCategory)
  : expenses;

const categories = Array.from(
  new Set(expenses.map((expense) => expense.category))
);
  return (
    <>
      <Form />
      <ExpenseFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
