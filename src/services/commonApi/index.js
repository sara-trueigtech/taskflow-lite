const BASE_URL = "http://localhost:3001";

export const request = async (url,options = {}, data) => {
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
