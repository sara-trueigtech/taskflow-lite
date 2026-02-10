import { buildQuery } from "../endpoints/index";

export const getEndpoints = (builder) => ({
  getTasks: buildQuery(builder, "Tasks", "/tasks"),
  getUsers: buildQuery(builder, "Users", "/users"),
});
