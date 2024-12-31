import React, { useEffect, useState, useContext } from "react";
import TodoForm from "../components/TodoForm";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleTask, updateTask } from "../api";
import { TodoContext } from "../context/TaskContext";

const EditTodoPage = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setTodos, todos } = useContext(TodoContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTodo = async () => {
      try {
        const response = await fetchSingleTask(id);

        setInitialValues(response.data.task);
      } catch (error) {
        alert("Failed to fetch task data");
      } finally {
        setLoading(false);
      }
    };
    loadTodo();
  }, [id]);

  const handleSubmit = async (todo) => {
    try {
      await updateTask(id, todo);

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo._id === id ? { ...todo, ...todo } : t))
      );

      navigate("/");
    } catch (err) {
      alert("Failed to update todo");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Edit Todo</h1>
      {initialValues && (
        <TodoForm onSubmit={handleSubmit} initialValues={initialValues} />
      )}
    </>
  );
};

export default EditTodoPage;
