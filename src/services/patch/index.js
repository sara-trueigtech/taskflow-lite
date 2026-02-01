import { patch } from "../api";

export const updateUser = (id, updatedUser) => {
  return patch(`/users/${id}`, updatedUser);
};