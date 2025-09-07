CREATE TABLE Instructors (
    Id INT IDENTITY PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(150) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(MAX) NOT NULL
);

CREATE TABLE Admins (
    Id INT IDENTITY PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(150) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(MAX) NOT NULL
);

INSERT INTO Instructors (Name, Email, PasswordHash) VALUES
('Prof. Richard Feynman', 'feynman@lms.com', 'hashed_pw_inst1'),
('Dr. Jane Goodall', 'goodall@lms.com', 'hashed_pw_inst2'),
('Dr. Alan Turing', 'turing@lms.com', 'hashed_pw_inst3'),
('Prof. Marie Curie', 'curie@lms.com', 'hashed_pw_inst4'),
('Dr. Nikola Tesla', 'tesla@lms.com', 'hashed_pw_inst5');

--Admins (2 entries)
INSERT INTO Admins (Name, Email, PasswordHash) VALUES
('System Admin', 'admin1@lms.com', 'hashed_pw_admin1'),
('Super Admin', 'admin2@lms.com', 'hashed_pw_admin2');



