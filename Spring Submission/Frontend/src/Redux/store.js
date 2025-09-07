import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import courseReducer from "./courseSlice";
import assignmentReducer from "./assignmentSlice";
import quizReducer from "./quizSlice";
import submissionReducer from "./submissionSlice";
import notificationReducer from "./notificationSlice";
import userReducer from "./userSlice";
import paymentReducer from "./paymentSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
    assignments: assignmentReducer,
    quiz: quizReducer,
    submission: submissionReducer,
    notification: notificationReducer,
    user: userReducer,
    payment: paymentReducer,
  },
});
