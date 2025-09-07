CREATE TABLE Questions (
    Id INT IDENTITY PRIMARY KEY,
    QuizID INT NOT NULL,
    QuestionText NVARCHAR(MAX) NOT NULL,
    Options NVARCHAR(MAX) NOT NULL,       -- Store as JSON ["A","B","C","D"]
    CorrectAnswer NVARCHAR(50) NOT NULL,
    FOREIGN KEY (QuizID) REFERENCES Quizzes(QuizID) ON DELETE CASCADE
);

CREATE TABLE Submissions (
    SubmissionID INT IDENTITY PRIMARY KEY,
    AssignmentID INT NOT NULL,
    UserId INT NOT NULL,
    FileUrl NVARCHAR(MAX),
    Grade FLOAT,
    SubmittedAt DATETIME2 DEFAULT GETUTCDATE(),
    FOREIGN KEY (AssignmentID) REFERENCES Assignments(AssignmentID) ON DELETE CASCADE,
    FOREIGN KEY (UserId) REFERENCES Student(UserId) ON DELETE CASCADE
);

INSERT INTO Questions (QuizID, QuestionText, Options, CorrectAnswer)
VALUES
(1, 'What is the main purpose of React?', 'Building user interfaces;Managing databases;Creating operating systems;Compiling code', 'Building user interfaces'),
(1, 'Which hook is used for state management in functional components?', 'useState;useEffect;useContext;useReducer', 'useState'),
(1, 'Which method is used to render React elements?', 'ReactDOM.render;React.render;render();createRoot', 'ReactDOM.render');

-- Insert Questions for Course 2 (SQL Fundamentals)
INSERT INTO Questions (QuizID, QuestionText, Options, CorrectAnswer)
VALUES
(2, 'What does SQL stand for?', 'Structured Query Language;Simple Query Language;Systematic Query Logic;Standard Question Language', 'Structured Query Language'),
(2, 'Which command is used to retrieve data from a table?', 'SELECT;GET;FETCH;SHOW', 'SELECT'),
(2, 'Which SQL clause is used to filter rows?', 'WHERE;HAVING;FILTER;CONDITION', 'WHERE');




-- Student 1 submits Assignment 1
INSERT INTO Submissions (AssignmentId, UserId, FileUrl, Grade)
VALUES (1, 1, 'https://lms-files.com/submissions/student1-assignment1.docx', 85.0);

-- Student 2 submits Assignment 1
INSERT INTO Submissions (AssignmentId, UserId, FileUrl, Grade)
VALUES (1, 2, 'https://lms-files.com/submissions/student2-assignment1.pdf', 90.0);

-- Student 3 submits Assignment 2
INSERT INTO Submissions (AssignmentId, UserId, FileUrl, Grade)
VALUES (2, 3, 'https://lms-files.com/submissions/student3-assignment2.zip', 70.0);

-- Student 4 submits Assignment 3 (no grade yet)
INSERT INTO Submissions (AssignmentId, UserId, FileUrl, Grade)
VALUES (3, 4, 'https://lms-files.com/submissions/student4-assignment3.docx', NULL);

-- Student 5 submits Assignment 2
INSERT INTO Submissions (AssignmentId, UserId, FileUrl, Grade)
VALUES (2, 5, 'https://lms-files.com/submissions/student5-assignment2.pdf', 95.0);