import { put } from "../api";

export const updateTask = (id, updatedTask) => {
  return put(`/tasks/${id}`, updatedTask);
};

export const updateUser = (id, updatedUser) => {
  return put(`/users/${id}`, updatedUser);
};
