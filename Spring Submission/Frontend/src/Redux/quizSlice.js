import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQuizzes, addQuiz, updateQuiz, deleteQuiz } from "../Services/api";

export const fetchQuizzes = createAsyncThunk(
  "quizzes/fetchQuizzes",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getQuizzes();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch quizzes");
    }
  }
);

export const createQuiz = createAsyncThunk(
  "quizzes/createQuiz",
  async (quiz, { rejectWithValue }) => {
    try {
      const res = await addQuiz(quiz);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add quiz");
    }
  }
);

export const editQuiz = createAsyncThunk(
  "quizzes/editQuiz",
  async ({ id, quiz }, { rejectWithValue }) => {
    try {
      const res = await updateQuiz(id, quiz);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to update quiz");
    }
  }
);

export const removeQuiz = createAsyncThunk(
  "quizzes/removeQuiz",
  async (id, { rejectWithValue }) => {
    try {
      await deleteQuiz(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to delete quiz");
    }
  }
);

const quizSlice = createSlice({
  name: "quizzes",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(fetchQuizzes.fulfilled, (state, action) => { state.list = action.payload; state.status = "success"; })
      .addCase(fetchQuizzes.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      .addCase(createQuiz.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(createQuiz.fulfilled, (state, action) => { state.list.push(action.payload); state.status = "success"; })
      .addCase(createQuiz.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      .addCase(editQuiz.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(editQuiz.fulfilled, (state, action) => {
        const index = state.list.findIndex(q => q.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
        state.status = "success";
      })
      .addCase(editQuiz.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      .addCase(removeQuiz.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(removeQuiz.fulfilled, (state, action) => {
        state.list = state.list.filter(q => q.id !== action.payload);
        state.status = "success";
      })
      .addCase(removeQuiz.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; });
  }
});

export default quizSlice.reducer;
