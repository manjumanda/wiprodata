// import React, { useEffect, useState } from "react";
// import { getSubmissions } from "../Services/submissionService";

// export default function SubmissionList() {
//   const [subs, setSubs] = useState([]);

//   useEffect(() => {
//     load();
//   }, []);

//   async function load() {
//     const data = await getSubmissions();
//     setSubs(data);
//   }

//   return (
//     <div>
//       <h2>Submissions</h2>
//       <ul>
//         {subs.map((s) => (
//           <li key={s.submissionID}>
//             Assignment {s.assignmentID} by User {s.userId} — Grade: {s.grade ?? "Pending"}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { getSubmissions } from "../Services/submissionService";
import "./SubmissionList.css";

export default function SubmissionList() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getSubmissions();
    setSubs(data);
  }

  return (
    <div className="submission-container">
      <h2>Submissions</h2>
      <div className="submission-grid">
        <div className="submission-header">Assignment</div>
        <div className="submission-header">User</div>
        <div className="submission-header">Grade</div>

        {subs.map((s) => (
          <>
            <div key={s.submissionID + "-assignment"}>{s.assignmentID}</div>
            <div key={s.submissionID + "-user"}>User {s.userId}</div>
            <div
              key={s.submissionID + "-grade"}
              className={s.grade ? (s.grade >= 85 ? "grade-good" : "grade-average") : "grade-pending"}
            >
              {s.grade ?? "Pending"}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
