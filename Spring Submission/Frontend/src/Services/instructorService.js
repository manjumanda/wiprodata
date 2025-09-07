import http from "./http";

export async function getInstructors() {
  const { data } = await http.get("/Instructors");
  return data;
}

export async function getInstructor(id) {
  const { data } = await http.get(`/Instructors/${id}`);
  return data;
}

export async function createInstructor(payload) {
  const { data } = await http.post("/Instructors", payload);
  return data;
}

export async function updateInstructor(id, payload) {
  await http.put(`/Instructors/${id}`, payload);
}

export async function deleteInstructor(id) {
  await http.delete(`/Instructors/${id}`);
}