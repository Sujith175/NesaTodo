import React, { useContext } from "react";
import { TodoContext } from "../context/TaskContext";
import { deleteTask } from "../api";
import { Link } from "react-router-dom";

const TodoList = ({ filterStatus }) => {
  const { todos, setTodos, loading, error } = useContext(TodoContext);

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "all") {
      return true;
    } else {
      return todo.status === filterStatus;
    }
  });

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (err) {
      alert("failed to delete todo");
    }
  };

  return (
    <ul className="todo-list">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <li key={todo._id}>
            <div className="todo-item">
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <p className="todo-status">Status: {todo.status}</p>
            </div>
            <div className="actions">
              <Link to={`/edit/${todo._id}`} className="actions__button">
                Edit
              </Link>
              <button
                className="actions__button"
                onClick={() => handleDelete(todo._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      ) : (
        <p className="empty-list-message">No tasks to view. Add some todos!</p>
      )}
    </ul>
  );
};

export default TodoList;
