import { request } from "./commonApi";

export const getTasks = () => {
  return request("/tasks");
};

export const createTask = (task) => {
  return request("/tasks", {
    method: "POST",
  }, task);
};

export const updateTask = (id, updatedTask) => {
  return request(`/tasks/${id}`, {
    method: "PUT",
  },updatedTask);
};