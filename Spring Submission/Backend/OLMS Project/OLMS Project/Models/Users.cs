using System.ComponentModel.DataAnnotations;

namespace OLMS_Project.Models
{
    public class Users
    {
        [Key]
        public int UserID { get; set; }


        public string FullName { get; set; }


        public string Email { get; set; }

        public string Role { get; set; }

        // Navigation
        public ICollection<Enrolments> Enrollments { get; set; }
        public ICollection<Submissions> Submissions { get; set; }
        public ICollection<Notifications> Notifications { get; set; }
        public ICollection<Payments> Payments { get; set; }
        public string PasswordHash { get; internal set; }
    }
}

