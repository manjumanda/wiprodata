import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubmissions, addSubmission, updateSubmission, deleteSubmission } from "../Services/api";

export const fetchSubmissions = createAsyncThunk(
  "submissions/fetchSubmissions",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getSubmissions();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch submissions");
    }
  }
);

export const createSubmission = createAsyncThunk(
  "submissions/createSubmission",
  async (submission, { rejectWithValue }) => {
    try {
      const res = await addSubmission(submission);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add submission");
    }
  }
);

export const editSubmission = createAsyncThunk(
  "submissions/editSubmission",
  async ({ id, submission }, { rejectWithValue }) => {
    try {
      const res = await updateSubmission(id, submission);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to update submission");
    }
  }
);

export const removeSubmission = createAsyncThunk(
  "submissions/removeSubmission",
  async (id, { rejectWithValue }) => {
    try {
      await deleteSubmission(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to delete submission");
    }
  }
);

const submissionSlice = createSlice({
  name: "submissions",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubmissions.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(fetchSubmissions.fulfilled, (state, action) => { state.list = action.payload; state.status = "success"; })
      .addCase(fetchSubmissions.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      .addCase(createSubmission.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(createSubmission.fulfilled, (state, action) => { state.list.push(action.payload); state.status = "success"; })
      .addCase(createSubmission.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      .addCase(editSubmission.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(editSubmission.fulfilled, (state, action) => {
        const index = state.list.findIndex(s => s.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
        state.status = "success";
      })
      .addCase(editSubmission.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      .addCase(removeSubmission.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(removeSubmission.fulfilled, (state, action) => {
        state.list = state.list.filter(s => s.id !== action.payload);
        state.status = "success";
      })
      .addCase(removeSubmission.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; });
  }
});

export default submissionSlice.reducer;
