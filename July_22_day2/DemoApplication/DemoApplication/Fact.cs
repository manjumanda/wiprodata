using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoApplication
{
    internal class Fact
    {
        public void Calc(int n)
        {
            int i = 1;
            int factorial = 1;
            while (i <=n)
            {
                factorial = factorial * i;
                i++;
            }
            Console.WriteLine("Factorial is "+factorial);
        }


        static void Main()
        {
            int n;
            Console.WriteLine("Enter N value");
            n = Convert.ToInt32(Console.ReadLine());
            Fact fact = new Fact();
            fact.Calc(n);

        }
    }
}
