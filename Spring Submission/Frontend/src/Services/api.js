import axios from "axios";

export const API = axios.create({
  baseURL: "https://localhost:7220/api",
});

// Add JWT token to request headers
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("lms.jwt");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

//
// ---------- AUTH ----------
export const login = async (data) => {
  const res = await API.post("/Auth/login", data);
  return res.data;
};

export const register = async (data) => {
  const res = await API.post("/Auth/register", data);
  return res.data;
};


// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://localhost:7220/api",
// });

// // Add JWT token automatically
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("lms.jwt");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

// ---------- COURSES ----------
export const getCourses = async () => {
  const res = await API.get("/courses");
  return res.data; // return array of courses
};

export const addCourse = async (payload) => {
  const res = await API.post("/courses", payload);
  return res.data; // return created course
};

export const updateCourse = async (id, payload) => {
  const res = await API.put(`/courses/${id}`, payload);
  return res.data; // return updated course
};

export const deleteCourse = async (id) => {
  await API.delete(`/courses/${id}`);
  return id; // return deleted courseID
};



// // Get all courses
// export async function getCourses(pageNumber = 1, pageSize = 50) {
//   const res = await http.get("/Courses", { params: { pageNumber, pageSize } });
//   // Ensure we return an array
//   // If your backend returns { data: [...] }, use res.data.data
//   return res.data; 
// }

// // Get single course
// export async function getCourse(id) {
//   const { data } = await http.get(`/courses/${id}`);
//   return data;
// }

// // Create a course
// export async function createCourse(payload) {
//   const { data } = await http.post("/courses", payload);
//   return data; // must return created course
// }

// // Update a course
// export async function updateCourse(id, payload) {
//   const { data } = await http.put(`/courses/${id}`, payload);
//   return data; // must return updated course
// }

// // Delete a course
// export async function deleteCourse(id) {
//   await http.delete(`/courses/${id}`);
// }


//
// ---------- ASSIGNMENTS ----------
export const getAssignments = async () => {
  const res = await API.get("/assignments");
  return res.data;
};

export const addAssignment = async (data) => {
  const res = await API.post("/assignments", data);
  return res.data;
};

export const updateAssignment = async (id, data) => {
  const res = await API.put(`/assignments/${id}`, data);
  return res.data;
};

export const deleteAssignment = async (id) => {
  const res = await API.delete(`/assignments/${id}`);
  return res.data;
};

//
// ---------- QUIZZES ----------
export const getQuizzes = async () => {
  const res = await API.get("/quizzes");
  return res.data;
};

export const addQuiz = async (data) => {
  const res = await API.post("/quizzes", data);
  return res.data;
};

export const updateQuiz = async (id, data) => {
  const res = await API.put(`/quizzes/${id}`, data);
  return res.data;
};

export const deleteQuiz = async (id) => {
  const res = await API.delete(`/quizzes/${id}`);
  return res.data;
};

//
// ---------- SUBMISSIONS ----------
export const getSubmissions = async () => {
  const res = await API.get("/submissions");
  return res.data;
};

export const addSubmission = async (data) => {
  const res = await API.post("/submissions", data);
  return res.data;
};

export const updateSubmission = async (id, data) => {
  const res = await API.put(`/submissions/${id}`, data);
  return res.data;
};

export const deleteSubmission = async (id) => {
  const res = await API.delete(`/submissions/${id}`);
  return res.data;
};

//
// ---------- NOTIFICATIONS ----------
export const getNotifications = async () => {
  const res = await API.get("/notifications");
  return res.data;
};

export const addNotification = async (data) => {
  const res = await API.post("/notifications", data);
  return res.data;
};

export const updateNotification = async (id, data) => {
  const res = await API.put(`/notifications/${id}`, data);
  return res.data;
};

export const deleteNotification = async (id) => {
  const res = await API.delete(`/notifications/${id}`);
  return res.data;
};

//
// ---------- USERS (ADMIN) ----------
export const getUsers = async () => {
  const res = await API.get("/users");
  return res.data;
};

export const addUser = async (data) => {
  const res = await API.post("/users", data);
  return res.data;
};

export const updateUser = async (id, data) => {
  const res = await API.put(`/users/${id}`, data);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await API.delete(`/users/${id}`);
  return res.data;
};

//
// ---------- PAYMENTS ----------
export const getPayments = async () => {
  const res = await API.get("/payments");
  return res.data;
};

export const addPayment = async (data) => {
  const res = await API.post("/payments", data);
  return res.data;
};

export const updatePayment = async (id, data) => {
  const res = await API.put(`/payments/${id}`, data);
  return res.data;
};

export const deletePayment = async (id) => {
  const res = await API.delete(`/payments/${id}`);
  return res.data;
};
