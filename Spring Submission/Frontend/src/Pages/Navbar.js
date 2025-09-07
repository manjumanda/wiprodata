import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("lms.jwt");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">LMS</div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</NavLink>
        <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>Courses</NavLink>
        <NavLink to="/assignments" className={({ isActive }) => (isActive ? "active" : "")}>Assignments</NavLink>
        <NavLink to="/quizzes" className={({ isActive }) => (isActive ? "active" : "")}>Quizzes</NavLink>
        <NavLink to="/submissions" className={({ isActive }) => (isActive ? "active" : "")}>Submissions</NavLink>
        <NavLink to="/notifications" className={({ isActive }) => (isActive ? "active" : "")}>Notifications</NavLink>
        <NavLink to="/users" className={({ isActive }) => (isActive ? "active" : "")}>Users</NavLink>
        <NavLink to="/payments" className={({ isActive }) => (isActive ? "active" : "")}>Payments</NavLink>
      </div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
