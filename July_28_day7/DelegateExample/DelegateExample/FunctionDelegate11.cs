using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample
{
    internal class FunctionDelegate11
    {
        public static int Sum(int x,int y)
        {
            return x + y;
        }
        public static int Sub(int x, int y)
        {
            return x - y;
        }
        public static int Mul(int x, int y)
        {
            return x * y;
        }

        static void Main()
        {
            int a, b;
            Console.WriteLine("ENter two numbers");
            a=Convert.ToInt32(Console.ReadLine());
            b=Convert.ToInt32(Console.ReadLine());
            Func<int, int, int> obj = Sum;
            Console.WriteLine("Sum is " + obj(a, b));
            obj += Sub;
            Console.WriteLine("Sub is "+obj(a,b));
            obj += Mul;
            Console.WriteLine("Mul is " + obj(a, b));
        }
    }
}
