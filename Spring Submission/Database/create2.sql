CREATE TABLE StudentCourse (
    UserId INT NOT NULL,
    CourseId INT NOT NULL,
    EnrolledAt DATETIME DEFAULT GETDATE(),
    PRIMARY KEY (UserId, CourseId),
    FOREIGN KEY (UserId) REFERENCES users(UserId),
    FOREIGN KEY (CourseId) REFERENCES Courses(CourseId)
);

INSERT INTO StudentCourse (UserId, CourseId, EnrolledAt) VALUES (1, 1, GETDATE());
INSERT INTO StudentCourse (UserId, CourseId, EnrolledAt) VALUES (1, 2, GETDATE());
INSERT INTO StudentCourse (UserId, CourseId, EnrolledAt) VALUES (2, 1, GETDATE());
INSERT INTO StudentCourse (UserId, CourseId, EnrolledAt) VALUES (2, 3, GETDATE());
INSERT INTO StudentCourse (UserId, CourseId, EnrolledAt) VALUES (3, 2, GETDATE());
INSERT INTO StudentCourse (UserId, CourseId, EnrolledAt) VALUES (3, 4, GETDATE());
INSERT INTO StudentCourse (UserId, CourseId, EnrolledAt) VALUES (4, 5, GETDATE());
INSERT INTO StudentCourse (UserId, CourseId, EnrolledAt) VALUES (5, 3, GETDATE());
INSERT INTO StudentCourse (UserId, CourseId, EnrolledAt) VALUES (5, 4, GETDATE());
INSERT INTO StudentCourse (UserId, CourseId, EnrolledAt) VALUES (5, 5, GETDATE());