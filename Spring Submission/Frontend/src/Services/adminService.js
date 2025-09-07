import http from "./http";

export async function getAdmins() {
  const { data } = await http.get("/Admins");
  return data;
}

export async function getAdmin(id) {
  const { data } = await http.get(`/Admins/${id}`);
  return data;
}

export async function createAdmin(payload) {
  const { data } = await http.post("/Admins", payload);
  return data;
}

export async function updateAdmin(id, payload) {
  await http.put(`/Admins/${id}`, payload);
}

export async function deleteAdmin(id) {
  await http.delete(`/Admins/${id}`);
}