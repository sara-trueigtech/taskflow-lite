import { buildCreate } from "../endpoints/index";

export const postEndpoints = (builder) => ({
  createTask: buildCreate(builder, "Tasks", "/tasks"),
  createUser: buildCreate(builder, "Users", "/users"),
});
