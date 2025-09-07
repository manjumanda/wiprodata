import axios from "axios";

const API_URL = "http://localhost:7220/api/auth/"; // change if your backend runs on a different port

export const register = async (fullName, email, password, role = "Student") => {
  return await axios.post(API_URL + "register", {
    fullName,
    email,
    password,
    role, // must be sent because backend expects it
  });
};

export const login = async (email, password) => {
  return await axios.post(API_URL + "login", {
    email,
    password,
    role: "Student", // backend expects role too, adjust if needed
  });
};