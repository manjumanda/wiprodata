import http from "./http";

export async function getAssignments() {
  try {
    const { data } = await http.get("/Assignments");
    return data;
  } catch (error) {
    console.error("Failed to fetch assignments:", error);
    throw error;
  }
}

export async function getAssignment(id) {
  try {
    const { data } = await http.get(`/Assignments/${id}`);
    return data;
  } catch (error) {
    console.error(`Failed to fetch assignment with ID ${id}:`, error);
    throw error;
  }
}

export async function getAssignmentsByCourse(courseId) {
  try {
    const { data } = await http.get(`/Assignments/course/${courseId}`);
    return data;
  } catch (error) {
    console.error(`Failed to fetch assignments for course ${courseId}:`, error);
    throw error;
  }
}

export async function createAssignment(payload) {
  try {
    const { data } = await http.post("/Assignments", payload);
    return data; // return the created assignment
  } catch (error) {
    console.error("Failed to create assignment:", error);
    throw error;
  }
}

export async function updateAssignment(id, payload) {
  try {
    const { data } = await http.put(`/Assignments/${id}`, payload);
    return data; // return updated assignment if backend returns it
  } catch (error) {
    console.error(`Failed to update assignment ${id}:`, error);
    throw error;
  }
}

export async function deleteAssignment(id) {
  try {
    await http.delete(`/Assignments/${id}`);
  } catch (error) {
    console.error(`Failed to delete assignment ${id}:`, error);
    throw error;
  }
}
