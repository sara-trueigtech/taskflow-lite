import { remove } from "../api";

export const deleteTask = (id) => {
  return remove(`/tasks/${id}`);
};

export const deleteUser = (id) => {
  return remove(`/users/${id}`);
};
