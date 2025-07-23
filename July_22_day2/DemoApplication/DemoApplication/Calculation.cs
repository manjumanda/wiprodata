using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace DemoApplication
{
    internal class Calculation
    {
        public int Sum(int a,int b)
        {
            return a + b;
        }
        public int Sub(int a,int b)
        {
            return a - b;
        }
        public int Mul(int a,int b)
        {
            return a*b;
        }

        static void Main()
        {
            int a, b;
            Console.WriteLine("Enter 2 Numbers");
            a = Convert.ToInt32(Console.ReadLine());
            b = Convert.ToInt32(Console.ReadLine());
            Calculation calculation = new Calculation();
           int result= calculation.Sum(a, b);
            Console.WriteLine("Sum is "+result);
            result = calculation.Sub(a, b);
            Console.WriteLine("sub is "+result);
            result = calculation.Mul(a, b);
            Console.WriteLine("mul is "+result);


        }
    }
}
