using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensionExample1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Calculation calculation = new Calculation();

            Console.WriteLine("The sum is "+calculation.Sum(12,5));
            Console.WriteLine("The sub is "+calculation.Sub(12,5));
            Console.WriteLine("The mult is "+calculation.Mult(12,5));
        }
    }
}
