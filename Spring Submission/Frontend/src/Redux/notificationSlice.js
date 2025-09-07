import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNotifications, addNotification, updateNotification, deleteNotification } from "../Services/api";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getNotifications();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch notifications");
    }
  }
);

export const createNotification = createAsyncThunk(
  "notifications/createNotification",
  async (notification, { rejectWithValue }) => {
    try {
      const res = await addNotification(notification);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add notification");
    }
  }
);

export const editNotification = createAsyncThunk(
  "notifications/editNotification",
  async ({ id, notification }, { rejectWithValue }) => {
    try {
      const res = await updateNotification(id, notification);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to update notification");
    }
  }
);

export const removeNotification = createAsyncThunk(
  "notifications/removeNotification",
  async (id, { rejectWithValue }) => {
    try {
      await deleteNotification(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to delete notification");
    }
  }
);

const notificationSlice = createSlice({
  name: "notifications",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(fetchNotifications.fulfilled, (state, action) => { state.list = action.payload; state.status = "success"; })
      .addCase(fetchNotifications.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      .addCase(createNotification.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(editNotification.fulfilled, (state, action) => {
        const index = state.list.findIndex(n => n.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(removeNotification.fulfilled, (state, action) => {
        state.list = state.list.filter(n => n.id !== action.payload);
      });
  }
});

export default notificationSlice.reducer;
