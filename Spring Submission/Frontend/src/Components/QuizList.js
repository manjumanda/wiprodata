import React, { useEffect, useState } from "react";
import { getQuizzes, deleteQuiz } from "../Services/quizService";

export default function QuizList({ onEdit }) {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    loadQuizzes();
  }, []);

  async function loadQuizzes() {
    try {
      const data = await getQuizzes();
      setQuizzes(data);
    } catch (error) {
      console.error("Failed to load quizzes:", error);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this quiz?")) return;
    try {
      await deleteQuiz(id);
      loadQuizzes();
    } catch (error) {
      console.error("Failed to delete quiz:", error);
    }
  }

  return (
    <div className="quiz-list">
      <h2>Quizzes</h2>
      {quizzes.length === 0 ? (
        <p>No quizzes available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Course</th>
              <th>Questions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((q) => (
              <tr key={q.quizID}>
                <td>{q.title}</td>
                <td>{q.course?.title || "N/A"}</td>
                <td>{q.questions?.length || 0}</td>
                <td>{q.isPublished ? "Published" : "Draft"}</td>
                <td>
                  <button onClick={() => onEdit(q)}>Edit</button>
                  <button onClick={() => handleDelete(q.quizID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
