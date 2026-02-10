// import { baseApi } from "./baseApi";

// export const usersApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getUsers: builder.query({
//       query: () => "/users",
//       providesTags: ["Users"],
//     }),

//     createUser: builder.mutation({
//       query: (user) => ({
//         url: "/users",
//         method: "POST",
//         body: user,
//       }),
//       invalidatesTags: ["Users"],
//     }),

//     updateUser: builder.mutation({
//       query: ({ id, updatedUser }) => ({
//         url: `/users/${id}`,
//         method: "PATCH",
//         body: updatedUser,
//       }),

//       invalidatesTags: ["Users"],
//     }),
//   }),
// });

// export const {
//   useGetUsersQuery,
//   useCreateUserMutation,
//   useUpdateUserMutation
// } = usersApi;
