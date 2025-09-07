using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PropertyExample
{
    class Employ
    {
        public int Empno { get; set; }
        public string Empname { get; set; }
        public double Basic { get; set; }

    }
    internal class AutoImplemented
    {
        static void Main()
        {
            Employ emp1=new Employ();
            emp1.Empno = 1;
            emp1.Empname = "manjula";
            emp1.Basic = 5677.45;

            Employ emp2=new Employ();
            emp2.Empno = 2;
            emp2.Empname = "sailaja";
            emp2.Basic = 3456.66;

            Employ emp3=new Employ();
            emp3.Empno = 3;
            emp3.Empname = "rezwana";
            emp3.Basic = 3455.65;

            Console.WriteLine("First Employee Record(s)  ");
            Console.WriteLine("Employ No  " + emp1.Empno + " Employ Name " + emp1.Empname + " Employ Basic  " + emp1.Basic);
            Console.WriteLine("Employ No  " + emp2.Empno + " Employ Name " + emp2.Empname + " Employ Basic  " + emp2.Basic);
            Console.WriteLine("Employ No  " + emp3.Empno + " Employ Name " + emp3.Empname + " Employ Basic  " + emp3.Basic);
        }
    }
}
