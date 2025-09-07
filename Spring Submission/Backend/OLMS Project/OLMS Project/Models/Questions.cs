using System.ComponentModel.DataAnnotations;

namespace OLMS_Project.Models
{
    public class Questions
    {
        [Key]
            public int Id { get; set; }
            public int QuizID { get; set; }
            public Quizzes Quiz { get; set; }
            public string QuestionText { get; set; }
            public string Options { get; set; }  // ✅ string, not List<string>
            public string CorrectAnswer { get; set; }
        }

    }
