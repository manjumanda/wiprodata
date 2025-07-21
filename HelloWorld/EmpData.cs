using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    internal class EmpData
    {
        static void Main()
        {
            Emp employ1 = new Emp();
            employ1.empno = 1;
            employ1.name = "Manjula";
            employ1.basic = 88329;

            Emp employ2 = new Emp();
            employ2.empno = 2;
            employ2.name = "divyaa";
            employ2.basic = 88234;

            Console.WriteLine("First Employ Data  ");
            Console.WriteLine("Employ No  " + employ1.empno);
            Console.WriteLine("Employ Name  " + employ1.name);
            Console.WriteLine("Employ Basic  " + employ1.basic);

            Console.WriteLine("Second Employ Data  ");
            Console.WriteLine("Employ No  " + employ2.empno);
            Console.WriteLine("Employ Name  " + employ2.name);
            Console.WriteLine("Employ Basic  " + employ2.basic);
        }
    }
}
