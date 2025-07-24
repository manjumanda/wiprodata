using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling
{
    internal class throwex
    {
        public void Show(int n)
        {
            if (n < 0)
            {
                throw new DivideByZeroException("negative numbers not allowed..");
            }
            else if (n == 0)
            {
                throw new IndexOutOfRangeException("zero is invalid value");
            }
            else
            {
                Console.WriteLine("N value is "+n);
            }

    }
         static void Main()
                {
                    int n;

                    Console.WriteLine("enter a number");
                    n = Convert.ToInt32(Console.ReadLine());
                    throwex exp = new throwex();
            try
            {
                exp.Show(n);
            }
            catch(DivideByZeroException e)
            {
                Console.WriteLine(e.Message);
            }
            catch(IndexOutOfRangeException e)
            {
                Console.WriteLine(e.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }



          
                }
    }
}
