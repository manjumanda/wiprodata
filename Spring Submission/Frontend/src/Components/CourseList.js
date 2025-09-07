// import React, { useEffect, useState } from "react";
// import { getCourses, deleteCourse } from "../Services/courseService";
// import "./CoursesPage.css";

// export default function CourseList({ onEdit }) {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadCourses();
//   }, []);

//   async function loadCourses() {
//     setLoading(true);
//     try {
//       const data = await getCourses();
//       // Map backend keys if needed
//       const mappedData = data.map(c => ({
//         CourseID: c.CourseID ?? c.courseID,
//         Title: c.Title ?? c.title,
//         Category: c.Category ?? c.category,
//         Difficulty: c.Difficulty ?? c.difficulty
//       }));
//       setCourses(mappedData);
//     } catch (err) {
//       console.error("Error loading courses", err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleDelete(id) {
//     if (!window.confirm("Are you sure you want to delete this course?")) return;
//     try {
//       await deleteCourse(id);
//       loadCourses();
//     } catch (err) {
//       console.error("Failed to delete course:", err);
//     }
//   }

//   if (loading) return <p>Loading courses...</p>;

//   return (
//     <div className="course-list">
//       <h2>Courses</h2>
//       {courses.length === 0 ? (
//         <p>No courses found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Category</th>
//               <th>Difficulty</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((c) => (
//               <tr key={c.CourseID}>
//                 <td>{c.Title}</td>
//                 <td>{c.Category || "-"}</td>
//                 <td>{c.Difficulty || "-"}</td>
//                 <td>
//                   <button className="btn-edit" onClick={() => onEdit(c)}>Edit</button>
//                   <button className="btn-delete" onClick={() => handleDelete(c.CourseID)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
