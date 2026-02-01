const BASE_URL = "http://localhost:3001";

const request = async (url, options = {}, data) => {
  const res = await fetch(`${BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
    ...(data && { body: JSON.stringify(data) }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "API Error");
  }

  return res.json();
};

export const get = (url) => {
  return request(url);
};

export const post = (url, data) => {
  return request(url, { method: "POST" }, data);
};

export const put = (url, data) => {
  return request(url, { method: "PUT" }, data);
};
export const patch = (url, data) => {
  return request(url, { method: "PATCH" }, data);
};

export const remove = (url) => {
  return request(url, { method: "DELETE" });
};
