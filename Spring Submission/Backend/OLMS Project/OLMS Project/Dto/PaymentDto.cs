namespace OLMS_Project.Dto
{
    public class PaymentDto
    {
       
            public int PaymentID { get; set; }   // For update
            public int UserID { get; set; }      // FK to Student
            public int CourseID { get; set; }    // FK to Course
            public decimal Amount { get; set; }
            public string Status { get; set; }   // e.g., Pending, Completed, Failed
            public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        }
    }


