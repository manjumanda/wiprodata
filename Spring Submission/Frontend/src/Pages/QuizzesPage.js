import React, { useState } from "react";
import QuizList from "../Components/QuizList";
 // Form for add/edit
import "./QuizzesPage.css";

export default function QuizzesPage() {
  const [editingQuiz, setEditingQuiz] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (quiz) => {
    setEditingQuiz(quiz);
    setShowForm(true);
  };

  const handleNewQuiz = () => {
    setEditingQuiz(null);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingQuiz(null);
  };

  return (
    <div className="quizzes-page">
      <div className="header">
        <h1>Quizzes</h1>
        <button className="new-quiz-btn" onClick={handleNewQuiz}>
          + New Quiz
        </button>
      </div>

      <QuizList onEdit={handleEdit} />

      {/* {showForm && (
        <QuizForm
          quiz={editingQuiz}
          onClose={handleFormClose}
          onSaved={handleFormClose} // refresh list after save
        />
      )} */}
    </div>
  );
}
