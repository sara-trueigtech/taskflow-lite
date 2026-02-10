import { baseApi } from "./baseApi";
import { getEndpoints } from "./get/index";
import { postEndpoints } from "./post/index";
import { patchEndpoints } from "./patch/index";
import { deleteEndpoints } from "./delete/index";

export const apiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    ...getEndpoints(builder),
    ...postEndpoints(builder),
    ...patchEndpoints(builder),
    ...deleteEndpoints(builder),
  }),
});

export const {
  useGetTasksQuery,
  useGetUsersQuery,
  useCreateTaskMutation,
  useCreateUserMutation,
  useUpdateTaskMutation,
  useUpdateUserMutation,
  useDeleteTaskMutation,
} = apiSlice;
