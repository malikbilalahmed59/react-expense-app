import React from "react";

interface ExpenseFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

function ExpenseFilter(props: ExpenseFilterProps) {
  const { categories, selectedCategory, onCategoryChange } = props;

  return (
    <div className="form-group" id="categoryFilter">
      <label htmlFor="categoryFilter">Filter by Category</label>
      <select
        className="form-control"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter;
