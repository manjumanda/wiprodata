using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling
{
    internal class Calculation
    {
        public void Calc(int a,int b)
        {
            if (a < 0 || b < 0)
            {
                throw new NegativeException 
            }

        }
        static void Main()
        {
            int a, b;
            Console.WriteLine("emter 2 numbers");
            a=Convert.ToInt32(Console.ReadLine());
            b=Convert.ToInt32(Console.ReadLine());
            Calculation calculation = new Calculation();
            try
            {
                calculation.Calc(a, b);
            }
            catch (Exception e)
            { 
            }
        }
    }

}
