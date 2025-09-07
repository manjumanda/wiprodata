using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OLMS_Project.Models
{
    public class Payments
    {
        [Key]
        public int PaymentID { get; set; }

        [Required]
        [ForeignKey("Student")]   
        public int UserID { get; set; }
        public Users Student { get; set; }

        [Required]
        [ForeignKey("Course")]    
        public int CourseID { get; set; }
        public Courses Course { get; set; }

        [Required]
        public decimal Amount { get; set; }

        public string Status { get; set; } 

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
    
