import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/tasks";

export const fetchTodo = async () => axios.get(API_URL);
export const fetchSingleTask = async (id) => axios.get(`${API_URL}/${id}`);

export const createTask = async (task) => axios.post(API_URL, task);

export const updateTask = async (id, taskData) =>
  axios.patch(`${API_URL}/${id}`, taskData);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
