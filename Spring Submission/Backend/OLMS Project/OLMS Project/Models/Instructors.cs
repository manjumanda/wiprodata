using System.ComponentModel.DataAnnotations;

namespace OLMS_Project.Models
{
    public class Instructors
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        // One instructor can teach many courses
        public ICollection<Courses> Courses { get; set; }
    }
}
