import http from "./http";

export async function getQuestions() {
  const { data } = await http.get("/Questions");
  return data;
}

export async function getQuestionsByQuiz(quizId) {
  // if your backend supports query param ?quizId=
  const { data } = await http.get("/Questions", { params: { quizId } });
  return data;
}

export async function createQuestion(payload) {
  // payload: { quizId, questionText, options (CSV or JSON), correctAnswer }
  const { data } = await http.post("/Questions", payload);
  return data;
}

export async function updateQuestion(id, payload) {
  await http.put(`/Questions/${id}`, payload);
}

export async function deleteQuestion(id) {
  await http.delete(`/Questions/${id}`);
}