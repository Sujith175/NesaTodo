import React, { useState } from "react";

const TodoForm = ({ onSubmit, initialValues = {} }) => {
  const [title, setTitle] = useState(initialValues.title || "");

  const [description, setDescription] = useState(
    initialValues.description || ""
  );
  const [status, setStatus] = useState(initialValues.status || "pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, status });
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="status"> Status: </label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
