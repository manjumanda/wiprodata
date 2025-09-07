// import React, { useState, useEffect } from "react";
// import { createCourse, updateCourse } from "../Services/courseService";
// import "./CoursesPage.css";

// export default function CourseForm({ course, onSaved }) {
//   const [form, setForm] = useState({
//     CourseID: "",
//     Title: "",
//     Category: "",
//     Difficulty: "",
//     InstructorID: "",
//     isPublished: false,
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (course) {
//       // Remove CourseID when adding new course
//       const { CourseID, ...rest } = course;
//       setForm(rest);
//     }
//   }, [course]);

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     const val = type === "checkbox" ? checked : name === "InstructorID" ? Number(value) : value;
//     setForm((f) => ({ ...f, [name]: val }));
//   }

//   function validate() {
//     const errs = {};
//     if (!form.Title.trim()) errs.Title = "Title is required";
//     if (!form.InstructorID || form.InstructorID <= 0) errs.InstructorID = "Instructor ID is required";
//     return errs;
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length > 0) return;

//     setSubmitting(true);

//     try {
//       // Send payload without CourseID for new course
//       await createCourse(form);
//       onSaved();
//       // Reset form after successful creation
//       setForm({
//         CourseID:"",
//         Title: "",
//         Category: "",
//         Difficulty: "",
//         InstructorID: "",
//         isPublished: false,
//       });
//       setErrors({});
//     } catch (err) {
//       console.error("Error adding course:", err.response || err);
//       alert("Failed to add course. Check console for details.");
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="course-form">
//       <h3>Add Course</h3>

//       <label>Title</label>
//       <input
//         name="Title"
//         placeholder="Course Title"
//         value={form.Title}
//         onChange={handleChange}
//         className={errors.Title ? "input-error" : ""}
//       />
//       {errors.Title && <small className="error-text">{errors.Title}</small>}

//       {/* <label>Description</label>
//       <textarea
//         name="Description"
//         placeholder="Course Description"
//         value={form.Description}
//         onChange={handleChange}
//       /> */}

//       <label>Category</label>
//       <input
//         name="Category"
//         placeholder="Category"
//         value={form.Category}
//         onChange={handleChange}
//       />

//       <label>Difficulty</label>
//       <input
//         name="Difficulty"
//         placeholder="Difficulty Level"
//         value={form.Difficulty}
//         onChange={handleChange}
//       />

//       <label>Instructor ID</label>
//       <input
//         name="InstructorID"
//         type="number"
//         placeholder="Instructor ID"
//         value={form.InstructorID}
//         onChange={handleChange}
//         className={errors.InstructorID ? "input-error" : ""}
//       />
//       {errors.InstructorID && <small className="error-text">{errors.InstructorID}</small>}

//       <label className="checkbox-label">
//         Published
//         <input
//           type="checkbox"
//           name="isPublished"
//           checked={form.isPublished}
//           onChange={handleChange}
//         />
//       </label>

//       <button type="submit" className="btn-save" disabled={submitting}>
//         {submitting ? "Saving..." : "Save"}
//       </button>
//     </form>
//   );
// }
