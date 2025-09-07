import http from "./http";

export async function getCourses(pageNumber=1, pageSize=50) {
  // if your backend supports pagination pass query params
  const { data } = await http.get("/Courses", { params: { pageNumber, pageSize } });
  return data;
}

export async function getCourse(id) {
  const { data } = await http.get(`/Courses/${id}`);
  return data;
}

export async function createCourse(payload) {
  try {
    const { data } = await http.post("/Courses", payload);
    return data;
  } catch (err) {
    console.error("Failed to create course:", err.response || err);
    throw err;
  }
}

export async function updateCourse(id, payload) {
  await http.put(`/Courses/${id}`, payload);
}

export async function deleteCourse(id) {
  await http.delete(`/Courses/${id}`);
}