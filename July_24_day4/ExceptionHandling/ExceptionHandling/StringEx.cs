using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling
{
    internal class StringEx
    {
        static void Main()
        {
            string str = "Hello world";
            try
            {
               
                Console.WriteLine(str.Substring(2, 1000));
            }
            catch (ArgumentOutOfRangeException e)
            {
                Console.WriteLine("string is small as range(2 to 1000) not posibble");
            }
            catch(Exception e) {
                Console.WriteLine(e);

            }
        }
    }
}
