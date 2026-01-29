import { request } from "./commonApi";

export const getUsers = () => {
  return request("/users");
};

export const createUser = (user) => {
  return request(
    "/users",
    { method: "POST" },
    user
  );
};
