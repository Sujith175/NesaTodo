import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AddTodoPage from "./pages/AddTodoPage";
import EditTodoPage from "./pages/EditTodoPage";
import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add" element={<AddTodoPage />} />
      <Route path="/edit/:id" element={<EditTodoPage />} />
    </Routes>
  );
};
export default App;
