namespace OLMS_Project.Dto
{
    public class QuestionDto
    {
        public int Id { get; set; }
        public int QuizID { get; set; }
        public string QuestionText { get; set; }
        public string Options { get; set; }  // ✅ List<string>
        public string CorrectAnswer { get; set; }
    }


}
