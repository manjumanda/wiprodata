import http from "./http";

export async function getNotifications() {
  const { data } = await http.get("/Notifications");
  return data;
}

export async function getNotification(id) {
  const { data } = await http.get(`/Notifications/${id}`);
  return data;
}

export async function createNotification(payload) {
  // payload: { userId, type, title, message, metadataJson? }
  const { data } = await http.post("/Notifications", payload);
  return data;
}

export async function markAsRead(id) {
  // if your API has a custom action - otherwise update
  await http.put(`/Notifications/${id}`, { isRead: true });
}

export async function deleteNotification(id) {
  await http.delete(`/Notifications/${id}`);
}
