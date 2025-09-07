// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// //import { fetchAssignments, createAssignment, editAssignment, removeAssignment } from "../Redux/assignmentSlice";
// import { fetchAssignments, createAssignment, editAssignment, removeAssignment } from "../Redux/assignmentSlice";
// //import { createAssignment } from "../Services/assignmentService";


// function AssignmentsPage() {
//   const dispatch = useDispatch();
//   const assignments = useSelector(state => state.assignments.list);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => { dispatch(fetchAssignments()); }, [dispatch]);

//   const handleAdd = () => {
//     if(editingId){
//       dispatch(editAssignment({id: editingId, assignment:{title, description}}));
//       setEditingId(null);
//     } else {
//       dispatch(createAssignment({title, description}));
//     }
//     setTitle(""); setDescription("");
//   };

//   const handleEdit = (assignment) => {
//     setEditingId(assignment.id);
//     setTitle(assignment.title);
//     setDescription(assignment.description);
//   };

//   const handleDelete = (id) => dispatch(removeAssignment(id));

//   return (
//     <div className="assignments-container">
//       <h2>Assignments</h2>
//       <div className="form">
//         <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/>
//         <input placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}/>
//         <button onClick={handleAdd}>{editingId ? "Update" : "Add"}</button>
//       </div>
//       <div className="list">
//         {assignments.map(a => (
//           <div key={a.id} className="card">
//             <h3>{a.title}</h3>
//             <p>{a.description}</p>
//             <button onClick={()=>handleEdit(a)}>Edit</button>
//             <button onClick={()=>handleDelete(a.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AssignmentsPage;


// AssignmentsPage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssignments, createAssignmentThunk, editAssignment, removeAssignment } from "../Redux/assignmentSlice";
import "../Components/Assignment.css";

function AssignmentsPage() {
  const dispatch = useDispatch();
  const assignments = useSelector(state => state.assignments.list || []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchAssignments());
  }, [dispatch]);

  const handleAdd = () => {
    if (!title || !description) return;
    if (editingId) {
      dispatch(editAssignment({ id: editingId, assignment: { title, description } }));
      setEditingId(null);
    } else {
      dispatch(createAssignmentThunk({ title, description }));
    }
    setTitle("");
    setDescription("");
  };

  const handleEdit = (assignment) => {
    setEditingId(assignment.id);
    setTitle(assignment.title);
    setDescription(assignment.description);
  };

  const handleDelete = (id) => {
    dispatch(removeAssignment(id));
  };

  return (
    <div className="assignment-list">
      <h2>{editingId ? "Edit Assignment" : "Add Assignment"}</h2>

      {/* Form */}
      <div className="form">
        <div className="form-group">
          <input type="text" value={title} required placeholder=" " onChange={(e) => setTitle(e.target.value)} />
          <label>Title</label>
        </div>
        <div className="form-group">
          <input type="text" value={description} required placeholder=" " onChange={(e) => setDescription(e.target.value)} />
          <label>Description</label>
        </div>
        <button className="btn-add" onClick={handleAdd}>{editingId ? "Update" : "Add"}</button>
      </div>

      {/* Assignments Grid */}
      <div className="assignment-grid">
        {assignments.length === 0 && <p style={{textAlign:"center", marginTop:"20px"}}>No assignments found.</p>}
        {assignments.map(a => (
          <div key={a.id} className="assignment-card">
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <div className="card-buttons">
              <button className="btn-edit" onClick={() => handleEdit(a)}>Edit</button>
              <button className="btn-delete" onClick={() => handleDelete(a.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignmentsPage;