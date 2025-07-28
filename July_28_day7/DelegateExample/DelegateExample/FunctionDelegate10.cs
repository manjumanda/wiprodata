using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample
{
    internal class FunctionDelegate10
    {
        public static int Fact(int n)
        {
            int f = 1;
            for(int i = 1; i <= n; i++)
            {
                f = f * i;
            }
            return f;
        }
        static void Main()
        {
            int n;
            Console.WriteLine("Enter n value");
            n=Convert.ToInt32(Console.ReadLine());
            Func<int, int> obj = Fact;
            Console.WriteLine("Factorial is "+obj(n));
        }
    }
}
