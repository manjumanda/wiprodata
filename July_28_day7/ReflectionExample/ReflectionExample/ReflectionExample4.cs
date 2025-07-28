using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReflectionExample
{
    internal class ReflectionExample4
    {
        [Obsolete("Deprecated Method",false)]
        public static void TestMethod()
        {
            Console.WriteLine("Demo method");
        }
        static void Main()
        {

        }
    }
}
