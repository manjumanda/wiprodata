// import React, { useEffect, useState } from "react";
// import { getAssignments, deleteAssignment } from "../Services/assignmentService";
// import "./Assignment.css";

// export default function AssignmentList({ onEdit }) {
//   const [assignments, setAssignments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadAssignments();
//   }, []);

//   async function loadAssignments() {
//     setLoading(true);
//     try {
//       const data = await getAssignments();
//       // Optional: transform keys if backend returns camelCase
//       const mappedData = data.map(a => ({
//         AssignmentID: a.AssignmentID ?? a.assignmentID,
//         Title: a.Title ?? a.title,
//         Description: a.Description ?? a.description,
//         CourseID: a.CourseID ?? a.courseID,
//         DueDate: a.DueDate ?? a.dueDate
//       }));
//       setAssignments(mappedData);
//     } catch (err) {
//       console.error("Failed to load assignments:", err);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleDelete(id) {
//     if (!window.confirm("Are you sure you want to delete this assignment?")) return;
//     try {
//       await deleteAssignment(id);
//       loadAssignments();
//     } catch (err) {
//       console.error("Failed to delete assignment:", err);
//     }
//   }

//   if (loading) return <p>Loading assignments...</p>;

//   return (
//     <div className="assignment-list">
//       <h2>Assignments</h2>
//       {assignments.length === 0 ? (
//         <p>No assignments found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Course ID</th>
//               <th>Due Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assignments.map((a) => (
//               <tr key={a.AssignmentID}>
//                 <td>{a.Title}</td>
//                 <td>{a.Description || "-"}</td>
//                 <td>{a.CourseID}</td>
//                 <td>{new Date(a.DueDate).toLocaleDateString()}</td>
//                 <td>
//                   <button className="btn-edit" onClick={() => onEdit(a)}>Edit</button>
//                   <button className="btn-delete" onClick={() => handleDelete(a.AssignmentID)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
