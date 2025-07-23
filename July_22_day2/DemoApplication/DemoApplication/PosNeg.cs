using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoApplication
{
    internal class PosNeg
    {
        public void Check(int n)
        {
            if (n >= 0)
            {
                Console.WriteLine("positive number");
            }
            else
            {
                Console.WriteLine("negative number");
            }
        }
        static void Main()
        {
            int n;
            Console.WriteLine("enter a numberr");
            n = Convert.ToInt32(Console.ReadLine());
            PosNeg obj = new PosNeg();
            obj.Check(n);

        }
    }
}
