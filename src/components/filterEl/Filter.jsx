import "./index.css";
import { useState } from "react";
const Filter = ({ productsData, setCategoryFilter, categoryFilter }) => {
  const categoryArray = productsData.map((element) => element.category);

  const category = categoryArray.filter(
    (category, index) => categoryArray.indexOf(category) === index
  );

  return (
    <div className="Filter">
      <h2> Products:</h2>
      <div className="filter-area">
        {category.map((item) => (
          <button
            className={`filter-element ${
              categoryFilter === item && "isActive"
            } `}
            onClick={() => setCategoryFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Filter;
