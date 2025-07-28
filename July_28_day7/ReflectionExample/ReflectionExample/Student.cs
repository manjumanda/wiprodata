using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReflectionExample
{
    internal class Student
    {
        public int StudentId { get;set; }
        public string StudentName { get;set; }
        public double SCgpa { get; set; }

        public Student()
        {
            StudentId = 0;
            StudentName= string.Empty;
            SCgpa = 0.0;
        }
        public Student(int studentId,string studentName,double cgpa)
        {
            StudentId = studentId;
            StudentName = studentName;
            SCgpa = cgpa;
        }

        public override string ToString()
        {
            return "Sid " + StudentId + " Name " + StudentName + " Cgpa " + SCgpa;
        }
        public void ShowStudent()
        {
            Console.WriteLine("Under Construction....");
        }
        public void AddStudent()
        {
            Console.WriteLine("Please add student...");
        }
        public void SearchStudent()
        {
            Console.WriteLine("Serach student "+StudentId);
        }
        public void DeleteStudent()
        {
            Console.WriteLine("Delete student"+StudentId);
        }

    }
}
