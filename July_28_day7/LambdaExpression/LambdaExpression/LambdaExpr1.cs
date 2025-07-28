using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace LambdaExpression
{
    internal class LambdaExpr1
    {
        static void Main()
        {
            List<Employ> employList = new List<Employ>
        {
            new Employ{Empno=1,Name="Rajesh",Basic=56565},
             new Employ{Empno=2,Name="Venkata",Basic=56787},
              new Employ{Empno=3,Name="uday",Basic=98777},
               new Employ{Empno=4,Name="Pallavi",Basic=87676},
                new Employ{Empno=5,Name="Anusha",Basic=58776},
                 new Employ{Empno=6,Name="Rajesh",Basic=56665},
        };
            Console.WriteLine("Employ List ");
            var result1 = employList.Select(x => x);
            foreach(var v in result1)
            {
                Console.WriteLine(v);
            }

            var result2 = employList.Select(x => new { x.Name, x.Basic });
            Console.WriteLine("Projected fields are ");
            foreach(var v in result2)
            {
                Console.WriteLine(v);
            }

            var result3 = employList.Where(x => x.Basic >= 60000);
            Console.WriteLine("Salary > 60000 records are ");
            foreach(var v in result3)
            {
                Console.WriteLine(v);
            }

            var result4 = employList.Where(x => x.Name.StartsWith("V"));
            foreach(var v in result4)
            {
                Console.WriteLine(v);
            }


        }
    }
}
