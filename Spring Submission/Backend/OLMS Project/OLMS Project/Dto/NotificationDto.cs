namespace OLMS_Project.Dto
{
    public class NotificationDto
    {
       
            public int NotificationID { get; set; }   // used for update
            public int UserId { get; set; }           // FK to Student
            public string Message { get; set; }
            public bool IsRead { get; set; } = false;
            public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        }
    }

