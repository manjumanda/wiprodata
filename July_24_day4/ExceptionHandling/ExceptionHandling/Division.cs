using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling
{
    internal class Division
    {
        static void Main(string[] args)
        {
            int a, b,c;
            Console.WriteLine("Enter 2 numbers");
            try
            {
                a = Convert.ToInt32(Console.ReadLine());
                b = Convert.ToInt32(Console.ReadLine());
                c = a / b;
                Console.WriteLine("Division " + c);
            }
            catch(DivideByZeroException e)
            {
                Console.WriteLine("division by zero impossible");
            }
            catch(FormatException e)
            {
                Console.WriteLine("string cannot be converted as integer");
            }
            catch(OverflowException e)
            {
                Console.WriteLine("number is too big");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.GetBaseException());
                Console.WriteLine(e.Source);
                Console.WriteLine(e.StackTrace);
            }
            finally
            {
                Console.WriteLine("program from wipro batch");
            }

        }
    }
}
