import http from "./http";

export async function getPayments() {
  const { data } = await http.get("/Payments");
  return data;
}

export async function getPayment(id) {
  const { data } = await http.get(`/Payments/${id}`);
  return data;
}

export async function createPayment(payload) {
  // payload: { studentId, courseId, amount, currency, provider, ... }
  const { data } = await http.post("/Payments", payload);
  return data;
}

export async function updatePayment(id, payload) {
  await http.put(`/Payments/${id}`, payload);
}