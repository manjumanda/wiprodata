import http from "./http";

export async function getQuizzes() {
  const { data } = await http.get("/Quizzes");
  return data;
}

export async function getQuiz(id) {
  const { data } = await http.get(`/Quizzes/${id}`);
  return data;
}

export async function createQuiz(payload) {
  const { data } = await http.post("/Quizzes", payload);
  return data;
}

export async function updateQuiz(id, payload) {
  await http.put(`/Quizzes/${id}`, payload);
}

export async function deleteQuiz(id) {
  await http.delete(`/Quizzes/${id}`);
}