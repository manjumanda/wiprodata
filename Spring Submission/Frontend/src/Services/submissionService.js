import http from "./http";

export async function getSubmissions() {
  const { data } = await http.get("/Submissions");
  return data;
}

export async function getSubmission(id) {
  const { data } = await http.get(`/Submissions/${id}`);
  return data;
}

export async function createSubmission(payload) {
  // payload: { assignmentId, userId, fileUrl, grade? }
  const { data } = await http.post("/Submissions", payload);
  return data;
}

export async function updateSubmission(id, payload) {
  await http.put(`/Submissions/${id}`, payload);
}

export async function deleteSubmission(id) {
  await http.delete(`/Submissions/${id}`);
}