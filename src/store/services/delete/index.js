import { buildDelete } from "../endpoints/index";

export const deleteEndpoints = (builder) => ({
  deleteTask: buildDelete(builder, "Tasks", "/tasks"),
});
