using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateExample
{
    internal class DelegateExample3
    {
        public delegate void MyDelegate(int n);

        public static void Fact(int n)
        {
            int f = 1;
            for(int i = 1; i <= n; i++)
            {
                f = f * i;
            }
            Console.WriteLine("Factorial is "+f);
        }
        public static void PosNeg(int n)
        {
            if (n >= 0)
            {
                Console.WriteLine("Positive number");
            }
            else
            {
                Console.WriteLine("Negative number");
            }
        }
        public static void EvenOdd(int n)
        {
            if (n % 2 == 0)
            {
                Console.WriteLine("Even number");
            }
            else
            {
                Console.WriteLine("Odd Number");
            }
        }
        static void Main()
        {
            int n;
            Console.WriteLine("Enter N value");
            n = Convert.ToInt32(Console.ReadLine());
            MyDelegate obj = new MyDelegate(PosNeg);
            obj += new MyDelegate(EvenOdd);
            obj += new MyDelegate(Fact);
            obj(n);
        }

    }
}
