using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OLMS_Project.Models
{
    public class Notifications
    {
        [Key]
        public int NotificationID { get; set; }

        [Required]
        [ForeignKey("Student")]  
        public int UserId { get; set; }

        public Users Student { get; set; }

        [Required]
        public string Message { get; set; }

        public bool IsRead { get; set; } = false;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}