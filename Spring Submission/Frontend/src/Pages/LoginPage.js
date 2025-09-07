import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student"); // default role
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://localhost:7220/api/Auth/login",
        { email, password, role } // must match backend UserLoginDto
      );

      if (response.data.token) {
        // Save token
        localStorage.setItem("lms.jwt", response.data.token);

        // Save user info (if backend sends)
        if (response.data.user) {
          localStorage.setItem("lms.user", JSON.stringify(response.data.user));
        } else {
          // fallback if backend only returns token
          localStorage.setItem("lms.user", JSON.stringify({ email, role }));
        }

        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        setError("Login failed. Invalid credentials.");
      }
    } catch (err) {
      setError(err.response?.data?.Message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
            <option value="Admin">Admin</option>
          </select>
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
