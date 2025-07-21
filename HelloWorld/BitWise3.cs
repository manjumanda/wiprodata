using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    internal class BitWise3
    {
        static void Main()
        //Bitwise XOR sets each bit to 1 if the corresponding bits are different
        {
            int a = 5, b = 3;
            //101
            //011
            //110  ans 6
            Console.WriteLine( a ^ b);
        } 
    }
}
