import React from "react";
import SubmissionList from "../Components/SubmissionList";
import "./SubmissionPage.css";

export default function SubmissionsPage() {
  return (
    <div className="submissions-page">
      <h1>Submissions</h1>
      <SubmissionList />
    </div>
  );
}
