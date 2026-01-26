const BASE_URL = "http://localhost:3001/tasks";

export const getTasks = async () => {
    const res = await fetch(BASE_URL);
    return res.json();
}

export const createTask = async () => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasks),
    });
    return res.json();
}

export const updateTask = async (id, updatedTask) => {
    const res = fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
    });
    return res.json();
}