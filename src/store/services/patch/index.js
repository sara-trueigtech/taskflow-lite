import { buildUpdate } from "../endpoints/index";

export const patchEndpoints = (builder) => ({
  updateTask: buildUpdate(builder, "Tasks", "/tasks"),
  updateUser: buildUpdate(builder, "Users", "/users"),
});
