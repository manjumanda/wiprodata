import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://localhost:7220/api/Auth";

// Async thunks
export const loginUser = createAsyncThunk("auth/loginUser", async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.Message || "Login failed");
  }
});

export const registerUser = createAsyncThunk("auth/registerUser", async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/register`, user);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.Message || "Registration failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { token: localStorage.getItem("lms.jwt") || null, status: null, error: null },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("lms.jwt");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem("lms.jwt", action.payload.token);
        state.status = "success";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
