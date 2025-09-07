// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getCourses, addCourse, updateCourse, deleteCourse } from "../Services/api";

// // Fetch all courses
// export const fetchCourses = createAsyncThunk(
//   "courses/fetchCourses",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await getCourses();
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data || "Failed to fetch courses");
//     }
//   }
// );

// // Add a new course
// export const createCourse = createAsyncThunk(
//   "courses/createCourse",
//   async (course, { rejectWithValue }) => {
//     try {
//       const res = await addCourse(course);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data || "Failed to add course");
//     }
//   }
// );

// // Edit an existing course
// export const editCourse = createAsyncThunk(
//   "courses/editCourse",
//   async ({ id, course }, { rejectWithValue }) => {
//     try {
//       const res = await updateCourse(id, course);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data || "Failed to update course");
//     }
//   }
// );

// // Delete a course
// export const removeCourse = createAsyncThunk(
//   "courses/removeCourse",
//   async (id, { rejectWithValue }) => {
//     try {
//       await deleteCourse(id);
//       return id;
//     } catch (err) {
//       return rejectWithValue(err.response.data || "Failed to delete course");
//     }
//   }
// );

// const courseSlice = createSlice({
//   name: "courses",
//   initialState: {
//     list: [],
//     status: "idle", // idle | loading | success | failed
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch
//       .addCase(fetchCourses.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(fetchCourses.fulfilled, (state, action) => {
//         state.list = action.payload;
//         state.status = "success";
//       })
//       .addCase(fetchCourses.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })

//       // Create
//       .addCase(createCourse.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(createCourse.fulfilled, (state, action) => {
//         state.list.push(action.payload);
//         state.status = "success";
//       })
//       .addCase(createCourse.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })

//       // Edit
//       .addCase(editCourse.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(editCourse.fulfilled, (state, action) => {
//         const index = state.list.findIndex((c) => c.id === action.payload.id);
//         if (index !== -1) state.list[index] = action.payload;
//         state.status = "success";
//       })
//       .addCase(editCourse.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })

//       // Remove
//       .addCase(removeCourse.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(removeCourse.fulfilled, (state, action) => {
//         state.list = state.list.filter((c) => c.id !== action.payload);
//         state.status = "success";
//       })
//       .addCase(removeCourse.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export default courseSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCourses, addCourse, updateCourse, deleteCourse } from "../Services/api";

// Fetch all courses
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const courses = await getCourses(); // already returns data
      return courses;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch courses");
    }
  }
);

// Add a new course
export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (course, { rejectWithValue }) => {
    try {
      const newCourse = await addCourse(course);
      return newCourse;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add course");
    }
  }
);

// Edit an existing course
export const editCourse = createAsyncThunk(
  "courses/editCourse",
  async ({ id, course }, { rejectWithValue }) => {
    try {
      const updatedCourse = await updateCourse(id, course);
      return updatedCourse;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to update course");
    }
  }
);

// Delete a course
export const removeCourse = createAsyncThunk(
  "courses/removeCourse",
  async (id, { rejectWithValue }) => {
    try {
      const deletedId = await deleteCourse(id);
      return deletedId;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to delete course");
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "success";
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Create
      .addCase(createCourse.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.status = "success";
      })
      // Edit
      .addCase(editCourse.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (c) => c.courseID === action.payload.courseID
        );
        if (index !== -1) state.list[index] = action.payload;
        state.status = "success";
      })
      // Remove
      .addCase(removeCourse.fulfilled, (state, action) => {
        state.list = state.list.filter((c) => c.courseID !== action.payload);
        state.status = "success";
      });
  },
});

export default courseSlice.reducer;
