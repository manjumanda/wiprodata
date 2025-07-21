using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    internal class BitWise4
    {
        static void Main()
        {
            int a = 7;
            //0111 
            //1000
            Console.WriteLine(~a);//-8

            int b = -6;
            //0110
            //1001
            Console.WriteLine(~b);//5
        }
    }
}
