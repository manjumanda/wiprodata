// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchCourses,
//   createCourse,
//   editCourse,
//   removeCourse,
// } from "../Redux/courseSlice";
// import "./CoursesPage.css";

// function CoursesPage() {
//   const dispatch = useDispatch();
//   const { list: courses, status, error } = useSelector((state) => state.courses);

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     dispatch(fetchCourses());
//   }, [dispatch]);

//   const handleAddOrUpdate = () => {
//     const courseData = { Title: title, Description: description, Category: category, Difficulty: difficulty };

//     if (editingId) {
//       dispatch(editCourse({ id: editingId, course: courseData }));
//       setEditingId(null);
//     } else {
//       dispatch(createCourse(courseData));
//     }

//     setTitle("");
//     setDescription("");
//     setCategory("");
//     setDifficulty("");
//   };

//   const handleEdit = (course) => {
//     setEditingId(course.courseID || course.CourseID);
//     setTitle(course.title || course.Title);
//     setDescription(course.description || course.Description);
//     setCategory(course.category || course.Category);
//     setDifficulty(course.difficulty || course.Difficulty);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this course?")) {
//       dispatch(removeCourse(id));
//     }
//   };

//   return (
//     <div className="courses-container">
//       <h2 className="page-title">📘 Courses</h2>

//       {/* Add/Edit Form */}
//       <div className="form-card">
//         <h3>{editingId ? "Update Course" : "Add New Course"}</h3>
//         <input
//           type="text"
//           placeholder="Course Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Course Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         />
//         <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
//           <option value="">Select Difficulty</option>
//           <option value="Beginner">Beginner</option>
//           <option value="Intermediate">Intermediate</option>
//           <option value="Advanced">Advanced</option>
//         </select>
//         <button className="btn-primary" onClick={handleAddOrUpdate}>
//           {editingId ? "Update Course" : "Add Course"}
//         </button>
//       </div>

//       {/* Show Courses */}
//       {status === "loading" && <p>Loading courses...</p>}
//       {error && <p className="error">{error}</p>}

//       <div className="course-grid">
//         {courses && courses.length > 0 ? (
//           courses.map((c) => (
//             <div key={c.courseID || c.CourseID} className="course-card">
//               <h3>{c.title || c.Title}</h3>
//               <p>{c.description || c.Description}</p>
//               <p>
//                 <strong>Category:</strong> {c.category || c.Category || "N/A"}
//               </p>
//               <p>
//                 <strong>Difficulty:</strong>{" "}
//                 {c.difficulty || c.Difficulty || "N/A"}
//               </p>
//               <div className="actions">
//                 <button className="btn-edit" onClick={() => handleEdit(c)}>
//                   Edit
//                 </button>
//                 <button
//                   className="btn-delete"
//                   onClick={() => handleDelete(c.courseID || c.CourseID)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No courses available. Add some!</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CoursesPage;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourses,
  createCourse,
  editCourse,
  removeCourse,
} from "../Redux/courseSlice";
import "./CoursesPage.css";

function CoursesPage() {
  const dispatch = useDispatch();
  const { list: courses, status, error } = useSelector((state) => state.courses);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleAddOrUpdate = () => {
    const courseData = {
      Title: title,
      Description: description,
      Category: category,
      Difficulty: difficulty,
    };

    if (editingId) {
      dispatch(editCourse({ id: editingId, course: courseData }));
      setEditingId(null);
    } else {
      dispatch(createCourse(courseData));
    }

    setTitle("");
    setDescription("");
    setCategory("");
    setDifficulty("");
  };

  const handleEdit = (course) => {
    setEditingId(course.courseID || course.CourseID);
    setTitle(course.title || course.Title);
    setDescription(course.description || course.Description);
    setCategory(course.category || course.Category);
    setDifficulty(course.difficulty || course.Difficulty);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      dispatch(removeCourse(id));
    }
  };

  return (
    <div className="courses-container">
      <h2 className="page-title">📘 Courses</h2>

      {/* Add/Edit Form */}
      <div className="form-card">
        <h3>{editingId ? "Update Course" : "Add New Course"}</h3>
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Select Difficulty</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button className="btn-primary" onClick={handleAddOrUpdate}>
          {editingId ? "Update Course" : "Add Course"}
        </button>
      </div>

      {/* Show Courses */}
      {status === "loading" && <p>Loading courses...</p>}
      {error && <p className="error">{error}</p>}

      <div className="course-grid">
        {courses && courses.length > 0 ? (
          courses.map((c) => (
            <div key={c.courseID || c.CourseID || c.id} className="course-card">
              <h3>{c.title || c.Title}</h3>
              <p>{c.description || c.Description}</p>
              <p>
                <strong>Category:</strong> {c.category || c.Category || "N/A"}
              </p>
              <p>
                <strong>Difficulty:</strong> {c.difficulty || c.Difficulty || "N/A"}
              </p>
              <div className="actions">
                <button className="btn-edit" onClick={() => handleEdit(c)}>
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(c.courseID || c.CourseID || c.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No courses available. Add some!</p>
        )}
      </div>
    </div>
  );
}

export default CoursesPage;
