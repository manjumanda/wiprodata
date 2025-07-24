using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling
{
    internal class Quiz1
    {
        static void Main()
        {
            int[] a = new int[] { 1, 2 };
            int x = 5, y = 0;
            try
            {
                a[2] = x / y;
            }
            catch (IndexOutOfRangeException e)
            {
                Console.WriteLine("array is small");
            }
            catch (DivideByZeroException e)
            {
                Console.WriteLine("division by zero impossible");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
