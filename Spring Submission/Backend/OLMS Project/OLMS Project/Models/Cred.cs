using System.ComponentModel.DataAnnotations;

namespace OLMS_Project.Models
{
    public class Cred
    {
        [Key]
        public int Id { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; }
    }
}
