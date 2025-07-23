using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoApplication
{
    internal class BoxingEx
    {
        static void Main()
        {
            int x = 12;
            string str = "wipro";
            double y = 32.4;

            //implement boxing
            object obj1 = x;
            object obj2 = str;
            object obj3 = y;

            //unboxing
            int x1 = (Int32)(obj1);
            string str1 = (string)(obj2);
            double y1 = (Double)(obj3);

            Console.WriteLine(x1);
            Console.WriteLine(str1);
            Console.WriteLine(y1);

        
        }
    }
}
