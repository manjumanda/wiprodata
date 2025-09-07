using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OLMS_Project.Models
{
    public class Courses
    {
        [Key]
        public int CourseID { get; set; }

        [Required]
        public string Title { get; set; }

        public string Description { get; set; }
        public string Category { get; set; }
        public string Difficulty { get; set; }

        // Foreign key to Instructor
        [Required]
        public int? InstructorID { get; set; }

        // Navigation property (one instructor per course)
        [ForeignKey("InstructorID")]
        public Instructors Instructor { get; set; }

        // Navigation collections
        public ICollection<Enrolments> Enrollments { get; set; }
        public ICollection<Assignments> Assignments { get; set; }
        public ICollection<Quizzes> Quizzes { get; set; }
    }
}

