import http from "./http";

export async function getUsers() {
  const { data } = await http.get("/Student"); // or /Users /Students depending on controller
  return data;
}

export async function getUser(id) {
  const { data } = await http.get(`/Student/${id}`);
  return data;
}

export async function createUser(payload) {
  const { data } = await http.post("/Student", payload);
  return data;
}

export async function updateUser(id, payload) {
  await http.put(`/Student/${id}`, payload);
}

export async function deleteUser(id) {
  await http.delete(`/Student/${id}`);
}