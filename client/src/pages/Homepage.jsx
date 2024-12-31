import React, { useState } from "react";
import TodoList from "../components/TodoList";

import { Link } from "react-router-dom";

const Homepage = () => {
  const [filterStatus, setFilterStatus] = useState("all");

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };
  return (
    <section className="container">
      <div className="filter-options">
        <button
          className={`filter-button ${filterStatus === "all" ? "active" : ""}`}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={`filter-button ${
            filterStatus === "pending" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("pending")}
        >
          Pending
        </button>
        <button
          className={`filter-button ${
            filterStatus === "in-progress" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("in-progress")}
        >
          In Progress
        </button>
        <button
          className={`filter-button ${
            filterStatus === "completed" ? "active" : ""
          }`}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
      </div>

      <div className="container__heading">
        <h1>Nesa Todo List</h1>
      </div>

      <Link to="/add" className="add-todo">
        Add Todo
      </Link>

      <TodoList filterStatus={filterStatus} />
    </section>
  );
};

export default Homepage;
