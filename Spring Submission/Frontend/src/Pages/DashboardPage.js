// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./DashboardPage.css";

// function DashboardPage() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("lms.jwt");
//     navigate("/login");
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Navbar */}
//       <nav className="navbar">
//         <h1 className="logo">LMS</h1>
//         <div className="nav-links">
//           <button className="logout-btn" onClick={handleLogout}>Logout</button>
//         </div>
//       </nav>

//       {/* Dashboard content */}
//       <div className="dashboard-content">
//         <h2 className="welcome-text">📚 Learning Management System</h2>
//         <p className="subtitle">Click on any section to manage it!</p>

//         <div className="card-grid">
//           <div className="card" onClick={() => navigate("/courses")}>📘 Courses</div>
//           <div className="card" onClick={() => navigate("/assignments")}>📝 Assignments</div>
//           <div className="card" onClick={() => navigate("/quizzes")}>❓ Quizzes</div>
//           <div className="card" onClick={() => navigate("/submissions")}>📤 Submissions</div>
//           <div className="card" onClick={() => navigate("/notifications")}>🔔 Notifications</div>
//           <div className="card" onClick={() => navigate("/users")}>👥 Users</div>
//           <div className="card" onClick={() => navigate("/payments")}>💳 Payments</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;



import React from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("lms.jwt");
    navigate("/login");
  };

  const cards = [
    { title: "📘 Courses", path: "/courses" },
    { title: "📝 Assignments", path: "/assignments" },
    { title: "❓ Quizzes", path: "/quizzes" },
    { title: "📤 Submissions", path: "/submissions" },
    { title: "🔔 Notifications", path: "/notifications" },
    { title: "💳 Payments", path: "/payments" },
  ];

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">LMS</h1>
        <div className="nav-links">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard content */}
      <div className="dashboard-content">
        <h2 className="welcome-text">📚 Learning Management System</h2>
        <p className="subtitle">Click on any section to manage it!</p>

        <div className="card-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card"
              onClick={() => navigate(card.path)}
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;