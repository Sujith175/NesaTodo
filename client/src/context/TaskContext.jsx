import { createContext, useEffect, useState } from "react";
import { fetchTodo } from "../api";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      setLoading(true);

      try {
        const response = await fetchTodo();

        setTodos(response.data);
      } catch (error) {
        setError("failed to fetch Data");
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
      {children}
    </TodoContext.Provider>
  );
};
