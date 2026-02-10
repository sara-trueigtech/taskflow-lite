export const buildQuery = (builder, tag, url) =>
  builder.query({
    query: () => url,
    providesTags: [tag],
  });

export const buildCreate = (builder, tag, url) =>
  builder.mutation({
    query: (data) => ({
      url,
      method: "POST",
      body: data,
    }),
    invalidatesTags: [tag],
  });

export const buildUpdate = (builder, tag, url) =>
  builder.mutation({
    query: ({ id, ...data }) => ({
      url: `${url}/${id}`,
      method: "PATCH",
      body: data,
    }),
    invalidatesTags: [tag],
  });

export const buildDelete = (builder, tag, url) =>
  builder.mutation({
    query: (id) => ({
      url: `${url}/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: [tag],
  });
