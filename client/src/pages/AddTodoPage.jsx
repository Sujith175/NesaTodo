import React, { useContext } from "react";
import TodoForm from "../components/TodoForm";
import { TodoContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { createTask } from "../api";

const AddTodoPage = () => {
  const { setTodos } = useContext(TodoContext);
  const navigate = useNavigate();

  const handleSubmit = async (todo) => {
    try {
      const response = await createTask(todo);

      setTodos((prev) => [...prev, response.data.task]);
      navigate("/");
    } catch (err) {
      alert("Failed to create Todo");
    }
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <TodoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddTodoPage;
