import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, addUser, updateUser, deleteUser } from "../Services/api";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getUsers();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch users");
    }
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await addUser(user);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add user");
    }
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ id, user }, { rejectWithValue }) => {
    try {
      const res = await updateUser(id, user);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to update user");
    }
  }
);

export const removeUser = createAsyncThunk(
  "users/removeUser",
  async (id, { rejectWithValue }) => {
    try {
      await deleteUser(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to delete user");
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(fetchUsers.fulfilled, (state, action) => { state.list = action.payload; state.status = "success"; })
      .addCase(fetchUsers.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      .addCase(createUser.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.list.findIndex(u => u.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.list = state.list.filter(u => u.id !== action.payload);
      });
  }
});

export default userSlice.reducer;
