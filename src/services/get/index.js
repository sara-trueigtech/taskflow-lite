import { get } from "../api";

export const getTasks = () => {
  return get("/tasks");
};

export const getUsers = () => {
  return get("/users");
};