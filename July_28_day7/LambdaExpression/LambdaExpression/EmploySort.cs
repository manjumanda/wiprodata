using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LambdaExpression
{
    internal class EmploySort
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
            employList.Sort();
            Console.WriteLine("Sorted Data ");
            var result = employList.Select(x => x);
            foreach (var v in result)
            {
                Console.WriteLine(v);
            }
            Console.WriteLine("Sort by name-wise");
            employList.Sort(new NameComparer());
            var result2 = employList.Select(x => x);
            foreach (var v in result2)
            {
                Console.WriteLine(v);
            }

            Console.WriteLine("Sort by basic_wise");
            employList.Sort(new BasicComparer());
            foreach (var v in employList)
            {
                Console.WriteLine(v);
            }


           
            Console.WriteLine("sorted by empno...");
            var sorted = employList.OrderBy(x => x.Empno);
            foreach(var v in sorted)
            {
                Console.WriteLine(v);
            }
        }
    }
}
