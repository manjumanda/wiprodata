// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// //import { getAssignments, createAssignment, updateAssignment, deleteAssignment } from "../Services/api";
// import { getAssignments, addAssignment, updateAssignment, deleteAssignment } from "../Services/api";

// export const fetchAssignments = createAsyncThunk(
//   "assignments/fetchAssignments",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await getAssignments();
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to fetch assignments");
//     }
//   }
// );

// export const createAssignment = createAsyncThunk(
//   "assignments/createAssignment",
//   async (assignment, { rejectWithValue }) => {
//     try {
//       const res = await addAssignment(assignment);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to add assignment");
//     }
//   }
// );

// export const editAssignment = createAsyncThunk(
//   "assignments/editAssignment",
//   async ({ id, assignment }, { rejectWithValue }) => {
//     try {
//       const res = await updateAssignment(id, assignment);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to update assignment");
//     }
//   }
// );

// export const removeAssignment = createAsyncThunk(
//   "assignments/removeAssignment",
//   async (id, { rejectWithValue }) => {
//     try {
//       await deleteAssignment(id);
//       return id;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Failed to delete assignment");
//     }
//   }
// );

// const assignmentSlice = createSlice({
//   name: "assignments",
//   initialState: { list: [], status: "idle", error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAssignments.pending, (state) => { state.status = "loading"; state.error = null; })
//       .addCase(fetchAssignments.fulfilled, (state, action) => { state.list = action.payload; state.status = "success"; })
//       .addCase(fetchAssignments.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

//       .addCase(createAssignment.pending, (state) => { state.status = "loading"; state.error = null; })
//       .addCase(createAssignment.fulfilled, (state, action) => { state.list.push(action.payload); state.status = "success"; })
//       .addCase(createAssignment.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

//       .addCase(editAssignment.pending, (state) => { state.status = "loading"; state.error = null; })
//       .addCase(editAssignment.fulfilled, (state, action) => {
//         const index = state.list.findIndex(a => a.id === action.payload.id);
//         if (index !== -1) state.list[index] = action.payload;
//         state.status = "success";
//       })
//       .addCase(editAssignment.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

//       .addCase(removeAssignment.pending, (state) => { state.status = "loading"; state.error = null; })
//       .addCase(removeAssignment.fulfilled, (state, action) => {
//         state.list = state.list.filter(a => a.id !== action.payload);
//         state.status = "success";
//       })
//       .addCase(removeAssignment.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; });
//   }
// });

// export default assignmentSlice.reducer;

//---------------------------------------------------------------

// assignmentSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAssignments, addAssignment, updateAssignment, deleteAssignment } from "../Services/api";

// fetch all
export const fetchAssignments = createAsyncThunk("assignments/fetch", async () => {
  const res = await getAssignments();
  return res; // api.js already returns res.data
});

// create
export const createAssignmentThunk = createAsyncThunk("assignments/create", async (assignment) => {
  const res = await addAssignment(assignment);  // ✅ use addAssignment
  return res;
});

// edit
export const editAssignment = createAsyncThunk("assignments/edit", async ({ id, assignment }) => {
  const res = await updateAssignment(id, assignment);
  return res;
});

// delete
export const removeAssignment = createAsyncThunk("assignments/remove", async (id) => {
  await deleteAssignment(id);
  return id;
});

// const assignmentSlice = createSlice({
//   name: "assignments",
//   initialState: { list: [], status: "idle", error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAssignments.fulfilled, (state, action) => {
//         state.list = action.payload;
//       })
//       .addCase(createAssignmentThunk.fulfilled, (state, action) => {
//         state.list.push(action.payload);
//       })
//       .addCase(editAssignment.fulfilled, (state, action) => {
//         const i = state.list.findIndex(a => a.id === action.payload.id);
//         if (i !== -1) state.list[i] = action.payload;
//       })
//       .addCase(removeAssignment.fulfilled, (state, action) => {
//         state.list = state.list.filter(a => a.id !== action.payload);
//       });
//   }
// });
const assignmentSlice = createSlice({
  name: "assignments",
  initialState: { list: [], status: "idle", error: null },  // ✅ list starts as []
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssignments.fulfilled, (state, action) => {
        state.list = Array.isArray(action.payload) ? action.payload : [];  // ✅ ensure array
      })
      .addCase(createAssignmentThunk.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  }
});

export default assignmentSlice.reducer;


