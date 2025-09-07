import http from "./http";

export async function getEnrolments() {
  const { data } = await http.get("/Enrolments");
  return data;
}

export async function getEnrolmentsByStudent(studentId) {
  const { data } = await http.get("/Enrolments", { params: { studentId } });
  return data;
}

export async function createEnrolment(payload) {
  // payload: { studentId, courseId }
  const { data } = await http.post("/Enrolments", payload);
  return data;
}

export async function deleteEnrolment(id) {
  await http.delete(`/Enrolments/${id}`);
}