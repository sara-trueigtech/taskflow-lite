import { post } from "../api";

export const createUser = (user) => {
  return post("/users", user);
};

export const createTask = (task) => {
  return post("/tasks", task);
};
